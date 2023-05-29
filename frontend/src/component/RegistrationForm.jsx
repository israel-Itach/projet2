import { Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function RegistrationForm({user}) {
  const navigate = useNavigate();

  const handleRegistration = async () => {
    if (!user) {
        alert('משתמש לא מחובר, אנא התחבר או הירשם');
        navigate('/login');
        return;
    }
  };

  return (
    <div>
         <Form>
      {
            <Button variant="primary" onClick={handleRegistration} disabled={false}>
            בצע הזמנה
          </Button>
          }
 </Form>

    </div>
  );
}

export default RegistrationForm;
