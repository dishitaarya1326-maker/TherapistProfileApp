"use client";
import { useState, useEffect } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#D6E2EC] w-full">
        <div className="mx-auto w-full px-4 sm:px-6 md:px-8 max-w-7xl">
          <div className="h-16 flex items-center justify-between">
            
            {/* Logo — Left */}
            <div className="flex-shrink-0">
              <span className="text-base sm:text-lg font-semibold text-[#2E2A28] whitespace-nowrap">
                Maya Reynolds Psychology
              </span>
            </div>

            {/* Desktop Navigation — Right */}
           <nav className="hidden md:flex items-center space-x-10 lg:space-x-14">

              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm lg:text-base text-[#2E2A28] hover:text-[#5A7FA6] transition-colors whitespace-nowrap"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <span className="w-6 h-[2px] bg-[#2E2A28]" />
              <span className="w-6 h-[2px] bg-[#2E2A28]" />
              <span className="w-6 h-[2px] bg-[#2E2A28]" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden fixed inset-0 top-16 z-40 bg-white">
          <div className="flex flex-col p-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="py-4 text-lg text-[#2E2A28] border-b border-gray-100"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
