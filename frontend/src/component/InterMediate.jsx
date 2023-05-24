import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch, Redirect } from 'react-router-dom';

export default Intermediate = () => {
  return (
    <div>
      <h1>Intermediate Page</h1>
      <Navigation />
      <Switch>
        <Route exact path="/intermediate">
          <Redirect to="/intermediate/add-bike" />
        </Route>
        <Route path="/intermediate/addbike" component={AddBike} />
        <Route path="/intermediate/delete" component={Delete} />
      </Switch>
    </div>
  );
};