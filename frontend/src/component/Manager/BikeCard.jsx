import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Card from "react-bootstrap/Card";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Stack from "@mui/material/Stack";

function BikeCard({
  remove,
  data: { name, description, image_url, isAvailable, id },
}) {
  const [isOrdered, setIsOrdered] = useState(false);

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
        remove();
        console.log("Bike deleted successfully");
        // Do something after the bike is deleted
      })
      .catch((error) => {
        console.error(error);
        // Handle the error
      });
  };

  const handleOrder = () => {
    setIsOrdered(!isOrdered);
    fetch(`http://localhost:3001/bike/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isAvailable: isOrdered,
      }),
    })
      .then((res) => res.ok)
      .then((ok) => console.log(ok))
      .catch((err) => console.log(err));
  };

  const handleEdit = () => {
    // Implement the edit functionality here
    console.log("Edit bike");
  };

  return (
    <Card style={{ width: "18rem", margin: "25px" }}>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{name && name}</Card.Title>
        <Card.Text>{description && description}</Card.Text>

        <Button variant="contained" color="primary" onClick={handleOrder}>
          {isOrdered ? " לזמין" : "הפוך ללא זמין"}
        </Button>
      </Card.Body>

      <Stack direction="row" spacing={2}>
        <Button
          variant="outlined"
          onClick={handleDelete}
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>

        <Button
          variant="outlined"
          onClick={handleEdit}
          startIcon={<EditIcon />}
        >
          Edit
        </Button>
      </Stack>
    </Card>
  );
}
export default BikeCard;
