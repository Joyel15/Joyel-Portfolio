import { FiSun, FiMoon } from "react-icons/fi";
import { useState, useEffect } from "react";
import useDarkMode from "../hooks/useDarkMode.js";
 
export default function DarkModeToggle() {
 
  const [theme,setTheme] = useDarkMode();
 
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
 
  return (
    <div className="flex items-center">
      <button
        onClick={toggleTheme}
        className={`relative w-12 h-6 md:w-16 md:h-8 rounded-full transition-all duration-500 shadow-md ${
          theme === "dark" ? "bg-gray-800" : "bg-emerald-300"
        }`}
      >
        <div
          className={`absolute top-0.5 w-5 h-5 md:w-7 md:h-7 rounded-full shadow-md transition-all duration-500 flex items-center justify-center ${
            theme === "dark"
              ? "left-[26px] md:left-[35px] bg-blue-700"
              : "left-0.5 bg-white"
          }`}
        >
          {theme === "dark" ? (
            <FiMoon className="text-white text-xs md:text-sm" />
          ) : (
            <FiSun className="text-yellow-500 text-xs md:text-sm" />
          )}
        </div>
 

        <div className="absolute inset-0 flex items-center justify-between px-1.5">
          <FiSun
            className={`text-xs md:text-sm transition-colors duration-300 ${
              theme === "dark" ? "text-gray-500" : "text-transparent"
            }`}
          />
          <FiMoon
            className={`text-xs md:text-sm transition-colors duration-300 ${
              theme === "dark" ? "text-transparent" : "text-gray-600"
            }`}
          />
        </div>
      </button>
    </div>
  );
}