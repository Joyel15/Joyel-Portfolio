import { useEffect, useState } from "react";
import DarkModeToggle from "./DarkModeToggle.jsx";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll while the drawer is open, and let Escape close it
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      {/* Top navbar */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-black/80 backdrop-blur-sm z-50 border-b border-stone-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <a
            href="#home"
            className="text-lg md:text-xl text-emerald-600 font-semibold dark:text-white"
          >
            JD
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex md:items-center md:gap-x-10">
            <ul className="flex items-center gap-x-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-stone-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="h-5 w-px bg-stone-200 dark:bg-gray-700" />
            <DarkModeToggle />
          </div>

          {/* Mobile hamburger / close toggle — animates into an X */}
          <button
            className="md:hidden -mr-2 p-2 text-stone-700 dark:text-gray-200"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <span className="relative block w-5 h-4">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition-all duration-300 ${
                  isOpen ? "rotate-45 top-[7px]" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition-all duration-300 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 bottom-0 h-0.5 w-5 bg-current transition-all duration-300 ${
                  isOpen ? "-rotate-45 bottom-[7px]" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile drawer */}
      <div
        role="dialog"
        aria-modal="true"
        className={`fixed top-0 right-0 h-dvh w-[78%] max-w-xs bg-white dark:bg-black z-40 flex flex-col
          shadow-[-8px_0_24px_rgba(0,0,0,0.08)] dark:shadow-[-8px_0_24px_rgba(0,0,0,0.4)]
          transition-transform duration-300 ease-out md:hidden ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="h-16 flex items-center px-6 border-b border-stone-200 dark:border-gray-800">
          <span className="text-base font-semibold text-emerald-600 dark:text-white">
            Menu
          </span>
        </div>

        <ul className="flex-1 flex flex-col px-6 py-4">
          {navLinks.map((link) => (
            <li
              key={link.href}
              className="border-b border-stone-100 dark:border-gray-900"
            >
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-4 text-base font-medium text-stone-700 dark:text-gray-200 hover:text-emerald-600 dark:hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="px-6 py-5 border-t border-stone-200 dark:border-gray-800 flex items-center justify-between">
          <span className="text-sm text-stone-500 dark:text-gray-400">
            Theme
          </span>
          <DarkModeToggle />
        </div>
      </div>
    </>
  );
}
export default Navbar;
