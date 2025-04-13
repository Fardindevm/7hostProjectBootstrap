import Image from "next/image";

export default function ProjectManagementComponent() {
  return (
    <div
      id="How-it-works"
      className="py-3 py-lg-5 px-4 px-xl-5 text-center d-flex flex-column align-items-center gap-5"
      style={{
        minWidth: "375px",
        maxWidth: "1100px",
        margin: "50px auto",
        scrollMarginTop: "50px",
      }}
    >
      <h1
        className="text-primary font-sans fw-black  display-lg-3 text-center"
        style={{
          letterSpacing: "-0.01em",
          lineHeight: 1,
        }}
      >
        Fully reinvented project management system to help you ship products faster
      </h1>

      <p
        className="text-secondary fs-5 fs-lg-4 fw-normal text-center"
        style={{
          letterSpacing: "-0.01em",
          lineHeight: "30px",
        }}
      >
        Focus on what matters most, our robots handle the rest ☕
      </p>

      <div className="position-relative" style={{ marginLeft: "auto", marginRight: "auto" }}>
        <Image
          src="/Images/Phone_img.png"
          alt="Project management phone interface"
          width={750}
          height={500}
          className="img-fluid"
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
          }}
        />
      </div>
    </div>
  );
}
