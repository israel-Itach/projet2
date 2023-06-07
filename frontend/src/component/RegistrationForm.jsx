import { useContext } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import BikeContext from '../Services/bikeContext'

function RegistrationForm({ bikeId, isAvailable }) {
  const navigate = useNavigate();
  const { user,setIsAvailable} = useContext(BikeContext)
  const handleRegistration = async () => {
    if (!user) {
      alert("משתמש לא מחובר, אנא התחבר או הירשם");
      navigate("/login");
      return;
    }
    // אם המשתמש מחובר
    let response = await fetch(`http://localhost:3001/bike/order/${bikeId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
       userId: user.id
      }),
    });
    if (response.ok) {
      console.log("הוזמן בהצלחה");
      setIsAvailable(bikeId, 0);
      alert("הוזמן בהצלחה")
    }
  };

  return (
    <div>
      <Form>
        {
          <Button variant="primary" onClick={handleRegistration} disabled={!isAvailable}>
            בצע הזמנה
          </Button>
        }
      </Form>
    </div>
  );
}

export default RegistrationForm;
