import Image from "next/image";
import SocialIcons from "./SocialIcons";
import Link from "next/link";
import DarkLightButtons from "./DarkLightButtons";
import FardinMohammadi from "./FardinMohammadi";

export default function FooterComponent() {
  return (
    <footer className="container-fluid px-0" style={{ minWidth: "375px", maxWidth: "1440px", margin: "0 auto" }}>
      <div className="py-5 px-3 px-md-5 px-xl-6 d-flex flex-column gap-5" >
        <div className="d-flex flex-column align-items-center flex-lg-row gap-5 gap-lg-0">
          {/* Logo and Dark/Light buttons */}
          <div className="d-flex flex-column align-items-center align-items-lg-start" style={{ width: "149px", gap: "56px" }}>
            <Link href="https://7ho.st/">
              <Image src="/svg/Logo.svg" width={77} height={32} alt="7host Logo for footer" style={{ width: "77px", height: "32px" }} />
            </Link>
            <div className="d-none d-lg-block" style={{ width: "112px" }}>
              <DarkLightButtons />
            </div>
          </div>

          <div className="d-flex flex-column flex-lg-row gap-4" style={{ marginLeft: "auto", marginRight: "auto" }}>
            <div className="d-flex flex-column gap-4 me-lg-5">
              {[
                { text: "Pricing", href: "/#Feature1" },
                { text: "How it Works", href: "/#How-it-works" },
                { text: "FAQ", href: "/#faq" },
              ].map(({ text, href }) => (
                <Link
                  key={text}
                  href={href}
                  className="text-decoration-none fw-bold hover-opacity"
                  style={{
                    color: "#4C5D77",
                    fontSize: "16px",
                    lineHeight: "24px",
                    transition: "all 0.4s ease",
                    color: "var(--linkLightmode)",
                  }}
                >
                  {text}
                </Link>
              ))}
            </div>

            <div className="d-flex flex-column gap-4">
              {["Terms of Service", "Privacy Policy"].map((text) => (
                <Link
                  key={text}
                  href="#"
                  className="text-decoration-none fw-bold hover-opacity"
                  style={{
                    color: "#4C5D77",
                    fontSize: "16px",
                    lineHeight: "24px",
                    transition: "all 0.4s ease",
                    color: "var(--linkLightmode)",
                  }}
                >
                  {text}
                </Link>
              ))}
            </div>
          </div>

          <div className="d-flex flex-column align-items-center gap-4" style={{ minWidth: "208px" }}>
            <SocialIcons />
            <div className="d-block d-lg-none" style={{ width: "112px" }}>
              <DarkLightButtons />
            </div>
          </div>
        </div>

        <FardinMohammadi />
      </div>
    </footer>
  );
}
