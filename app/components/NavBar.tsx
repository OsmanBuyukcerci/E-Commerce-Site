"use client";

import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";

const NavBar = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  useEffect(() => {
    document.addEventListener(
      "scroll",
      () => {
        const nav_bar = document.getElementById("nav-bar");
        if (nav_bar)
          nav_bar.className =
            "w-screen flex fixed top-0 items-center justify-center p-4 bg-primary/80 text-white z-20 transition transition-all ease-in-out";
      },
      { once: true }
    );

    const handleDropdownClick = () => {
      const dropdown_content = document.getElementById("dropdown-content");

      if (dropdown_content) {
        if (!isDropdownVisible) {
          dropdown_content.style.visibility = "visible";
          setIsDropdownVisible(true);
        } else {
          dropdown_content.style.visibility = "hidden";
          setIsDropdownVisible(false);
        }
      }
    };

    const dropdown = document.getElementById("dropdown");

    if (dropdown) {
      dropdown.onclick = () => {
        handleDropdownClick();
      };
    }
  });

  return (
    <div
      id="nav-bar"
      className="w-screen flex items-center justify-center  p-4 bg-primary text-white relative"
    >
      <div className="absolute left-8 cursor-pointer">
        <div id="dropdown" className="w-92 relative">
          <div
            id="dropdown-button"
            className="flex items-center hover:bg-secondary/30 hover:delay-75 p-2 w-min h-min"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-three-dots-vertical"
              viewBox="0 0 16 16"
            >
              <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
            </svg>
            <span>Tags</span>
          </div>

          <div
            id="dropdown-content"
            className="z-10 origin-top-left absolute left-0 mt-1 p-2 rounded-lg bg-primary invisible"
          >
            <ul className="*:p-2">
              <li id="tag-1" className="hover:bg-secondary/30">
                <a href="/tags/">Sedan</a>
              </li>
              <li id="tag-1" className="hover:bg-secondary/30">
                <a href="/tags/">Hatchback</a>
              </li>
              <li id="tag-1" className="hover:bg-secondary/30">
                <a href="/tags/">Coupe</a>
              </li>
              <li id="tag-1" className="hover:bg-secondary/30">
                <a href="/tags/">Convertible</a>
              </li>
              <li id="tag-1" className="hover:bg-secondary/30">
                <a href="/tags/">SUV</a>
              </li>
              <li id="tag-1" className="hover:bg-secondary/30">
                <a href="/tags/">Truck</a>
              </li>
              <li id="tag-1" className="hover:bg-secondary/30">
                <a href="/tags/">Van</a>
              </li>
              <li id="tag-1" className="hover:bg-secondary/30">
                <a href="/tags/">Sport Car</a>
              </li>
              <li id="tag-1" className="hover:bg-secondary/30">
                <a href="/tags/">Luxury Car</a>
              </li>
              <li id="tag-1" className="hover:bg-secondary/30">
                <a href="/tags/">Electric Car</a>
              </li>
              <li id="tag-1" className="hover:bg-secondary/30">
                <a href="/tags/">Compact Car</a>
              </li>
              <li id="tag-1" className="hover:bg-secondary/30">
                <a href="/tags/">Hybrid Car</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

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
