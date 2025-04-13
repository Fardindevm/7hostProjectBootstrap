import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <div
      className="position-fixed z-[99999999] top-0 left-0 w-100"
      style={{
        minWidth: "375px",
        zIndex: "999999999999999",
        backgroundColor: "var(--navbarbg)",
        borderBottom: "1px solid var(--navarbb)",
      }}
    >
      <div
        className="container-fluid d-flex justify-content-between align-items-center px-4 px-lg-5 py-3"
        style={{
          minWidth: "375px",
          maxWidth: "1440px",
          height: "80px",
          margin: "0 auto",
        }}
      >
        <div className="d-flex align-items-center" style={{ gap: "100px" }}>
          <Link href="/" className="transition-opacity duration-300 hover-opacity-70 d-none d-lg-block" style={{ color: "var(--linkLightmode)" }}>
            <Image src="/svg/Logo.svg" alt="7host-logo" width={76.16} height={18.24} />
          </Link>

          <div className="d-none d-lg-flex fw-bold " style={{ color: "#4C5D77", gap: "48px" }}>
            <Link href="/#Feature1" className="text-decoration-none transition-opacity duration-300 hover-opacity">
              Pricing
            </Link>
            <Link href="/#How-it-works" className="text-decoration-none transition-opacity duration-300 hover-opacity">
              How it Works
            </Link>
            <Link href="/#faq" className="text-decoration-none transition-opacity duration-300 hover-opacity">
              FAQ
            </Link>
            <Link href="/currencies" className="text-decoration-none transition-opacity duration-300 hover-opacity" style={{ color: "#08C056" }}>
              Currencies
            </Link>
          </div>
        </div>

        <div className="d-none d-lg-flex gap-4 fw-bold">
          <Link href="/">
            <button
              className="rounded-pill py-3 px-4 border-0 transition-bg duration-300 hover-opacity"
              style={{
                height: "56px",
                width: "117px",
                backgroundColor: "transparent",
              }}
            >
              <span>Sign In</span>
            </button>
          </Link>
          <Link href="/">
            <button
              className="get-started-btn rounded-pill py-3 px-4 border-0 text-white"
              style={{
                height: "56px",
                width: "154px",
                backgroundColor: "#2140D4",
                transition: "all 0.3s ease"
              }}
            >
              <span>Get Started</span>
            </button>
          </Link>

        </div>

        <MobileMenu />
      </div>
    </div>
  );
}
