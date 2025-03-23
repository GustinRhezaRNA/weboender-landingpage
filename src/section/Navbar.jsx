import { useState } from 'react';
import { navLinks } from '../constants/navigaton';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  const NavItems = () => {
    return (
      <ul className="flex flex-col items-center gap-4 sm:flex-row md:gap-6 relative z-20">
        {navLinks.map((link) => (
          <li
            key={link.id}
            className="text-neutral-100 transform  max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5 sm: "
          >
            <a
              href={link.href}
              className="text-neutral-100 hover:opacity-70 transform hover:scale-100 "
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B7677] w-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto sm:px-10 px-5">
          <a
            href=""
            className="flex items-center gap-3  font-bold text-neutral-100 text-2xl hover:text-white transition-color"
          >
            <img
              src="./assets/logo.png"
              alt=""
              width={50}
              height={50}
              loading="lazy"
            />
            Weboender
          </a>
          <button
            onClick={toggleMenu}
            className="text-neutral-100 hover:text-white focus:outline-none sm:hidden flex "
            aria-label="toggle menu"
          >
            <img
              src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'}
              alt="toggle "
              className="w-6 h-6"
              loading="lazy"
            />
          </button>
          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>
      <div className={`absolute left-0 right-0 bg-[#1a9980] backdrop-blur-sm transition-all duration-300 ease-in-out overflow-hidden z-20 mx-auto sm:hidden block ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className="p-5">
          <NavItems />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
