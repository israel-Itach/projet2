import Button1 from "react-bootstrap/Button";
import Button from "@mui/material/Button";
import Card from "react-bootstrap/Card";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";

function Bike({ data: { name, description, image_url, isAvailable, id } }) {
  const [disabled, setDisabled] = useState(isAvailable);

  const handleDelete = () => {
    fetch(`http://localhost:3001/bike/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete bike");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Bike deleted successfully");
        // Do something after the bike is deleted
      })
      .catch((error) => {
        console.error(error);
        // Handle the error
      });
  };
  return (
    <Card style={{ width: "18rem", margin: "25px" }}>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{name && name}</Card.Title>
        <Card.Text>{description && description}</Card.Text>

        <Button1
          variant="primary"
          disabled={disabled}
          onClick={() => {
            fetch(`http://localhost:3001/bike/${id}`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                isAvailable: false,
              }),
            })
              .then((res) => res.ok)
              .then((ok) => {
                console.log(ok);
                setDisabled(true);
              })
              .catch((err) => console.log(err));
          }}
        >
          Order Bike
        </Button1>
        {!isAvailable && <span>לא זמין</span>}
      </Card.Body>
      {/* <Button variant="danger" onClick={handleDelete}> */}
      <Stack direction="row" spacing={2}>
        <Button
          variant="outlined"
          onClick={handleDelete}
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      </Stack>
    </Card>
  );
}

export default Bike;
