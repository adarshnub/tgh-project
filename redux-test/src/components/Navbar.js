import React from 'react';

const Navbar = () => {
  return (
    <div>
        <nav
        className="text-white
       py-4
       md:text-lg"
      >
        <ul className="flex justify-between ">
          <li>Home</li>
          <li>Bookmarks</li>
        </ul>
      </nav>

    </div>
  )
}

export default Navbar;