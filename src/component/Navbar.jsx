// import React from "react";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="nav">
//       <h1>השאלת אופניים וקורקינטים</h1>
//       <NavLink
//         to="/messages"
//         className={({ isActive, isPending }) =>
//           isPending ? "pending" : isActive ? "active" : ""
//         }
//       >
//         Messages
//       </NavLink>
//       <NavLink
//         to="/messagers"
//         className={({ isActive, isPending }) =>
//           isPending ? "pending" : isActive ? "active" : ""
//         }
//       >
//         Messages
//       </NavLink>
//     </nav>
//   );
// };

// export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

function NavigationBar() {
  return (
    <Navbar bg="warning" expand="lg">
      <Navbar.Brand href="/">השאלת אופניים</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link as={Link} to="/">Home1</Nav.Link>
          <Nav.Link as={Link} to="/inventory">Inventory</Nav.Link>
          <Nav.Link as={Link} to="/add-bike">Add Bike</Nav.Link>
        </Nav>
         <Nav>
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;

