import { useState } from "react";

const SearchBar = () => {
  const [isSearchInputVisible, setIsSearchInputVisible] = useState(false);
  const handleClickSearch = () => {
    const search_input = document.getElementById("search-input");
    if (search_input) {
      if (!isSearchInputVisible) {
        search_input.style.visibility = "visible";
        setIsSearchInputVisible(true);
      }
    }
  };
  return (
    <div className="flex absolute right-4 bottom-4 items-center justify-center gap-1">
      <input
        type="search"
        id="search-input"
        className="w-full p-2 text-lg text-black rounded-full border-2 border-slate-500/50 invisible"
        placeholder="Search.."
      ></input>
      <button
        id="search-button"
        className="rounded-full p-2 hover:bg-secondary/30 transition ease-in-out delay-75"
        onClick={() => {
          handleClickSearch();
        }}
      >
        <svg
          className="fill-white"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
