import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import chai from "../assets/chai.jpg";
import dosa from "../assets/dosa.jpg";
import chowmein from "../assets/chowmein.jpg";

// Initial static cart items
const initialCart = [
  { id: 1, name: "Dosa", price: 200, quantity: 1, image: dosa },
  { id: 2, name: "Chowmein", price: 120, quantity: 2, image: chowmein },
  { id: 3, name: "Chai", price: 60, quantity: 3, image: chai },
];

export default function Checkout() {
  const [cartItems, setCartItems] = useState(initialCart);
  const navigate = useNavigate();

  // Remove item from cart
  const handleRemove = (id) =>
    setCartItems(cartItems.filter((item) => item.id !== id));

  // Change item quantity
  const handleQuantityChange = (id, qty) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: qty } : item
      )
    );
  };

  // Calculate total price
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Navigate to payment page
  const handlePayment = () => {
    if (cartItems.length > 0) navigate("/payment");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-32 px-8 pb-8">
      <h2 className="text-3xl font-bold text-center text-green-700 dark:text-green-400 mb-6">
        Your Cart
      </h2>

      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 space-y-4">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-300">
            Your cart is empty.
          </p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b py-4"
            >
              {/* Item image + name + price */}
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">
                    {item.name}
                  </h3>
                  <p className="text-green-600 dark:text-green-400">
                    ₹{item.price}
                  </p>
                </div>
              </div>

              {/* Quantity controls */}
              <div className="flex items-center gap-2">
                <button
                  className="px-2 py-1 border rounded hover:bg-gray-200 dark:hover:bg-gray-700"
                  onClick={() =>
                    handleQuantityChange(item.id, Math.max(1, item.quantity - 1))
                  }
                >
                  -
                </button>
                <span className="px-2">{item.quantity}</span>
                <button
                  className="px-2 py-1 border rounded hover:bg-gray-200 dark:hover:bg-gray-700"
                  onClick={() =>
                    handleQuantityChange(item.id, item.quantity + 1)
                  }
                >
                  +
                </button>
              </div>

              {/* Remove button */}
              <button
                className="text-red-500 font-semibold hover:text-red-700"
                onClick={() => handleRemove(item.id)}
              >
                Remove
              </button>
            </div>
          ))
        )}

        {/* Total */}
        {cartItems.length > 0 && (
          <div className="flex justify-between items-center mt-6 font-semibold text-lg dark:text-gray-200">
            <span>Total:</span>
            <span>₹{total}</span>
          </div>
        )}

        {/* Payment button */}
        <button
          onClick={handlePayment}
          className="w-full mt-4 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition"
          disabled={cartItems.length === 0}
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
}
