"use client";

import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <div
      id="nav-bar"
      className="w-screen flex items-center justify-center  p-4 bg-primary text-white relative"
    >
      <ul
        id="nav-links"
        className="flex gap-4 items-center *:px-3 *:py-2 *:rounded-full *:transition *:ease-in-out *:delay-75"
      >
        <li className="nav-item font-bold text-2xl hover:bg-secondary/30">
          <a href="..">
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="24.000000pt"
              height="24.000000pt"
              viewBox="0 0 32.000000 32.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,32.000000) scale(0.100000,-0.100000)"
                fill="#FFFFFF"
                stroke="none"
              >
                <path
                  d="M92 304 c-74 -38 -102 -132 -64 -218 17 -37 30 -51 64 -66 57 -26
114 -25 168 3 l45 22 3 68 3 67 -76 0 -75 0 0 -35 c0 -33 2 -35 35 -35 39 0
46 -14 16 -30 -30 -15 -66 -12 -92 9 -35 28 -35 114 0 142 32 26 75 24 98 -4
14 -18 25 -21 53 -17 43 6 43 30 0 74 -24 25 -39 30 -87 33 -40 3 -68 -1 -91
-13z"
                />
              </g>
            </svg>
          </a>
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
