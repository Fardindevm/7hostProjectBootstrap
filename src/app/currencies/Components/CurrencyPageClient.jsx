"use client";

import { useRouter } from "next/navigation";

export default function CurrencyPageClient({ initialData: coin, error }) {
  const router = useRouter();

  const handleClose = () => {
    router.push('/currencies');
  };

  if (error) {
    return (
      <div className="min-vh-100 d-flex justify-content-center align-items-center text-danger">
        {error}
      </div>
    );
  }

  const jalaliDate = new Intl.DateTimeFormat("fa-IR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
    .format(new Date(coin.last_updated))
    .replace(/[۰-۹]/g, (d) => d.charCodeAt(0) - "۰".charCodeAt(0));

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div 
        className="position-relative rounded-4 p-4" 
        style={{ 
          width: "752px",
          backgroundColor: "#F5F6FA",
          boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)"
        }}
      >
        <button
          onClick={handleClose}
          className="position-absolute btn border border-primary text-primary rounded-circle d-flex align-items-center justify-content-center p-0"
          style={{ 
            width: "32px", 
            height: "32px",
            top: "28px",
            right: "20px",
            transition: "all 0.2s",
            fontSize: "20px"
          }}
          onMouseOver={e => e.target.style.backgroundColor = 'rgba(13, 110, 253, 0.1)'}
          onMouseOut={e => e.target.style.backgroundColor = 'transparent'}
        >
          ×
        </button>

        <div 
          className="mb-4 text-start" 
          style={{ 
            fontSize: "24px",
            fontWeight: 800,
            lineHeight: "34px",
            height: "72px"
          }}
        >
          <span style={{ color: "#00A86B" }}>7</span>
          <span className="text-primary">currencies.</span>
        </div>

        <div className="d-flex align-items-center px-3 justify-content-between mb-3">
          <div className="d-flex gap-3">
            <img 
              src={coin.image} 
              alt={coin.name} 
              className="img-fluid" 
              style={{ 
                width: "56px", 
                height: "56px" 
              }} 
            />
            <div className="d-flex flex-row align-items-center gap-1">
              <div 
                className="text-dark" 
                style={{ 
                  fontSize: "18px",
                  fontWeight: 600
                }}
              >
                {coin.name}
              </div>
              <div 
                style={{ 
                  color: "#777E90",
                  fontSize: "24px",
                  fontWeight: 700
                }}
              >
                {coin.symbol.toUpperCase()}
              </div>
            </div>
          </div>
          <div 
            className="text-end" 
            style={{ color: "#888A8E" }}
          >
            {jalaliDate} Updated
          </div>
        </div>

        <div 
          className="px-3" 
          style={{ 
            fontSize: "25px",
            fontWeight: 700,
            lineHeight: "48px"
          }}
        >
          {coin.current_price.toFixed(2)} <span style={{ color: "#58BD7D" }}>USD</span>
        </div>
      </div>
    </div>
  );
}
