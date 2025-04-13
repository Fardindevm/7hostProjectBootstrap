import Image from "next/image";

export default function About_the_app() {
  return (
    <div
      className="py-3 py-lg-5 px-4 px-lg-5 text-center d-flex flex-column align-items-center gap-3"
      style={{
        minWidth: "375px",
        width: "100%",
        maxWidth: "1440px",
        margin: "0 auto", 
      }}
    >
      <div className="d-flex flex-column gap-3" style={{ minHeight: "136px" }}>
        <h2
          className="fw-black"
          style={{
            fontSize: "2.25rem",
            letterSpacing: "-1%",
            lineHeight: "100%",
            minHeight: "34px",
            width: "100%",
            maxWidth: "704px",
            color: "var(--normalH1Lightmode)"
          }}
        >
          Get more done in <span className="text-success">less time</span>
        </h2>
        <p
          // className="text-secondary"
          style={{
            fontSize: "1.5rem",
            letterSpacing: "-1%",
            lineHeight: "30px",
            height: "30px",
            color: "var(--textLightmode)"
          }}
        >
          Simple, fast, effortlessly.
        </p>
      </div>

      <div
        className="d-flex flex-column flex-lg-row gap-4 gap-lg-5 align-items-center justify-content-around"
        style={{
          minWidth: "239px",
          width: "100%",
          maxWidth: "876px",
          minHeight: "64px",
          color: "#00006D",
          fontWeight: "bold",
        }}
      >
        <div className="d-flex align-items-center gap-4">
          <Image src="/svg/Transparent-Pricing.svg" alt="Transparent Pricing image" width={64} height={64} />
          <p className="m-0" style={{color: "var(--atpText)"}}>Transparent Pricing</p>
        </div>

        <div className="d-flex align-items-center gap-4">
          <Image src="/svg/Easy-Integrations.svg" alt="Easy Integrations image" width={64} height={64} />
          <p className="m-0" style={{color: "var(--atpText)"}}>Easy Integrations</p>
        </div>

        <div className="d-flex align-items-center gap-4">
          <Image src="/svg/Superb-Efficiency.svg" alt="Superb Efficiency image" width={64} height={64} />
          <p className="m-0" style={{color: "var(--atpText)"}}>Superb Efficiency</p>
        </div>
      </div>
    </div>
  );
}
