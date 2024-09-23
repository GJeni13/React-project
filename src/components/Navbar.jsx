// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount }) => {
  return (
    <nav className="flex justify-evenly bg-gradient-to-r from-red-200 to-purple-600 shadow-lg p-2" style={{ fontFamily: 'Lobster' }}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side - Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          <img
            src="src/l.png"
            alt="Online Shopping Logo"
            className="h-20 inline-block"
          />
        </Link>

        {/* Right side - Menu */}
        <ul className="flex space-x-12 text-black-800 font-medium text-3xl ">
          <li>
            <Link to="/" className="hover:text-green-300 transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="hover:text-green-300 transition duration-300">
              Products
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-green-300 transition duration-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/cart" className="relative hover:text-green-300 transition duration-300">
              Cart
              {cartCount > 0 && (
                  <span className="gap-2 top-0 right-0 inline-block w-6 h-6 text-2xl text-green-300 font-bold rounded-full text-center">
                   {cartCount}
                </span>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
