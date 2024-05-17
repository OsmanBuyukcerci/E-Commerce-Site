"use client";

import { useEffect } from "react";
import SearchBar from "./SearchBar";

const NavBar = () => {
  useEffect(() => {
    document.addEventListener(
      "scroll",
      () => {
        const nav_bar = document.getElementById("nav-bar");
        if (nav_bar)
          nav_bar.className =
            "w-screen flex fixed top-0 justify-center p-4 bg-primary/80 text-white z-20 transition transition-all ease-in-out";
      },
      { once: true }
    );
  });

  return (
    <div
      id="nav-bar"
      className="w-screen flex justify-center p-4 bg-primary text-white relative"
    >
      <ul
        id="nav-links"
        className="flex gap-4 items-center *:px-3 *:py-2 *:rounded-full *:transition *:ease-in-out *:delay-75"
      >
        <li className="nav-item font-bold text-2xl hover:bg-secondary/30">
          <a href="..">Home</a>
        </li>
        <li className="nav-item text-lg hover:bg-secondary/30">
          <a href="/accounts/signin">Sign In</a>
        </li>
        <li className="nav-item text-lg hover:bg-secondary/30">
          <a href="/accounts/login">Login</a>
        </li>
      </ul>
      <SearchBar />
    </div>
  );
};

export default NavBar;
