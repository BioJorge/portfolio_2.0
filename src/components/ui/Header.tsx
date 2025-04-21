"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { NAVLINKS } from "@/constants/navlinks";
import LanguageToggler from "./LanguageToggler";
import { useLanguageContext } from "@/context/LanguageProvider";

const Header = () => {
  const { language } = useLanguageContext();
  const [menuOpen, setMenuOpen] = useState(false);
  // const [configMenuOpen, setConfigMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navbar = () => {
    return (
      <nav
        className={`md:flex items-center gap-14 ${
          menuOpen
            ? "absolute top-full left-0 w-full p-8 bg-purple-600 shadow-lg"
            : "hidden md:flex"
        }`}
      >
        {NAVLINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-lg font-medium transition-colors duration-300 hover:text-primary ${
              pathname === link.href ? "text-primary" : "text-secondary"
            }`}
          >
            {link.label[language]}
          </Link>
        ))}

        <ThemeToggle accessibilityText="theme toggler icon" />
        <LanguageToggler acessibilityText="language toggler icon" />
      </nav>
    );
  };

  // const toggleConfigMenu = () => {
  //   setConfigMenuOpen(!configMenuOpen);
  //   document.body.style.overflowY = configMenuOpen ? "scroll" : "hidden";
  // };

  return (
    <>
      <header className="fixed top-0 left-0 w-full p-8 flex justify-between items-center z-50 transition-all duration-300 bg-background/15">
        <Link href="/" className="text-2xl font-semibold text-foreground">
          Jorge Filho.
        </Link>

        {navbar()}

        <div className="md:hidden flex gap-4">
          {/* <button onClick={toggleConfigMenu} className="text-foreground">
            <Settings className="w-6 h-6" />
          </button> */}

          <button onClick={toggleMenu} className="text-foreground text-3xl">
            {menuOpen ? "x" : "≡"}
          </button>
        </div>
      </header>

      {/* Config Menu Overlay
      {configMenuOpen && (
        <div className="fixed inset-0 bg-black/70 z-50 flex justify-end">
          <div className="w-full max-w-md bg-purple-900 min-h-screen p-8 border-l-2 border-purple-500">
            <div className="flex justify-end items-center gap-2 mb-8">
              <button
                onClick={toggleConfigMenu}
                className="text-white hover:underline text-lg"
              >
                Close
              </button>
              <X
                className="w-6 h-6 text-white cursor-pointer"
                onClick={toggleConfigMenu}
              />
            </div>

            <h2 className="text-2xl text-white mb-6">ACCESSIBILITY</h2>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-lg text-white">Theme:</span>
                <ThemeToggle accessibilityText="teste" />
              </div>

              <div className="flex items-center justify-between">
                <span className="text-lg text-white">Language:</span>
                <LanguageToggler acessibilityText="language toggler icon" />
              </div>
            </div>
          </div>
        </div>
      )} */}
    </>
  );
};

export default Header;
