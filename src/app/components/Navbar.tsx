"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <span className="text-xl font-bold cursor-pointer">My App</span>
        </Link>
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <FaBars />
        </button>
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex space-x-4 md:space-x-8 absolute md:static bg-blue-600 top-16 left-0 w-full md:w-auto md:top-auto py-4 md:py-0`}
        >
          <li className="px-4">
            <Link href="/posts" className="hover:text-gray-200">
              Posts
            </Link>
          </li>
          <li className="px-4">
            <Link href="/albums" className="hover:text-gray-200">
              Albums
            </Link>
          </li>
          <li className="px-4">
            <Link href="/todos" className="hover:text-gray-200">
              Todos
            </Link>
          </li>
          <li className="px-4">
            <Link href="/users" className="hover:text-gray-200">
              Users
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}