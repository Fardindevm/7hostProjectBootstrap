import { Public_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const publicSans = Public_Sans({
  weight: ["900"],
  subsets: ["latin"],
  variable: "--font-public-sans",
});

export default function Hero() {
  return (
    <div
      className="d-flex flex-column flex-lg-row align-items-center justify-content-center mt-3 mt-lg-5 px-4 px-lg-0 gap-5 py-3 py-lg-5"
      style={{
        minWidth: "375px",
        width: "auto",
      }}
    >
      <div className="d-flex flex-column gap-5" style={{ minWidth: "311px", maxWidth: "576px" }}>
        <div className="d-flex flex-column gap-4 text-center" style={{ minWidth: "311px" }}>
          <h1
            className={`${publicSans.variable} font-sans fw-black text-primary`}
            style={{
              fontSize: "clamp(36px, 4vw, 3rem)",
              lineHeight: 1,
              letterSpacing: "-0.01em",
            }}
          >
            Manage your daily tasks better without all the stress.
          </h1>
          <p
            className="text-secondary"
            style={{
              fontSize: "clamp(1.25rem, 2vw, 1.5rem)",
              lineHeight: 1.5,
              letterSpacing: "-0.01em",
              fontWeight: 400,
            }}
          >
            Change the way you manage your tasks with our revolutionary project management technology.
          </p>
        </div>

        <div className="d-flex flex-column align-items-center flex-lg-row gap-3 w-100" style={{ maxWidth: "80%", margin: "0 auto" }}>
          <Link
            href="/"
            className="rounded-pill d-block text-decoration-none"
            style={{
              maxWidth: "478px",
              width: "223px",
              height: "56px",
              padding: "16px 32px",
              backgroundColor: "#08C056",
            }}
          >
            <button className="d-flex align-items-center justify-content-between w-100 border-0 bg-transparent p-0 cursor-pointer">
              <span className="text-white fw-bold hover-opacity">Get Started</span>
              <Image
                src="/svg/Go-forward.svg" alt="Go-forward-for-button"
                width={16}
                height={16}
                className="hover-opacity"
                />
            </button>
          </Link>

          <Link
            href="/"
            className="rounded-pill border-2 text-decoration-none"
            style={{
              maxWidth: "478px",
              width: "223px",
              height: "56px",
              padding: "16px 32px",
              borderColor: "#BED0FF",
              transition: "background-color 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(190, 208, 255, 0.6)",
              },
              border: "1px solid #60677A"
            }}
          >
            <button className="border-0 bg-transparent p-0 cursor-pointer w-100 fw-bold text-primary hover-text" >
              Schedule a Demo
            </button>
          </Link>
        </div>
      </div>

      <div className="position-relative" style={{ left: "16.29px" }}>
        <Image src="/Images/Illustration.png" alt="Illustration" width={550} height={379} priority={true} 
        style={{
          width: "100%",
          height: "auto",
          maxWidth: "750px",
          maxHeight: "500px",
          objectFit: "cover",
          "@media (minWidth: 768px)": {
            maxWidth: "460px",
            maxHeight: "330px",
            objectFit: "contain",
          },
          "@media (minWidth: 992px)": {
            maxWidth: "650px",
            maxHeight: "500px",
          },
          "@media (minWidth: 1200px)": {
            marginLeft: "40px",
            transform: "scale(1.4)",
          },
        }}/>
      </div>
    </div>
  );
}
