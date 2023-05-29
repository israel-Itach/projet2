import React from "react";
import BikeCard from "./BikeCard";

function ManagerInventory({ bikes, removeBike }) {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {bikes.map((bikeObj) => (
        <BikeCard
          key={bikeObj.id}
          data={bikeObj}
          remove={() => removeBike(bikeObj.id)}
        />
      ))}
    </div>
  );
}

export default ManagerInventory;
