import React, { useState } from "react";

// --- Import images ---
import pizza from "../assets/paneer-pizza.jpg";
import burger from "../assets/veggie-burger.jpg";
import samosa from "../assets/samosa.jpg";
import springRolls from "../assets/spring-rolls.jpg";
import garlicBread from "../assets/garlic-bread.jpg";

import butterChicken from "../assets/butter-chicken.jpg";
import biryaniVeg from "../assets/veg-biryani.jpg";
import biryaniChicken from "../assets/chicken-biryani.jpg";
import palakPaneer from "../assets/palak-paneer.jpg";
import dalTadka from "../assets/dal-tadka.jpg";
import choleBhature from "../assets/chole-bhature.jpg";
import noodles from "../assets/noodles.jpg";
import friedRice from "../assets/fried-rice.jpg";

import gulabJamun from "../assets/gulab-jamun.jpg";
import iceCream from "../assets/ice-cream.jpg";
import cheesecake from "../assets/cheesecake.jpg";
import brownie from "../assets/brownie.jpg";
import rasgulla from "../assets/rasgulla.jpg";
import mojito from "../assets/mojito.jpg";
import chai from "../assets/chai.jpg";

import coldCoffee from "../assets/cold-coffee.jpg";
import mangoShake from "../assets/mango-shake.jpg";
import orangeJuice from "../assets/orange-juice.jpg";
import hotChocolate from "../assets/hot-chocolate.jpg";
import paneertikka from "../assets/paneer-tikka.jpg";
import rasmalai from "../assets/rasmalai.jpg";
import chickenmanchurian from "../assets/chicken-manchurian.jpg";

const menuItems = [
  { id: 1, name: "Paneer Pizza", image: pizza, category: "Starters", type: "Vegetarian" },
  { id: 2, name: "Veggie Burger", image: burger, category: "Starters", type: "Vegetarian" },
  { id: 3, name: "Samosa", image: samosa, category: "Starters", type: "Vegetarian" },
  { id: 4, name: "Spring Rolls", image: springRolls, category: "Starters", type: "Vegetarian" },
  { id: 5, name: "Garlic Bread", image: garlicBread, category: "Starters", type: "Vegetarian" },
  { id: 6, name: "Paneer Tikka", image: paneertikka, category: "Starters", type: "Vegetarian" },

  { id: 7, name: "Butter Chicken", image: butterChicken, category: "Main Course", type: "Non-Vegetarian" },
  { id: 8, name: "Veg Biryani", image: biryaniVeg, category: "Main Course", type: "Vegetarian" },
  { id: 9, name: "Chicken Biryani", image: biryaniChicken, category: "Main Course", type: "Non-Vegetarian" },
  { id: 10, name: "Palak Paneer", image: palakPaneer, category: "Main Course", type: "Vegetarian" },
  { id: 11, name: "Dal Tadka", image: dalTadka, category: "Main Course", type: "Vegetarian" },
  { id: 12, name: "Chole Bhature", image: choleBhature, category: "Main Course", type: "Vegetarian" },
  { id: 13, name: "Veg Fried Rice", image: friedRice, category: "Main Course", type: "Vegetarian" },
  { id: 14, name: "Schezwan Noodles", image: noodles, category: "Main Course", type: "Vegetarian" },
  { id: 15, name: "Chicken Manchurian", image: chickenmanchurian, category: "Main Course", type: "Non-Vegetarian" },

  { id: 16, name: "Gulab Jamun", image: gulabJamun, category: "Desserts", type: "Vegetarian" },
  { id: 17, name: "Ice Cream Sundae", image: iceCream, category: "Desserts", type: "Vegetarian" },
  { id: 18, name: "Cheesecake", image: cheesecake, category: "Desserts", type: "Vegetarian" },
  { id: 19, name: "Chocolate Brownie", image: brownie, category: "Desserts", type: "Vegetarian" },
  { id: 20, name: "Rasgulla", image: rasgulla, category: "Desserts", type: "Vegetarian" },
  { id: 21, name: "Rasmalai", image: rasmalai, category: "Desserts", type: "Vegetarian" },

  { id: 22, name: "Mojito", image: mojito, category: "Drinks", type: "Vegetarian" },
  { id: 23, name: "Masala Chai", image: chai, category: "Drinks", type: "Vegetarian" },
  { id: 24, name: "Cold Coffee", image: coldCoffee, category: "Drinks", type: "Vegetarian" },
  { id: 25, name: "Mango Shake", image: mangoShake, category: "Drinks", type: "Vegetarian" },
  { id: 26, name: "Orange Juice", image: orangeJuice, category: "Drinks", type: "Vegetarian" },
  { id: 27, name: "Hot Chocolate", image: hotChocolate, category: "Drinks", type: "Vegetarian" },
];

export default function Menu({ onAddToCart }) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Starters", "Main Course", "Desserts", "Drinks", "Vegetarian", "Non-Vegetarian"];

  const filteredItems = menuItems.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());

    // Check category filter
    const matchesFilter =
      filter === "All" ||
      item.category === filter ||
      item.type === filter;

    return matchesSearch && matchesFilter;
  });

  const handleAddToCart = (dish) => {
    onAddToCart(dish);
  };

  return (
    <div className="min-h-screen dark:bg-gray-900 text-green-800 dark:text-light pt-24 pb-16">
      <h2 className="text-4xl font-bold text-center mb-8 text-green-700 dark:text-green-400">
        Food Items
      </h2>

      {/* Search + Single Filter */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-12 px-6">
        <input
          type="text"
          placeholder="Search dishes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 w-full md:w-80 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-800 dark:text-white"
        />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-800 dark:text-white"
        >
          {categories.map((c, i) => (
            <option key={i} value={c}>{c}</option>
          ))}
        </select>
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {filteredItems.length > 0 ? (
          filteredItems.map((dish) => (
            <div
              key={dish.id}
              className="relative rounded-xl overflow-hidden shadow-md hover:scale-105 transform transition-all bg-white dark:bg-gray-800"
            >
              <img src={dish.image} alt={dish.name} className="w-full h-48 object-cover" />
              <div className="p-4 flex flex-col justify-between">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{dish.name}</h3>
                <button
                  onClick={() => handleAddToCart(dish)}
                  className="mt-3 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 dark:text-gray-300 col-span-full">
            No dishes found 🍽️
          </p>
        )}
      </div>
    </div>
  );
}
