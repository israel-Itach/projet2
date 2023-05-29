import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Card from "react-bootstrap/Card";
import RegistrationForm from "./RegistrationForm";



function BikeCardFront({ user,
  data: { name, description, image_url, isAvailable, id },
}) {
  const [isOrdered, setIsOrdered] = useState(false);


  return (
    <Card className="card-container" style={{ width: "18rem", margin: "25px" }}>
    <Card.Img className="card-image" variant="top" src={image_url} />
    <Card.Body className="card-content">
      <Card.Title>{name && name}</Card.Title>
      <Card.Text>{description && description}</Card.Text>
    </Card.Body>
    <Card.Footer className="card-footer">
      <RegistrationForm user={user} />
    </Card.Footer>
  </Card>
  );
}
export default BikeCardFront;
