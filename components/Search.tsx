import React from "react";

const Search = () => {
  return (
    <>
      <div className="px-4 md:px-16 max-w-6xl mx-auto">
        <div className="mx-auto items-center flex gap-5 px-4 py-2 border-2 border-black rounded-xl">
          <input
            type="text"
            name="search"
            placeholder="search by tags on giphy"
            className="w-full p-2 focus:outline-none"
          />
          <button className="flex justify-between gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path
                fill="#000000"
                d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"
              />
            </svg>
            <p>Search</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Search;
