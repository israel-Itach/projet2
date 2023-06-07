import React, { useEffect, useState } from "react";
import BikeCard from "./BikeCard";

function ManagerInventory() {
  const [bikes, setBikes] = useState([]);
  useEffect(() => {
    // Fetch data from server
    fetch("http://localhost:3001/manager/bike")
      .then((res) => res.json())
      .then((data) => setBikes(data))
      .catch((err) => console.log(err));
  }, []);
  const removeBike = (id) => {
    setBikes([...bikes.filter((bike) => bike.id != id)]);
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {bikes.map((bikeObj) => (
        <BikeCard key={bikeObj.id} data={bikeObj} remove={() => removeBike(bikeObj.id)} />
      ))}
    </div>
  );
}

export default ManagerInventory;
