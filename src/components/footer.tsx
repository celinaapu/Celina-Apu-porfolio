"use client";

import Link from "next/link";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-blue-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-8 mb-6 md:mb-0">
            <Logo />
          </div>

          <nav className="hidden md:flex gap-6">
            <Link
              href="/"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/services"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Services
            </Link>

            <Link
              href="/contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </nav>

          <div className="text-gray-400 text-sm">Copyright © 2025 Celina</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
