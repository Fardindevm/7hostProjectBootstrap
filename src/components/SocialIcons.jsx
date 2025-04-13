// components/SocialIcons.jsx
import { Instagram, Facebook, Twitter } from "lucide-react";

const socialLinks = [
  { icon: Instagram, url: "http://instagram.com/SevenHost24" },
  { icon: Twitter, url: "https://twitter.com/SevenHost24" },
  { icon: Facebook, url: "https://www.facebook.com/SevenHost24" },
];

const SocialIcons = () => {
  return (
    <div className="d-flex gap-4">
      {socialLinks.map(({ icon: Icon, url }, index) => (
        <a
          key={index}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="d-flex align-items-center justify-content-center rounded-circle border-2"
          style={{
            width: "48px",
            height: "48px",
            borderColor: "rgba(8, 192, 86, 0.24)",
            transition: "background-color 0.2s ease",
            "&:hover": {
              backgroundColor: "rgba(8, 192, 86, 0.3)",
            },
          }}
          aria-label={`Link to ${Icon.displayName}`}
        >
          <Icon
            className="text-success"
            style={{
              width: "24px",
              height: "24px",
              color: "#08C056", 
            }}
          />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
