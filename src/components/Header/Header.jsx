import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link to="/">MyPortfolio</Link>
        </div>
        <div>
          <Link className="mx-4" to="/">Home</Link>
          <Link className="mx-4" to="/about">About</Link>
          <Link className="mx-4" to="/projects">Projects</Link>
          <Link className="mx-4" to="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
