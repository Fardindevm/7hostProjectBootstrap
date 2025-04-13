import { Weight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FeatureSection({ id, imageUrl, imageUrlDark, title, theme, description, isReversed = false, linkUrl = "/" }) {
  const imageSrc = theme === "dark" ? imageUrlDark : imageUrl;
  return (
    <div
      id={id}
      className="container-fluid py-3 py-lg-5 px-4"
      style={{
        minWidth: "375px",
        maxWidth: "1440px",
        minHeight: "730px",
        margin: "0 auto",
      }}
    >
      <div
        className={`d-flex flex-column flex-lg-row gap-5 justify-content-around align-items-center py-5 ${isReversed ? "flex-lg-row-reverse" : ""}`}
        style={{ maxHeight: "624px" }}
      >
        <div
          className={`position-relative feature-image-container overflow-hidden ${isReversed ? "shadow-orange" : "shadow-purple"}`}
          style={{
            minWidth: "311px",
            minHeight: "311px",
            maxWidth: "528px",
            height: "100%",
            maxHeight: "528px",
            borderRadius: "256px",
          }}
        >
          <Image
            src={imageSrc}
            alt={title + " feature image"}
            width={528}
            height={528}
            className="feature-image feature-image-container"
            style={{
              width: "100%",
              height: "100%",
              maxWidth: "100%",
              objectFit: "cover",
              borderRadius: "256px",
              display: "block",
            }}
          />
        </div>


        <div className="d-flex flex-column gap-5" style={{ minWidth: "311px", maxWidth: "494px", maxHeight: "236px" }}>
          <div className="d-flex flex-column gap-4">
            <h2
              className={` ${isReversed ? "text-warning" : "text-primary"}`}
              style={{
                lineHeight: "100%",
                letterSpacing: "-1%",
                maxWidth: "520px",
                fontWeight: "900",
                fontSize: "36px"
              }}
            >
              {title}
            </h2>
            <p
              className="fs-4"
              style={{
                lineHeight: "30px",
                maxWidth: "450px",
                fontWeight: "normal",
                letterSpacing: "1%",
                color: "var(--textLightmode)"
              }}
            >
              {description}
            </p>
          </div>

          <div className="d-flex justify-content-end hover-opacity">
            <Link href={linkUrl} className="d-flex align-items-center gap-3 mt-auto text-primary fw-bold" style={{ letterSpacing: "0%" }}>
              Learn More
              <Image src="/svg/Blue-go-forward.svg" alt="Learn more arrow" width={16} height={16} className="img-fluid" />
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}
