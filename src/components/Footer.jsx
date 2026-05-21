function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-100 dark:bg-black border-t border-stone-300 dark:border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-6 text-center space-y-1">
        <p className="text-gray-600 dark:text-gray-500">
          © {currentYear} Joyel Dsouza. All rights reserved.
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-600">
          Made with ❤️ using React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}

export default Footer;  