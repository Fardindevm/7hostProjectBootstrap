//app/currencies/Components/CurrenciesHeader.jsx
import Image from "next/image";

export default function CurrenciesHeader() {
  return (
    <div
      className="container-fluid min-vw-100 p-0 mb-5 position-relative overflow-hidden"
      style={{
        minWidth: "375px",
        height: "532px",
        backgroundColor: "#DECBE9",
        marginBottom: "0",
      }}
    >
      <div
        className="container-xxl px-3 px-xl-5 py-4 py-xl-5 mx-auto d-flex flex-column flex-xl-row align-items-center justify-content-between position-relative z-3"
        style={{ maxWidth: "1440px", height: "100%" }}
      >
        <div className="d-flex flex-column text-center text-xl-start gap-3 gap-xl-5" style={{ maxWidth: "576px", flex: "0 0 auto" }}>
          <h1
            className="fw-black lh-1"
            style={{
              fontSize: "clamp(36px, 5vw, 48px)",
              letterSpacing: "-0.01em",
              marginBottom: "0",
              fontWeight: "800"
            }}
          >
            Today's Cryptocurrency Prices
          </h1>
          <p
            className="lead mb-0"
            style={{
              fontSize: "clamp(20px, 2.5vw, 24px)",
              lineHeight: "1.5",
              letterSpacing: "-0.01em",
            }}
          >
            The global crypto market cap is{" "}
            <span className="fw-bold" style={{ fontSize: "inherit" }}>
              $1.86T
            </span>
          </p>
        </div>

        <div
          className="position-relative flex-shrink-0"
          style={{
            width: "min(100%, 449.88px)",
            height: "min(100%, 327.63px)",
            aspectRatio: "449.88/327.63",
          }}
        >
          <div className="position-relative w-100 h-100">
            <Image
              src="/Images/Composition_04 1.png"
              alt="Cryptocurrency visual"
              fill
              className="object-fit"
              sizes="(maxWidth: 1200px) 264px, 449.88px"
              priority
            />
          </div>

          {/* Big Mouse with Shadow */}
          <div
            className="position-absolute"
            style={{
              top: "54%",
              left: "9.5%",
              width: "11%",
              aspectRatio: "62/66",
            }}
          >
            <Image
              src="/svg/Currencies/specular.svg"
              alt="Decorative element"
              fill
              className="object-contain"
              style={{ filter: "brightness(0.2) invert(0.98) drop-shadow(0 4px 4px rgba(0,0,0,0.25))" }}
            />
          </div>

          {/* Fat Yellow Ball */}
          <div
            className="position-absolute"
            style={{
              top: "30%",
              right: "8.5%",
              width: "12%",
              aspectRatio: "55/45",
            }}
          >
            <Image src="/Images/Composition_02_1.png" alt="Decorative element" fill className="object-contain" />
          </div>

          {/* Small Yellow Ball */}
          <div
            className="position-absolute"
            style={{
              top: "46%",
              left: "1.8%",
              width: "6.7%",
              aspectRatio: "30/24",
            }}
          >
            <Image src="/Images/Composition_02_2.png" alt="Decorative element" fill className="object-contain" />
          </div>

          {/* Green Mouse */}
          <div
            className="position-absolute"
            style={{
              bottom: "2%",
              right: "11.5%",
              width: "15.5%",
              aspectRatio: "70/59",
            }}
          >
            <Image src="/Images/Composition_02 2.png" alt="Decorative element" fill className="object-contain" />
          </div>

          {/* White Mouse */}
          <div
            className="position-absolute"
            style={{
              top: "1.5%",
              right: "0%",
              width: "13.5%",
              aspectRatio: "60/65",
            }}
          >
            <Image src="/Images/elements-2.png" alt="Decorative element" fill className="object-contain" />
          </div>

          {/* Wheel */}
          <div
            className="position-absolute"
            style={{
              top: "45%",
              right: "-4%",
              width: "18.5%",
              aspectRatio: "57/57",
            }}
          >
            <Image src="/Images/Composition_02_3.png" alt="Decorative element" fill className="object-contain" />
          </div>
        </div>
      </div>

      {/* Background Circles */}
      <div className="position-absolute top-0 start-0 w-100 h-100 z-1 overflow-hidden">
        <div
          className="position-absolute rounded-circle"
          style={{
            top: "15%",
            left: "25%",
            width: "80px",
            height: "80px",
            backgroundColor: "rgba(216, 180, 254, 0.3)",
          }}
        />
        <div
          className="position-absolute rounded-circle"
          style={{
            bottom: "10%",
            right: "33%",
            width: "64px",
            height: "64px",
            backgroundColor: "rgba(251, 207, 232, 0.3)",
          }}
        />
      </div>
    </div>
  );
}
