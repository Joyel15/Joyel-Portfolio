import DarkModeToggle from "./DarkModeToggle.jsx";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-black/80 backdrop-blur-sm z-50 border-b border-stone-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-2.5 flex justify-between items-center">
        
        <div className="text-lg md:text-xl text-emerald-600 font-semibold dark:text-white">
          <a href="#home">JD</a>
        </div>

        <div className="contents md:flex md:items-center md:gap-x-8">
          <div>
            <ul className="flex space-x-3 md:space-x-8">
              <li><a href="#about" className="text-sm md:text-base text-emerald-600 font-semibold dark:text-white hover:text-slate-600 dark:hover:text-gray-400 transition-colors duration-300">About</a></li>
              <li><a href="#skills" className="text-sm md:text-base text-emerald-600 font-semibold dark:text-white hover:text-slate-600 dark:hover:text-gray-400 transition-colors duration-300">Skills</a></li>
              <li><a href="#projects" className="text-sm md:text-base text-emerald-600 font-semibold dark:text-white hover:text-slate-600 dark:hover:text-gray-400 transition-colors duration-300">Projects</a></li>
              <li><a href="#contact" className="text-sm md:text-base text-emerald-600 font-semibold dark:text-white hover:text-slate-600 dark:hover:text-gray-400 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          <DarkModeToggle />
        </div>

      </div>
    </nav>
  );
}
export default Navbar;