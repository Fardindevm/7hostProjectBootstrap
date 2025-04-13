"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <div className="d-lg-none" style={{ zIndex: 99999 }}>
      <div
        className="position-fixed"
        style={{
          top: 0,
          left: 0,
          right: 0,
          height: "80px",
          backgroundColor: "var(--navbarbg)",
          borderBottom: "1px solid var(--navarbb)",
          zIndex: 99999,
        }}
      />

      {/* Hamburger/Close button */}
      <button
        aria-label="Close and open menu button"
        onClick={() => setIsOpen(!isOpen)}
        className="position-fixed d-flex flex-column justify-content-center align-items-center get-started-btn"
        style={{
          width: "48px",
          height: "48px",
          backgroundColor: "#2140D4",
          borderRadius: "50%",
          border: "none",
          transition: "background-color 300ms",
          zIndex: 100000,
          top: "16px",
          right: "16px",
        }}
      >
        <motion.span
          animate={isOpen ? { rotate: 45, y: 2 } : { rotate: 0, y: -4 }}
          className="position-absolute d-block bg-white"
          style={{
            width: "24px",
            height: "2px",
            transition: "all 300ms",
          }}
        />
        <motion.span
          animate={isOpen ? { rotate: -45, y: 2 } : { rotate: 0, y: 4 }}
          className="position-absolute d-block bg-white"
          style={{
            width: "24px",
            height: "2px",
            transition: "all 300ms",
          }}
        />
      </button>

      <Link
        className="position-fixed"
        href="/"
        style={{
          zIndex: 100000,
          top: "24px",
          left: "16px",
        }}
      >
        <Image src="/svg/Logo.svg" alt="7flow logo" width={80} height={20} />
      </Link>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="position-fixed"
            style={{
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 99998,
              overflowY: "auto",
            }}
          >
            {/* Menu background */}
            <div
              className="position-fixed"
              style={{
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "var(--mobileMenuBg)",
              }}
            />

            {/* Menu content */}
            <div className="position-relative z-1 d-flex flex-column min-vh-100 px-5 pt-34" style={{ height: "95%", paddingTop: "110px" }}>
              <div className="d-flex flex-column gap-4 custom-margin">
                <Link
                  href="/#Feature1"
                  onClick={handleLinkClick}
                  className="text-decoration-none fw-bold hover-opacity"
                  style={{
                    color: "#4C5D77",
                  }}
                >
                  Pricing
                </Link>
                <Link
                  href="/#How-it-works"
                  onClick={handleLinkClick}
                  className="text-decoration-none fw-bold hover-opacity"
                  style={{
                    color: "#4C5D77",
                  }}
                >
                  How it Works
                </Link>
                <Link
                  href="/#faq"
                  onClick={handleLinkClick}
                  className="text-decoration-none fw-bold hover-opacity"
                  style={{
                    color: "#4C5D77",
                  }}
                >
                  FAQ
                </Link>
                <Link
                  href="/currencies"
                  onClick={handleLinkClick}
                  className="text-decoration-none fw-bold hover-opacity"
                  style={{
                    color: "#08C056",
                  }}
                >
                  Currencies
                </Link>
              </div>

              <div className="d-flex flex-column mt-auto mb-8 gap-3">
                <Link href="/" onClick={handleLinkClick} className="w-100">
                  <button
                    className="w-100 py-3 rounded-pill fw-semibold border-0 get-started-btn"
                    style={{
                      backgroundColor: "#2140D4",
                      color: "white",
                      transition: "background-color 400ms",
                      "&:hover": { backgroundColor: "rgba(33, 64, 212, 0.8)" },
                    }}
                  >
                    Get Started
                  </button>
                </Link>
                <Link href="/" onClick={handleLinkClick} className="w-100">
                  <button
                    className="w-100 py-3 bg-transparent border-0 hover-opacity"
                    style={{
                      color: "#4B5563",
                      transition: "opacity 300ms",
                      "&:hover": { opacity: 0.7 },
                    }}
                  >
                    Sign In
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
