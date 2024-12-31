import { useState } from "react";
import CA from "../../public/ca2.jpg"

// Header Component with Sidebar
const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <header className="relative bg-teal-900 text-white py-6">
      {/* Desktop Navigation */}
      <div className="container mx-auto flex justify-between items-center px-4 md:px-0">
        <h1 className="text-2xl font-bold sm:text-3xl text-white">CA Cheshta Trehan</h1>
        <nav className="hidden md:flex space-x-6 text-base sm:text-lg">
          <ul className="flex space-x-6">
            <li><a href="#about" className="hover:text-teal-300">About</a></li>
            <li><a href="#education" className="hover:text-teal-300">Education</a></li>
            <li><a href="#experience" className="hover:text-teal-300">Experience</a></li>
            <li><a href="#skills" className="hover:text-teal-300">Skills</a></li>
            <li><a href="#contact" className="hover:text-teal-300">Contact</a></li>
          </ul>
        </nav>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden" onClick={toggleSidebar}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
      </div>

      {/* Sidebar for Mobile */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden ${isSidebarOpen ? 'block' : 'hidden'}`} onClick={toggleSidebar}>
        <div className={`fixed top-0 left-0 h-full bg-teal-900 w-64 p-6 transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <h1 className="text-2xl font-bold text-white">CA CHESHTA TREHAN</h1>
          <ul className="space-y-4 mt-8 text-white">
            <li><a href="#about" onClick={closeSidebar} className="hover:text-teal-300">About</a></li>
            <li><a href="#education" onClick={closeSidebar} className="hover:text-teal-300">Education</a></li>
            <li><a href="#experience" onClick={closeSidebar} className="hover:text-teal-300">Experience</a></li>
            <li><a href="#skills" onClick={closeSidebar} className="hover:text-teal-300">Skills</a></li>
            <li><a href="#contact" onClick={closeSidebar} className="hover:text-teal-300">Contact</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
