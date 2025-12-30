import { useState } from "react";
import { Wrench } from "lucide-react";


const navigationData = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/" },
  { id: 3, name: "Blog", path: "/" },
  { id: 4, name: "Services", path: "/" },
  { id: 5, name: "Contact", path: "/" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Icon */}
      <span
        onClick={() => setOpen(!open)}
        className="btn btn-ghost btn-circle cursor-pointer"
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

      {/* Slide Down Menu */}
      <ul
        className={`
          absolute right-0 mt-2 w-48 bg-amber-400 shadow-lg rounded-lg overflow-hidden
          transition-all duration-300 ease-in-out 
          ${open ? "max-h-60 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-4"}
        `}
      >
        {navigationData.map(item => (
          <li key={item.id}>
            <a
              href={item.path}
              className="block px-4 py-2 hover:bg-primary hover:text-white transition"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
