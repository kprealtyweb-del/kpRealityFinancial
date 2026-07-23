import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Bars3Icon,
  XMarkIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import Container from "../components/Container";
import { navLinks } from "../data/siteData";
import logo from "../../public/png/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 h-20 border-b border-border shadow-sm bg-[#C18221]">
      <Container className="h-full">
        <nav
          className="flex h-full items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo Placeholder */}
          <Link
            to="/"
            className="flex items-center gap-2.5 font-heading text-xl font-bold text-primary sm:text-2xl"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-sm">
              <img src={logo} />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div
            className="hidden items-center gap-8 lg:flex
          "
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `font-heading text-sm font-semibold transition-colors duration-300 ${
                    isActive ? "text-black" : "text-white hover:text-black"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Get Quote CTA */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-2.5 font-heading text-sm font-semibold text-black shadow-sm transition-all duration-300 hover:shadow-md focus:outline-none"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-xl p-2 text-white transition-colors duration-300 hover:text-black lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </nav>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="absolute left-0 right-0 top-20 border-b border-border bg-white p-4 shadow-md lg:hidden">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 font-heading text-sm font-semibold transition-colors duration-300 ${
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-paragraph hover:bg-slate-50"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="flex gap-x-5">
                <div className="pt-2">
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="block w-full rounded-xl bg-primary py-3 text-center font-heading text-sm font-semibold text-white transition-all duration-300 hover:bg-primary-hover"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
