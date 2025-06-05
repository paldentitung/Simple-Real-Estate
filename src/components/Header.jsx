import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-6 text-white bg-[rgb(6,18,53)] h-[60px] relative">
      {/* Logo and hamburger */}
<div className="flex items-center gap-4 justify-between w-full max-w-[400px]">
        <Link className="flex gap-1 text-2xl" to="/">
          <span>Dwell</span>
          <span>Properties</span>
        </Link>

        {/* Hamburger toggle button (visible on mobile only) */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="flex flex-col gap-1">
            <span className="block w-[35px] h-[4px] bg-white rounded-[10px] -translate-y-[4px]"></span>
            <span className="block w-[35px] h-[4px] bg-white rounded-[10px]"></span>
            <span className="block w-[35px] h-[4px] bg-white rounded-[10px] translate-y-[4px]"></span>
          </button>
        </div>
      </div>

      {/* Desktop nav (hidden on mobile) */}
      <nav className="hidden md:flex">
        <ul className="flex gap-6">
          <li>
            <Link to="/" className="hover:text-red-400 transition-all duration-300">Home</Link>
          </li>
          <li className="relative group">
            <Link to="/properties" className="hover:text-red-400 transition-all duration-300">Properties</Link>
            {/* Add dropdown menu here if needed */}
          </li>
          <li>
            <Link to="/news" className="hover:text-red-400 transition-all duration-300">News</Link>
          </li>
          <li>
            <Link to="/team" className="hover:text-red-400 transition-all duration-300">Team</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-red-400 transition-all duration-300">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Mobile nav toggle menu */}
      {open && (
        <nav className="block md:hidden absolute top-[60px] left-0 w-full bg-[rgb(6,18,53)] px-6 py-4 z-50">
          <ul className="flex flex-col gap-4">
            <li>
              <Link to="/" className="hover:text-red-400 transition-all duration-300" onClick={() => setOpen(false)}>Home</Link>
            </li>
            <li>
              <Link to="/properties" className="hover:text-red-400 transition-all duration-300" onClick={() => setOpen(false)}>Properties</Link>
            </li>
            <li>
              <Link to="/news" className="hover:text-red-400 transition-all duration-300" onClick={() => setOpen(false)}>News</Link>
            </li>
            <li>
              <Link to="/team" className="hover:text-red-400 transition-all duration-300" onClick={() => setOpen(false)}>Team</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-red-400 transition-all duration-300" onClick={() => setOpen(false)}>Contact</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
