import Navbar from "./component/Navbar";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./component/home";
import Inventory from "./component/Inventory";
import AddBike from "./component/AddBike";
import NavigationBar from "./component/Navbar";
import SignupForm from "./component/Login";


function App() {
  return (
    <>
    <div>
        <NavigationBar />
        <Routes>
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/add-bike" element={<AddBike />} />
          <Route path="/" element={<Home />} />
          <Route path="/login"element= {<SignupForm />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
