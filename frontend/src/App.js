import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./component/home";
import Inventory from "./component/Inventory";
import AddBike from "./component/AddBike";
import NavigationBar from "./component/Navbar";
import SignupForm from "./component/Signup";
import FAQPage from "./component/Questions";
import AdminLogin from "./component/PersonalArea";
import ManagerInventory from "./component/Manager/Inventory";
import Navigate from "./component/Navigate";
import { useState, useEffect } from "react";
import LoginPage from "./component/Login";

function App() {
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    // Fetch data from server
    fetch("http://localhost:3001/bike")
      .then((res) => res.json())
      .then((data) => setBikes(data))
      .catch((err) => console.log(err));
  }, []);

  const addBike = (newBike) => {
    setBikes([...bikes, newBike]);
  };
  const removeBike = (id) => {
    setBikes([...bikes.filter((bike) => bike.id != id)]);
  };

  return (
    <>
      <div>
        <NavigationBar />

        <Routes>
          <Route path="/inventory" element={<Inventory bikes={bikes} />} />
          <Route
            path="/intermediate/addbike"
            element={<AddBike addBike={addBike} />}
          />
          <Route
            path="/intermediate/delete"
            element={<ManagerInventory bikes={bikes} removeBike={removeBike} />}
          />
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/questions" element={<FAQPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="/PersonalArea/navigate" element={<Navigate />} />
          <Route path="/PersonalArea" element={<AdminLogin />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
