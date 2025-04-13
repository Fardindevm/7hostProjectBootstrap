// components/CoinModalClient.js
'use client';

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function CoinModalClient({ coin, error }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);

  const isModal = pathname.includes('@modal');

  const handleClose = () => {
    setIsOpen(false);
    if (isModal) {
      router.back();
    } else {
      router.push('/currencies');
    }
  };
  
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!isOpen) return null;

  const jalaliDate = new Intl.DateTimeFormat("fa-IR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
    .format(new Date(coin.last_updated))
    .replace(/[۰-۹]/g, d => d.charCodeAt(0) - '۰'.charCodeAt(0));

  if (error) {
    return (
      <div 
        className="position-fixed top-0 start-0 bottom-0 end-0" 
        style={{ zIndex: 1050 }} 
        onClick={handleBackdropClick}
      >
        <div 
          className="position-absolute top-0 start-0 bottom-0 end-0" 
          style={{ 
            backgroundColor: "rgba(0,0,0,0.6)", 
            backdropFilter: "blur(4px)" 
          }} 
        />
        <div className="position-relative h-100 d-flex align-items-center justify-content-center text-danger" style={{ zIndex: 1051 }}>
          {error}
        </div>
      </div>
    );
  }

  
  const ContentWrapper = ({ children }) => {
    if (isModal) {
      return (
        <div className="position-fixed top-0 start-0 bottom-0 end-0" style={{ zIndex: 1050 }} onClick={handleBackdropClick}>
          <div className="position-absolute top-0 start-0 bottom-0 end-0" style={{ backgroundColor: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }} />
          <div className="position-relative h-100 d-flex align-items-center justify-content-center" style={{ zIndex: 1051 }}>
            {children}
          </div>
        </div>
      );
    }
    return (
      <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
        {children}
      </div>
    );
  };

  if (!isOpen) return null;

  if (error) {
    return (
      <ContentWrapper>
        <div className="text-danger">{error}</div>
      </ContentWrapper>
    );
  }
  
  return (
    <div 
      className="position-fixed top-0 start-0 bottom-0 end-0" 
      style={{ zIndex: 1050 }} 
      onClick={handleBackdropClick}
    >
      <div 
        className="position-absolute top-0 start-0 bottom-0 end-0" 
        style={{ 
          backgroundColor: "rgba(0,0,0,0.6)", 
          backdropFilter: "blur(4px)" 
        }} 
      />
      <div 
        className="position-relative h-100 d-flex align-items-center justify-content-center" 
        style={{ zIndex: 1051 }}
      >
        <div 
          className="position-relative rounded-4 p-4 modal-container" 
          style={{ 
            width: "420px",
            backgroundColor: "#F5F6FA",
            boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)"
          }}
          onClick={e => e.stopPropagation()}
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
            className="px-3 price-text" 
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
    </div>
  );
}
