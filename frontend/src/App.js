import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./component/home";
// import Inventory from "./component/Inventory";
import AddBike from "./component/AddBike";
import NavigationBar from "./component/Navbar";
import SignupForm from "./component/Signup";
import FAQPage from "./component/Questions";
import AdminLogin from "./component/PersonalArea";
import ManagerInventory from "./component/Manager/Inventory";
import Navigate from "./component/Navigate";
import { useState, useEffect } from "react";
import LoginPage from "./component/Login";
import BikePage from "./component/BikePage";
import Footer from "./component/footer";
import ContactForm from "./component/contacts";
import MessageList from "./component/Manager/MessageList";
import { BikeProvider } from "./Services/bikeContext";

function App() {
  const [bikes, setBikes] = useState([]);
  const [user, setUser] = useState("");
  useEffect(() => {
    // setUser
    try {
      setUser(JSON.parse(localStorage.getItem("user")));
    } catch (error) {}

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
  
  const setIsAvailable = (bikeId, statusNum) => {
    setBikes((prevState) => {
      const updatedBikes = prevState.map((bike) =>
        bike.id === bikeId ? { ...bike, isAvailable: statusNum } : bike
      );
      console.log("updatedBikes: ", updatedBikes);
      return updatedBikes;
    });
  };

  return (
    <BikeProvider value={{user, setIsAvailable}}>
  
      <div className="container">
        <div className="content">
          <NavigationBar setUser={setUser} user={user} />

          <Routes>
            <Route path="/bikepage" element={<BikePage user={user} bikes={bikes} setIsAvailable={setIsAvailable} />} />
            <Route path="/intermediate/addbike" element={<AddBike addBike={addBike} />} />
            <Route path="/intermediate/inventory" element={<ManagerInventory />} />
            <Route path="/intermediate/MessageList" element={<MessageList />} />
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/questions" element={<FAQPage />} />
            <Route path="/contacts" element={<ContactForm />} />
            <Route path="login" element={<LoginPage setUser={setUser} />} />
            <Route path="/PersonalArea/navigate" element={<Navigate />} />
            <Route path="/PersonalArea" element={<AdminLogin />} />
          </Routes>
        </div>
        <Footer className="footer" />
      </div>
    </BikeProvider>

  );
}

export default App;
