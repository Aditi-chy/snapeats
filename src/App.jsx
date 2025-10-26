import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import PopularDishes from "./components/PopularDishes";
import Footer from "./components/Footer";

// Pages
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
import FoodItem from "./pages/FoodItems"; // Updated import
import Offers from "./pages/Offers";
import Hotel from "./pages/Hotel";
import Payment from "./pages/Payment";


export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  // Cart State
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (dish) => {
    const existingItem = cartItems.find(item => item.id === dish.id);
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...dish, quantity: 1 }]);
    }
  };

  return (
    <Router>
      <div className={`${darkMode ? "dark bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"} min-h-screen font-sans`}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} cartItems={cartItems} />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Categories />
                <PopularDishes onAddToCart={handleAddToCart} />
              </>
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout cartItems={cartItems} setCartItems={setCartItems} />} />
          <Route path="/menu" element={<FoodItem onAddToCart={handleAddToCart} />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/hotels" element={<Hotel />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}
