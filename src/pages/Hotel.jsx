import React, { useState } from "react";

// Reuse existing food images as placeholders
import pizza from "../assets/paneer-pizza.jpg";
import burger from "../assets/veggie-burger.jpg";
import biryani from "../assets/veg-biryani.jpg";
import noodles from "../assets/noodles.jpg";
import gulabJamun from "../assets/gulab-jamun.jpg";
import rasmalai from "../assets/rasmalai.jpg";
import coldCoffee from "../assets/cold-coffee.jpg";

const hotels = [
  { id: 1, name: "Skylark Hotel, Howrah", type: "Luxury • Boutique", rating: 4.0, image: biryani },
  { id: 2, name: "Barbeque Nation Hotel, Howrah", type: "Resort • Buffet", rating: 4.3, image: pizza },
  { id: 3, name: "Bridge View Rooftop Hotel", type: "Luxury • Rooftop", rating: 4.6, image: noodles },
  { id: 4, name: "Mainland China Hotel, Shibpur", type: "Business • Chinese", rating: 4.2, image: noodles },
  { id: 5, name: "Khana Khazana Hotel, Howrah", type: "Multi-Cuisine • Boutique", rating: 4.1, image: burger },
  { id: 6, name: "Cafe By The Lane Hotel, Howrah", type: "Cafe • Budget Stay", rating: 4.4, image: coldCoffee },
  { id: 7, name: "Fusion Hotel, Liluah", type: "Boutique • Family Stay", rating: 4.0, image: pizza },
  { id: 8, name: "7th Heaven Hotel, Howrah", type: "Luxury • Dessert Specialty", rating: 4.5, image: gulabJamun },
  { id: 9, name: "Absolute Barbecues Hotel (Avani Mall)", type: "Resort • Buffet", rating: 4.3, image: biryani },
  { id: 10, name: "Rajdhani Thali Hotel, Kolkata", type: "Budget • Veg Friendly", rating: 4.4, image: rasmalai },
];

export default function Hotel() {
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("All");

  const types = [
    "All", "Luxury", "Boutique", "Resort", "Budget", "Rooftop", "Business", "Family Stay", "Veg Friendly"
  ];

  const filteredHotels = hotels.filter((hotel) => {
    const matchesName = hotel.name.toLowerCase().includes(search.toLowerCase());
    const matchesType = filterType === "All" || hotel.type.toLowerCase().includes(filterType.toLowerCase());
    return matchesName && matchesType;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-16">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-gray-200">
        Hotels in Howrah & Kolkata
      </h2>

      {/* Search & Filter */}
      <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row gap-4 mb-8">
        <input
          type="text"
          placeholder="Search by hotel name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          {types.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      {/* Hotel Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
        {filteredHotels.map((hotel) => (
          <div
            key={hotel.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:scale-105 transform transition-all"
          >
            <img
              src={hotel.image}
              alt={hotel.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {hotel.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{hotel.type}</p>
              <p className="mt-2 text-yellow-500 font-medium">⭐ {hotel.rating}</p>
              <button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-medium">
                View Details
              </button>
            </div>
          </div>
        ))}
        {filteredHotels.length === 0 && (
          <p className="text-center text-gray-500 dark:text-gray-400 col-span-full">
            No hotels found.
          </p>
        )}
      </div>
    </div>
  );
}
