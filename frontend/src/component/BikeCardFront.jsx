// import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Card from "react-bootstrap/Card";
import RegistrationForm from "./RegistrationForm";

function BikeCardFront({setIsAvailable, user,
  data: { name, description, image_url, isAvailable, id }}){
 
  return (
    <Card className="card-container" style={{ width: "18rem", margin: "25px" }}>
    <Card.Img className="card-image" variant="top" src={image_url} />
    <Card.Body className="card-content">
      <Card.Title>{name && name}</Card.Title>
      <Card.Text>{description && description}</Card.Text>
    </Card.Body>
    <Card.Footer className="card-footer">
      <RegistrationForm setIsAvailable={setIsAvailable} user={user} bikeId={id} isAvailable={isAvailable} />
    </Card.Footer>
  </Card>
  );
}
export default BikeCardFront;
