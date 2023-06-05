import React from "react";
import BikeCardFront from "./BikeCardFront";



function Bike({ bikes, user, setIsAvailable}) {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {bikes.map((bikeObj) => (
        <BikeCardFront
          setIsAvailable={setIsAvailable}
          user={user}
          key={bikeObj.id}
          data={bikeObj}
        />
      ))}
    </div>



  );
}

export default Bike;

