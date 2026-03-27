"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
];

function LogoIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M9 15V3M9 3L4 8M9 3L14 8"
        stroke="#7C3AED"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function NavLink({ label, href }: { label: string; href: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      className="relative py-1"
      style={{ fontSize: "15px", color: "#F9F7FF", opacity: hovered ? 1 : 0.8, transition: "opacity 0.2s ease" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {label}
      <AnimatePresence>
        {hovered && (
          <motion.span
            layoutId="nav-underline"
            className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full"
            style={{ backgroundColor: "#FF6B6B" }}
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0, originX: 1 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          />
        )}
      </AnimatePresence>
    </a>
  );
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <div className="relative w-6 h-5 flex flex-col justify-between">
      <motion.span
        className="block h-[2px] w-full rounded-full bg-[#F9F7FF]"
        animate={open ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.25 }}
      />
      <motion.span
        className="block h-[2px] w-full rounded-full bg-[#F9F7FF]"
        animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.2 }}
      />
      <motion.span
        className="block h-[2px] w-full rounded-full bg-[#F9F7FF]"
        animate={open ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.25 }}
      />
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 80);
  });

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      style={{ height: "72px" }}
      animate={{
        backgroundColor: scrolled ? "rgba(13, 13, 20, 0.85)" : "rgba(13, 13, 20, 0)",
        borderBottomColor: scrolled ? "rgba(124, 58, 237, 0.2)" : "rgba(124, 58, 237, 0)",
        backdropFilter: scrolled ? "blur(16px)" : "blur(0px)",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {/* inner border element — animated separately so border-style stays solid */}
      <motion.div
        className="absolute inset-x-0 bottom-0 h-px"
        animate={{ backgroundColor: scrolled ? "rgba(124, 58, 237, 0.2)" : "rgba(124, 58, 237, 0)" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />

      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <motion.a
          href="/"
          className="flex items-center gap-2 select-none"
          initial={{ scale: 0.8, y: -4 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
        >
          <LogoIcon />
          <span
            className="font-display font-bold text-xl tracking-tight"
            style={{ color: "#7C3AED" }}
          >
            Rankly
          </span>
        </motion.a>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.href} label={link.label} href={link.href} />
          ))}
        </nav>

        {/* Desktop CTA buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#login"
            className="text-[#F9F7FF] text-sm font-medium transition-opacity hover:opacity-100"
            style={{
              border: "1px solid rgba(249, 247, 255, 0.2)",
              borderRadius: "999px",
              padding: "10px 20px",
              opacity: 0.9,
            }}
          >
            Log in
          </a>
          <motion.a
            href="#signup"
            className="text-white text-sm font-medium"
            style={{
              background: "linear-gradient(135deg, #7C3AED, #FF6B6B)",
              borderRadius: "999px",
              padding: "10px 24px",
              fontWeight: 500,
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            Start Free
          </motion.a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <HamburgerIcon open={menuOpen} />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            className="md:hidden absolute left-0 right-0 top-[72px] z-40"
            style={{ backgroundColor: "#0D0D14" }}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="flex flex-col gap-1 px-6 py-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-3 text-[15px] border-b"
                  style={{
                    color: "#F9F7FF",
                    opacity: 0.85,
                    borderColor: "rgba(249, 247, 255, 0.08)",
                  }}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-5">
                <a
                  href="#login"
                  className="text-center text-sm font-medium text-[#F9F7FF]"
                  style={{
                    border: "1px solid rgba(249, 247, 255, 0.2)",
                    borderRadius: "999px",
                    padding: "12px 20px",
                  }}
                >
                  Log in
                </a>
                <a
                  href="#signup"
                  className="text-center text-white text-sm font-medium"
                  style={{
                    background: "linear-gradient(135deg, #7C3AED, #FF6B6B)",
                    borderRadius: "999px",
                    padding: "12px 24px",
                    fontWeight: 500,
                  }}
                >
                  Start Free
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
