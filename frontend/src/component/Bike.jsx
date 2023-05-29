// ""
// import Card from "react-bootstrap/Card";
// import { useState } from "react";
// import { Form, Button, Alert } from 'react-bootstrap';


// function Bike({bikes, data: { name, description, image_url, isAvailable, id } }) {
  
//   const [username, setUsername] = useState('');
//   const [isRegistered, setIsRegistered] = useState(false);
//   const [isOrderPlaced, setIsOrderPlaced] = useState(false);

//   const handleOrder = async () => {
//     try {
//       // שלח בקשה לשרת כדי לבדוק מצב ההרשמה
//       const response = await fetch(`http://localhost:3001/users?name=${username}`);
//       const data = await response.json();
      
//       if (data.isRegistered) {
//         // המשתמש רשום, המשך עם ההזמנה
//         setIsRegistered(true);
//         setIsOrderPlaced(true);
//       } else {
//         // המשתמש לא רשום, הצג הודעת הרשמה
//         setIsRegistered(false);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (

//     <Card style={{ width: "18rem", margin: "25px" }}>
//       <Card.Img variant="top" src={image_url} />
//       <Card.Body>
//         <Card.Title>{name && name}</Card.Title>
//         <Card.Text>{description && description}</Card.Text>
//         <div>
//       <Form>
//         <Form.Group controlId="username">
//           <Form.Label>שם משתמש</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="הזן שם משתמש"
//             value={username}
//             onChange={(event) => setUsername(event.target.value)}
//           />
//         </Form.Group>

//         {!isRegistered && (
//           <Alert variant="danger">
//             אתה לא רשום. יש להירשם קודם לבצע הזמנה.
//           </Alert>
//         )}

//         {isOrderPlaced && (
//           <Alert variant="success">
//             הזמנתך בוצעה בהצלחה!
//           </Alert>
//         )}

//         <Button variant="primary" onClick={handleOrder} disabled={!isRegistered}>
//           בצע הזמנה
//         </Button>
//       </Form>
//     </div>
//       </Card.Body>
//     </Card>
//   );
// }

// export default Bike;

import React from "react";
import BikeCardFront from "./BikeCardFront";



function Bike({ bikes, user }) {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {bikes.map((bikeObj) => (
        <BikeCardFront
          user={user}
          key={bikeObj.id}
          data={bikeObj}
        />
      ))}
    </div>



  );
}

export default Bike;

