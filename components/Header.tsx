import Link from "next/link";
import React from "react";

let letters = ["G", "i", "f", "i", "a"];

const Header = () => {
  return (
    <>
      <nav className="flex fixed top-0 items-center w-full h-max max-w-6xl mx-auto text-4xl md:text-6xl font-bold px-4 md:px-16 py-4 md:py-16">
        <Link href="/">
          {letters.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </Link>
      </nav>
    </>
  );
};

export default Header;
