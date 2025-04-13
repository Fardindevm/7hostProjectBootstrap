import Image from "next/image";

export default function GetStartedComponent() {
  return (
    <div className="py-5 d-flex justify-content-center" style={{ minHeight: "398px", minWidth: "375px" }}>
      <div
        className="position-relative w-100 mx-auto overflow-hidden"
        style={{
          maxWidth: "1100px",
          minHeight: "432px",
          backgroundColor: "var(--GetStarted)",
          borderRadius: "56px",
          "@media (minWidth: 768px)": {
            minHeight: "432px",
          },
        }}
      >
        <div className="position-absolute w-100 h-100">
          <Image
            src="/Images/Frame_14.png"
            alt="Decorative background"
            fill
            className="object-cover"
            style={{
              filter: "var(--GetStartedBg)",
              mixBlendMode: "multiply",
            }}
            priority
          />
        </div>

        <div
          className="position-relative d-flex flex-column justify-content-center px-3 px-md-5 text-white"
          style={{
            top: "118px",
            minHeight: "196px",
            "@media (minWidth: 768px)": {
              left: "20px",
            },
          }}
        >
          <div className="d-flex flex-column flex-md-row gap-5" style={{ maxWidth: "944px" }}>

            <div className="text-center text-md-start" style={{ maxWidth: "659px" }}>
              <h1
                className="fw-black mb-4"
                style={{
                  fontSize: "36px",
                  lineHeight: "100%",
                  letterSpacing: "-1%",
                  color: "#2140D4",
                }}
              >
                Risk-free 30 day trial to <br className="d-none d-md-block" />
                <span style={{ color: "#08C056" }}>level up</span> your team's productivity.
              </h1>
              <p
                className="fw-normal mb-4 mb-md-0"
                style={{
                  fontSize: "24px",
                  lineHeight: "40px",
                  letterSpacing: "-1%",
                  color: "#0445B1",
                }}
              >
                Get started now and take advantage of our 30 day free trial today. No credit card required.
              </p>
            </div>

            <button
              className="position-absolute d-flex align-items-center justify-content-center gap-3 mx-auto ms-md-auto"
              style={{
                backgroundColor: "#08C056",
                minWidth: "331px",
                width: "223px",
                height: "64px",
                padding: "16px 32px",
                borderRadius: "48px",
                border: "none",
                right: "40px",
                bottom: "-60px",
                "@media (minWidth: 768px)": {
                  position: "absolute",
                  bottom: "0",
                  right: "0",
                },
              }}
            >
              <span
                className="fw-bold"
                style={{
                  fontSize: "20px",
                  color: "#F7FAFC",
                  minWidth: "90px",
                }}
              >
                Get Started
              </span>
              <Image src="/svg/Go-forward.svg" alt="Arrow icon" width={24} height={24} style={{ width: "auto", height: "auto" }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
