"use client";

import Link from "next/link";
import { Swords, Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation"; // Import usePathname
import NavLinks from "@/components/navLinks";
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current path

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const getLinkClasses = (href: string) => {
    const isActive = pathname === href;
    return `transition-colors ${
      isActive ? "text-red-500 font-bold" : "text-gray-300 hover:text-white"
    }`;
  };

  return (
    <header className="bg-black/80 backdrop-blur-sm sticky top-0 z-50 border-b border-red-900/50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold text-red-600 hover:text-red-500 transition-colors"
          onClick={closeMenu}
        >
          <Swords className="w-6 h-6" />
          <span>Kimetsu no Yaiba</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className={getLinkClasses("/")}>
            Home
          </Link>
          <Link href="/personagens" className={getLinkClasses("/personagens")}>
            Personagens
          </Link>
          <Link href="/episodios" className={getLinkClasses("/episodios")}>
            Episódios
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white hover:text-red-500 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm border-b border-red-900/50 md:hidden">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <NavLinks />
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
