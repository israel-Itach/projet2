// import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import PedalBikeSharpIcon from "@mui/icons-material/PedalBikeSharp";
// import Button from '@mui/material/Button';
function NavigationBar({user, setUser}) {
  
  return (
    <Navbar bg="warning" expand="lg">
      <Navbar.Brand>
        <PedalBikeSharpIcon fontSize="large" />{" "}
      </Navbar.Brand>
      {user?.name && <Navbar.Brand>שלום {user.name} </Navbar.Brand>}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse dir="ltr" id="basic-navbar-nav">
        <Nav>
          {/* <Button  color='secondary'>Hello World</Button>; */}
          <Nav.Link as={Link} to="/bikepage">
            מה במלאי
          </Nav.Link>
          {/* <Nav.Link as={Link} to="/add-bike">הוספת אופניים</Nav.Link> */}
          <Nav.Link as={Link} to="/signup">
            הרשמה
          </Nav.Link>
          {user ? (
            <Nav.Link
              as={Link}
              to="/"
              onClick={() => {
                setUser("");
                localStorage.clear();
              }}
            >
              יציאה
            </Nav.Link>
          ) : (
            <Nav.Link as={Link} to="/login">
              כניסה
            </Nav.Link>
          )}
          <Nav.Link as={Link} to="/Questions">
            שאלות נפוצות
          </Nav.Link>
          <Nav.Link as={Link} to="/">
            אודות
          </Nav.Link>
          <Nav.Link as={Link} to="/PersonalArea">
            איזור אישי
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
