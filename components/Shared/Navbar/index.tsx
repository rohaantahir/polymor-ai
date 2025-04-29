"use client";

import { useState, useEffect } from "react";
import Logo from "@/components/Shared/Logo";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Products",
    href: "/products",
  },
  {
    label: "Partners",
    href: "/partners",
  },
  // {
  //   label: "Careers",
  //   href: "/careers",
  // },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`bg-background/80 backdrop-blur-md border-b border-white/10 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4">
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white/80 hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}

          <Button
            asChild
            className="rounded-none px-8 h-10 text-base bg-themeBlue text-black hover:bg-themeBlue/90 font-normal"
          >
            <Link href="/contact">Contact</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed inset-0 bg-background/80 backdrop-blur-sm transition-all duration-300 ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`absolute top-0 left-0 right-0 bg-background border-b border-white/10 transition-transform duration-300 ${
            mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="container mx-auto py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/80 hover:text-white py-3 transition-colors text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button
              asChild
              className="rounded-none px-8 h-12 text-base bg-themeBlue text-black hover:bg-themeBlue/90 font-normal w-full mt-4"
            >
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
