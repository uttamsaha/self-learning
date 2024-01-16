import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="w-full bg-blue-700 text-white">
        <ul className="w-[1400px] mx-auto flex  h-[60px] items-center gap-x-[80px]">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Phone</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
