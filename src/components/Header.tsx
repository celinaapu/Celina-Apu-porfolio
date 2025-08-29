"use client";

import Link from "next/link";
import Logo from "./Logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
];

const Header = () => {
  return (
    <header className="w-full bg-white/90 backdrop-blur-sm fixed top-0 left-0 z-50 border-b border-gray-100/50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Logo />
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium text-sm"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="hidden md:inline-block bg-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors text-sm"
        >
          Contact
        </Link>
      </div>
    </header>
  );
};

export default Header;
