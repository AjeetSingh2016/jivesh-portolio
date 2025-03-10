"use client"; // Needed for smooth scrolling in Next.js 13+

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Importing Lucide icons

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (id) => {
    if (pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/#${id}`;
    }
    setIsOpen(false); // Close menu on mobile after click
  };

  const isActive = (path) =>
    pathname === path
      ? "text-green-400 font-semibold border-b-2 border-green-400"
      : "text-gray-400 hover:text-green-400";

  return (
    <nav className="w-full bg-black bg-opacity-90 backdrop-blur-lg shadow-md z-50">
      <div className="flex justify-between items-center px-4 sm:px-6 md:px-12 py-3 md:py-4">
        {/* Logo */}
        <h1 className="text-green-400 text-lg sm:text-xl md:text-xl font-bold">
          चरन्मार्गान्विजानाति।{" "}
          <span className="text-white text-xs sm:text-sm md:text-base font-extralight">
            - महाभारत, आदि पर्व १३३-२३
          </span>
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-4 lg:space-x-6 text-sm md:text-base lg:text-lg">
          <li className={`cursor-pointer ${isActive("/")}`} onClick={() => scrollToSection("home")}>
            Home
          </li>
          <li className={`cursor-pointer ${isActive("/publications")}`} onClick={() => scrollToSection("publications")}>
            Publications
          </li>
          <li>
            <Link href="/research" className={`cursor-pointer ${isActive("/research")}`}>
              Research
            </Link>
          </li>
          <li>
            <Link href="/projects" className={`cursor-pointer ${isActive("/projects")}`}>
              Projects
            </Link>
          </li>
          <li className={`cursor-pointer ${isActive("/skills")}`} onClick={() => scrollToSection("skills")}>
            Skills
          </li>
          <li className={`cursor-pointer ${isActive("/certifications")}`} onClick={() => scrollToSection("certifications")}>
            Certification
          </li>
          <li>
            <Link href="/blogs" className={`cursor-pointer ${isActive("/blog")}`}>
              Blogs
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-gray-400">
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-95 backdrop-blur-lg py-4 shadow-lg">
          <ul className="flex flex-col items-center space-y-3 text-sm sm:text-base">
            <li className={`cursor-pointer ${isActive("/")}`} onClick={() => scrollToSection("home")}>
              Home
            </li>
            <li className={`cursor-pointer ${isActive("/publications")}`} onClick={() => scrollToSection("publications")}>
              Publications
            </li>
            <li>
              <Link href="/research" className={`cursor-pointer ${isActive("/research")}`} onClick={() => setIsOpen(false)}>
                Research
              </Link>
            </li>
            <li>
              <Link href="/projects" className={`cursor-pointer ${isActive("/projects")}`} onClick={() => setIsOpen(false)}>
                Projects
              </Link>
            </li>
            <li className={`cursor-pointer ${isActive("/skills")}`} onClick={() => scrollToSection("skills")}>
              Skills
            </li>
            <li className={`cursor-pointer ${isActive("/certifications")}`} onClick={() => scrollToSection("certifications")}>
              Certification
            </li>
            <li>
              <Link href="/blogs" className={`cursor-pointer ${isActive("/blog")}`} onClick={() => setIsOpen(false)}>
                Blogs
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
