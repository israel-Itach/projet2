import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Card from "react-bootstrap/Card";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Stack from "@mui/material/Stack";

function BikeCard({ remove, data: { name, description, image_url, isAvailable, id, user_id } }) {
  const [isOrdered, setIsOrdered] = useState(false);
  const [data, setData] = useState(null);

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
  const getUserInfo = async () => {
    try {
      const response = await fetch(`http://localhost:3001/users/${user_id}`);
      if (response.ok) {
        setData(await response.json());
      } else {
        setData(null);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      setData(null);
    }
  };
  useEffect(() => getUserInfo, []);

  return (
    <Card style={{ width: "18rem", margin: "25px" }}>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{name && name}</Card.Title>
        <Card.Text>{description && description}</Card.Text>
        {user_id && data && (
          <div>
            <Card.Text>האופניים נתפסו ע"י:{data.name}</Card.Text>
            <Card.Text>המייל שלו הוא::{data.email}</Card.Text>
          </div>
        )}
      </Card.Body>

      <Stack direction="row" spacing={2}>
        <Button variant="outlined" onClick={handleDelete} startIcon={<DeleteIcon />}>
          Delete
        </Button>

        <Button variant="outlined" onClick={handleEdit} startIcon={<EditIcon />}>
          Edit
        </Button>
      </Stack>
    </Card>
  );
}
export default BikeCard;
