import React from "react";

// Import reusable components
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import PopularDishes from "../components/PopularDishes";

export default function Home() {
  return (
    <div className="bg-light dark:bg-dark text-dark dark:text-light min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Categories Section */}
      <Categories />

      {/* Popular Dishes Section */}
      <PopularDishes />
    </div>
  );
}
