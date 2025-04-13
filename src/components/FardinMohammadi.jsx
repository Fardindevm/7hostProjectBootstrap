"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function FardinMohammadi() {
  return (
    <motion.span className="text-center fw-bold" style={{ fontSize: "16px" }}>
      <motion.span
        initial={{ display: "inline-block" }}
        whileHover={{
          transition: {
            staggerChildren: 0.1,
          },
        }}
      >
        {["M", "a", "d", "e", " ", "w", "i", "t", "h", " ", "❤", " ", "b", "y"].map((letter, index) => (
          <motion.span
            key={index}
            className="d-inline-block"
            whileHover={{
              y: [-2, 2, -2],
              transition: {
                repeat: Infinity,
                duration: 0.5,
                ease: "easeInOut",
              },
            }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.span>{" "}
      <Link
        href="https://fardindevm.github.io/My-Personal-Portfolio/"
        target="_blank"
        className="text-primary text-decoration-underline"
        style={{ "&:hover": { opacity: 0.7 } }}
      >
        <motion.span
          initial={{ display: "inline-block" }}
          whileHover={{
            transition: {
              staggerChildren: 0.1,
            },
          }}
        >
          {["F", "a", "r", "d", "i", "n", " ", "M", "o", "h", "a", "m", "m", "a", "d", "i"].map((letter, index) => (
            <motion.span
              key={index}
              className="d-inline-block"
              whileHover={{
                y: [-2, 2, -2],
                transition: {
                  repeat: Infinity,
                  duration: 0.5,
                  ease: "easeInOut",
                },
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.span>
      </Link>
    </motion.span>
  );
}
