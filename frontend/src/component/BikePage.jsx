import React from 'react';
import Bike from './Bike';

function BikePage({bikes, user}) {
  return (
    <div>
       {console.log(bikes)} 
      <Bike bikes={bikes} user={user} data={{ name: 'Bike Name', description: 'Bike Description', image_url: 'bike_image_url', isAvailable: true }} />
      
    </div>
  );
}

export default BikePage;
