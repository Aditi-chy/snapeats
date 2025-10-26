import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Hamburger icons

// ...keep all imports and useState/useEffect as is

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = location.pathname === "/";
  const navbarBg = isHomePage
    ? scrolled
      ? "bg-cream text-black"
      : "bg-transparent text-white"
    : "bg-cream text-black";

  return (
    <nav
      className={`fixed top-0 w-full flex items-center justify-between px-6 py-4 transition-all duration-300 shadow-md z-50 ${navbarBg}`}
    >
      {/* Left Side - SnapEats Logo */}
      <Link to="/" className="flex items-center space-x-3">
        <span className="material-icons text-red-600 text-3xl">fastfood</span>
        <h1 className="text-2xl font-bold text-red-600">SnapEats</h1>
      </Link>

      {/* Right Side - Desktop Menu */}
      <div className="hidden md:flex items-center gap-6 ml-auto">
        <ul className="flex space-x-6 text-lg font-medium">
          <li><Link to="/menu" className="hover:text-yellow-500">Food Items</Link></li>
          <li>
            <Link
              to="/offers"
              className="px-3 py-1 rounded-full bg-gradient-to-r from-yellow-400 to-red-500 text-white font-semibold hover:scale-105 transition-transform"
            >
              Offers
            </Link>
          </li>
          <li><Link to="/hotels" className="hover:text-yellow-500">Restaurant</Link></li> {/* updated */}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="flex items-center gap-1 px-3 py-2 bg-red-600 text-white rounded-md font-semibold hover:bg-red-700 transition-colors"
          >
            <span className="material-icons">login</span> Login
          </Link>
          <Link
            to="/signup"
            className="flex items-center gap-1 px-3 py-2 bg-red-600 text-white rounded-md font-semibold hover:bg-red-700 transition-colors"
          >
            <span className="material-icons">person_add</span> Sign Up
          </Link>
          <Link
            to="/checkout"
            className="flex items-center gap-1 px-3 py-2 bg-red-600 text-white rounded-md font-semibold hover:bg-red-700 transition-colors"
      >
            <span className="material-icons">shopping_cart</span> Cart
          </Link>

          <button
            onClick={toggleDarkMode}
            className="flex items-center justify-center px-3 py-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            <span className="material-icons">{darkMode ? "light_mode" : "dark_mode"}</span>
          </button>
        </div>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden ml-auto flex items-center gap-2">
        <button
          onClick={toggleDarkMode}
          className="flex items-center justify-center px-3 py-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          <span className="material-icons">{darkMode ? "light_mode" : "dark_mode"}</span>
        </button>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex items-center justify-center p-2 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute top-full right-0 w-60 bg-cream dark:bg-gray-800 shadow-lg rounded-md mt-2 p-4 flex flex-col gap-3 md:hidden z-50 text-black dark:text-white">
          <Link to="/menu" className="hover:text-yellow-500" onClick={() => setMenuOpen(false)}>Food Items</Link>
          <Link
            to="/offers"
            className="px-3 py-1 rounded-full bg-gradient-to-r from-yellow-400 to-red-500 text-white font-semibold hover:scale-105 transition-transform"
            onClick={() => setMenuOpen(false)}
          >
            Offers
          </Link>
          <Link to="/hotels" className="hover:text-yellow-500" onClick={() => setMenuOpen(false)}>Hotels</Link> {/* updated */}
          <Link to="/login" className="hover:text-red-600" onClick={() => setMenuOpen(false)}>Login</Link>
          <Link to="/signup" className="hover:text-red-600" onClick={() => setMenuOpen(false)}>Sign Up</Link>
          <Link to="/checkout" className="hover:text-red-600" onClick={() => setMenuOpen(false)}>Cart</Link>
        </div>
      )}
    </nav>
  );
}
