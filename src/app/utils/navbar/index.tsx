"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/60 backdrop-blur shadow-md py-4 px-6">
      <div className="mx-2 flex justify-between items-center">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <Image src="/asset/logopgi.png" priority width={50} height={50} alt="Logo PGI Malang" />
        </div>

        {/* Middle: Navigation */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium text-base">
          <li>
            <Link href="/" className="hover:text-blue-600">Home</Link>
          </li>
          <li>
            <Link href="/news" className="hover:text-blue-600">News</Link>
          </li>
          <li>
            <Link href="/athlete" className="hover:text-blue-600">Athlete</Link>
          </li>
          <li>
            <Link href="/gallery" className="hover:text-blue-600">Gallery</Link>
          </li>
        </ul>

        {/* Right: Profile Icon */}
        <div className="hidden md:block">
          <Link href="/login" className="text-gray-600 hover:text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A8 8 0 0112 16a8 8 0 016.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-white shadow-lg rounded-lg p-4">
          <ul className="flex flex-col gap-4 text-gray-700 text-base font-medium">
            <li>
              <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-blue-600">Home</Link>
            </li>
            <li>
              <Link href="/news" onClick={() => setIsOpen(false)} className="hover:text-blue-600">News</Link>
            </li>
            <li>
              <Link href="/athlete" onClick={() => setIsOpen(false)} className="hover:text-blue-600">Athlete</Link>
            </li>
            <li>
              <Link href="/gallery" onClick={() => setIsOpen(false)} className="hover:text-blue-600">Gallery</Link>
            </li>
            <li>
              <Link href="/login" onClick={() => setIsOpen(false)} className="hover:text-blue-600">Login</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
