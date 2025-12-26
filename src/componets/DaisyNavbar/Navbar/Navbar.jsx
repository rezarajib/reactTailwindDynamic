import React, { useState } from 'react';
import Link from './Link';
import { Wrench } from 'lucide-react';

const navigationData = [
    { id: 1, name: "Home", path: "/index.html" },
    { id: 2, name: "About", path: "/about.html" },
    { id: 3, name: "Blog", path: "/blog.html" },
    { id: 4, name: "Services", path: "/services.html" },
    { id: 5, name: "Contact", path: "/contact.html" }
];


const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Menu Icon */}
      <span
        onClick={() => setOpen(!open)}
        className="cursor-pointer btn btn-ghost btn-circle"
      >
        {open ? <Wrench /> : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </span>

      {/* Dropdown Menu */}
      {open && (
        <ul className="absolute right-0 mt-3 w-48 bg-base-100 shadow-lg rounded-lg p-4 space-y-3">
          {navigationData.map(item => (
            <li key={item.id}>
              <a
                href={item.path}
                className="block hover:bg-primary hover:text-white rounded-md px-3 py-2 transition"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
