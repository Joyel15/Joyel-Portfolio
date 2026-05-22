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
        className={`relative w-16 h-8 md:w-24 md:h-12 rounded-full transition-all duration-500 shadow-lg ${
          theme === "dark" ? "bg-gray-800" : "bg-emerald-300"
        }`}
      >
        <div
          className={`absolute top-0.5 md:top-1 w-7 h-7 md:w-10 md:h-10 rounded-full shadow-md transition-all duration-500 flex items-center justify-center ${
            theme === "dark"
              ? "left-[34px] md:left-[52px] bg-blue-700"
              : "left-0.5 md:left-1 bg-white"
          }`}
        >
          {theme === "dark" ? (
            <FiMoon className="text-white text-sm md:text-xl" />
          ) : (
            <FiSun className="text-yellow-500 text-sm md:text-xl" />
          )}
        </div>
 

        <div className="absolute inset-0 flex items-center justify-between px-3">
          <FiSun
            className={`text-sm md:text-xl transition-colors duration-300 ${
              theme === "dark" ? "text-gray-500" : "text-transparent"
            }`}
          />
          <FiMoon
            className={`text-sm md:text-xl transition-colors duration-300 ${
              theme === "dark" ? "text-transparent" : "text-gray-600"
            }`}
          />
        </div>
      </button>
    </div>
  );
}