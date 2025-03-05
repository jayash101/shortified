import Link from "next/link";
import React from "react";

const Navbar = ({ navClassName }) => {
  return (
    <nav
      className={`lg:grid lg:grid-cols-2 flex justify-center items-center py-4 px-8 ${navClassName}`}
    >
      <Link
        href="/"
        className="pt-8 lg:pt-0 text-4xl lg:text-3xl font-bold cursor-pointer font-['Calibri']"
      >
        Shortified
      </Link>

      <ul className="hidden lg:flex lg:justify-end lg:items-center lg:gap-12">
        <Link
          href="/"
          className="hover:text-blue-300 hover:[text-shadow:0_0_0.5vw]"
        >
          Home
        </Link>

        <Link
          href="/about"
          className="hover:text-blue-300 hover:[text-shadow:0_0_0.5vw]"
        >
          About
        </Link>

        <Link
          href="/generate"
          className="hover:text-blue-300 hover:[text-shadow:0_0_0.5vw]"
        >
          Generate
        </Link>

        <Link
          href="/contact"
          className="hover:text-blue-300 hover:[text-shadow:0_0_0.5vw]"
        >
          Contact
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
