import React from "react";

const NavBar = () => {
  return (
    <div className="w-screen flex justify-center my-8">
      <ul id="nav-links" className="flex gap-4 items-center">
        <li className="nav-item font-bold text-2xl">
          <a href="..">Home</a>
        </li>
        <li className="nav-item text-lg">
          <a href="/accounts/signin">Sign In</a>
        </li>
        <li className="nav-item text-lg">
          <a href="/accounts/login">Login</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
