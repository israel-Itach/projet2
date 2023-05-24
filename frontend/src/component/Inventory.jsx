import React, { useState, useEffect } from "react";
// import { Table } from "react-bootstrap";
import Bike from "./Bike";

function Inventory({bikes}) {
  // const [bikes, setBikes] = useState([]);

  // useEffect(() => {
  //   // Fetch data from server
  //   fetch("http://localhost:3001/bike")
  //     .then((res) => res.json())
  //     .then((data) => setBikes(data))
  //     .catch((err) => console.log(err));
  // }, []);


  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {bikes.map((bikeObj) => (
        <Bike key={bikeObj.id} data={bikeObj} />
      ))}
    </div>
  );
}

export default Inventory;
