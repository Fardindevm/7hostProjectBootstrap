"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Slideshow() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const timerRef = useRef(null);

  const slides = [
    {
      image: "/Images/projectPicture.png",
      alt: "Team collaboration",
      title: "Risk-free 30 day trial to level up your team's productivity.",
      description: "Get started now with our 30 day free trial. No credit card required.",
    },
    {
      image: "/Images/projectPicture.png",
      alt: "Project management",
      title: "Streamline your workflow with our tools",
      description: "Boost efficiency with our intuitive project management system",
    },
    {
      image: "/Images/projectPicture.png",
      alt: "Success metrics",
      title: "Track your team's performance",
      description: "Real-time analytics to measure your productivity gains",
    },
  ];

  const paginate = (newDirection) => {
    const nextIndex = (current + newDirection + slides.length) % slides.length;
    setDirection(newDirection);
    setCurrent(nextIndex);
    resetTimer();
  };

  const goToSlide = (index) => {
    if (index === current) return;
    const newDirection = index > current ? 1 : -1;
    setDirection(newDirection);
    setCurrent(index);
    resetTimer();
  };

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => paginate(1), 5000);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [current]);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      position: "absolute",
    }),
    center: {
      x: 0,
      opacity: 1,
      position: "relative",
    },
    exit: (direction) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      position: "absolute",
    }),
  };

  const prevIndex = (current - 1 + slides.length) % slides.length;
  const nextIndex = (current + 1) % slides.length;

  return (
    <div className="container py-10 mt-5" style={{ minHeight: "415px" }}>
      <div className="row justify-content-center">
        <div className="col-11 col-md-12 col-lg-10">
          {/* Mobile Header */}
          <div className="d-md-none mb-4">
            <h2 className="fs-1 mb-3" style={{ fontWeight: "900", color: "var(--normalH1Lightmode)" }}>{slides[current].title}</h2>
            <p className="fs-3" style={{color: "var(--textLightmode)"}}>{slides[current].description}</p>
          </div>

          {/* Slideshow Container */}
          <div
            className="d-flex align-items-center position-relative overflow-hidden slideshow-container"
            style={{
              minHeight: "302px",
              maxWidth: "1100px",
              gap: "8px"
            }}
          >

            {/* Previous Slide Thumbnail */}
            <div
              onClick={() => goToSlide(prevIndex)}
              className="position-relative flex-shrink-0 cursor-pointer hover-opacity-75 transition-all"
              style={{
                width: "50px",
                height: "100%",
                minHeight: "302px",
                opacity: "90%",
                cursor: "pointer"
              }}
            >
              <Image
                src={slides[prevIndex].image}
                alt={slides[prevIndex].alt}
                fill
                className="object-cover"
                style={{
                  zIndex: 1,
                  objectPosition: "center",
                  borderRadius: "5px 48px 48px 5px",
                }}
                priority={false}
                onError={(e) => {
                  e.target.src = "/images/fallback-image.png";
                }}
              />
              <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark" style={{
                zIndex: 2, opacity: "65%", borderRadius: "5px 48px 48px 5px"
              }} />
            </div>

            {/* Main Slide */}
            <div className="position-relative flex-grow-1 h-100 mx-0 mx-md-2 overflow-hidden"
              style={{
                borderRadius: "48px",
              }}
            >
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={current}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="w-100 h-100"
                  style={{
                  }}
                >
                  <div className="position-relative w-100 h-100">
                    <Image
                      src={slides[current].image}
                      alt={slides[current].alt}
                      fill
                      className="object-cover"
                      style={{
                        zIndex: 1,
                        objectPosition: "center",
                        borderRadius: "inherit",
                      }}
                      priority
                      onError={(e) => {
                        e.target.src = "/images/fallback-image.png";
                      }}

                    />
                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark" style={{ zIndex: 2, opacity: "55%" }} />

                    {/* Desktop Text Content */}
                    <div className="d-none d-md-flex position-absolute top-0 start-0 w-100 h-100 align-items-center p-5 text-white" style={{ zIndex: 3 }}>
                      <div style={{ maxWidth: "689px" }} className="slide-content">
                        <h2 className="display-4 fw-bold mb-3 responsive-title">{slides[current].title}</h2>
                        <p className="fs-3 responsive-text">{slides[current].description}</p>
                      </div>
                    </div>

                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Next Slide Thumbnail */}
            <div
              onClick={() => goToSlide(nextIndex)}
              className="position-relative flex-shrink-0 cursor-pointer hover-opacity-75 transition-all"
              style={{
                width: "50px",
                height: "100%",
                minHeight: "302px",
                opacity: "90%",
                cursor: "pointer"
              }}
            >
              <Image
                src={slides[nextIndex].image}
                alt={slides[nextIndex].alt}
                fill
                className="object-cover "
                style={{
                  zIndex: 1,
                  objectPosition: "center",
                  borderRadius: "48px 5px 5px 48px"

                }}
                priority={false}
                onError={(e) => {
                  e.target.src = "/images/fallback-image.png";
                }}
              />
              <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark" style={{
                zIndex: 2, opacity: "65%",
                borderRadius: "48px 5px 5px 48px"

              }} />
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="d-flex justify-content-center gap-2 mt-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="btn p-0 rounded-pill border-0 transition-all"
                style={{
                  height: "8px",
                  width: current === index ? "36px" : "24px",
                  backgroundColor: current === index ? "#2140D4" : "rgba(190, 208, 255, 0.5)",
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div >
  );
}
