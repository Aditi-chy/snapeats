import React, { useState } from "react";
import foodImg from "../assets/food.jpg";
import { MdLocationOn, MdSearch } from "react-icons/md";

export default function Hero() {
  const [location, setLocation] = useState("");
  const [food, setFood] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for "${food}" near "${location}"`);
  };

  return (
    <section
      className="relative flex flex-col items-center justify-center h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${foodImg})` }}
    >
      <div className="absolute inset-0 bg-black/40 dark:bg-black/50"></div>

      <div className="relative bg-cream/90 dark:bg-gray-900/70 p-8 rounded-xl text-center max-w-4xl w-full">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary dark:text-secondary">
          Delicious Food Delivered To You
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          Order your favorite meals online with Snap Eats
        </p>

        <form
          onSubmit={handleSearch}
          className="flex flex-col sm:flex-row gap-4 w-full"
        >
          <div className="relative flex-1">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-600">
              <MdLocationOn size={24} />
            </span>
            <input
              type="text"
              placeholder="Enter your delivery location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div className="relative flex-1">
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              <MdSearch size={24} />
            </span>
            <input
              type="text"
              placeholder="Search for restaurant, item or more"
              value={food}
              onChange={(e) => setFood(e.target.value)}
              className="w-full pr-12 pl-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <button
            type="submit"
            className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
}
