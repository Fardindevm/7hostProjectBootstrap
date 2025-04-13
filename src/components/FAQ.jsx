"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQComponent() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Lorem ipsum dolor sit amet?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      question: "consectetur adipiscing elit?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      question: "sed do eiusmod tempor incididunt ut labore et dolore?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  return (
    <div className="py-5 d-flex flex-column gap-4">
      <div
        className="py-5 py-lg-5 px-3 px-lg-5 mx-auto d-flex flex-column gap-4 rounded-4 rounded-lg-5"
        style={{
          minWidth: "375px",
          maxWidth: "1100px",
          minHeight: "590px",
          width: "100%",
          backgroundColor: "var(--FAQbgLightmode)"
        }}
      >
        <h1 className="fw-black text-center" style={{color: "var(--FAQTitleLightmode)"}}>FAQ</h1>
        <p
          className="fw-medium text-center"
          style={{
            fontSize: "1.125rem",
            lineHeight: "130%",
            letterSpacing: "0%",
            maxWidth: "988px",
            color: "var(--textLightmode)"
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut.
        </p>

        <section className="d-flex flex-column gap-3" id="faq" style={{ scrollMarginTop: "275px" }}>
          {faqData.map((item, index) => (
            <div key={index} className=" pb-2 py-3" style={{borderBottom: "1px solid var(--FAQborder)"}}>
              <button
                aria-label={`Toggle FAQ item: ${item.question}`}
                onClick={() => toggle(index)}
                className="w-100 d-flex align-items-center justify-content-between text-start fw-medium text-dark px-2 bg-transparent border-0"
              >
                <span
                  className="fw-medium"
                  style={{
                    fontSize: "1rem",
                    letterSpacing: "0%",
                    color: "var(--FAQTitleLightmode)"
                  }}
                >
                  {item.question}
                </span>
                <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronDown className="w-6 h-6" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: "auto" },
                      collapsed: { opacity: 0, height: 0 },
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden mt-2"
                  >
                    <p
                      className="fw-light px-2"
                      style={{
                        fontSize: "1.125rem",
                        lineHeight: "130%",
                        letterSpacing: "0%",
                        minWidth: "347px",
                        color: "var(--FAQLightmode)"
                      }}
                    >
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
