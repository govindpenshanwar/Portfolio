"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

function CertificationsPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const myFontStyle = {
    fontFamily: "Saira Extra Condensed", // Font family name
    fontWeight: "700",
    fontSize: "4rem",
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: -150 }}
      animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -150 }}
      transition={{
        delay: 0.6,
        duration: 0.3,
        ease: "linear",
        stiffness: 170,
        type: "spring"
      }}
      ref={ref}
      className="ml-80 mb-40 py-40  " id="certifications">
      <p className="uppercase title" style={myFontStyle}>
        Certifications
      </p>
      <div className="flex flex-col gap-4 mt-10">
        <p className="address text-lg font-semibold">
          🏆 The Complete Web Development Bootcamp 2023, Udemy
        </p>

        <p className="address text-lg font-semibold">
          🏆 React Basics, Coursera(Meta)
        </p>

        <p className="address text-lg font-semibold">
          🏆 Search Engine Optimization, Coursera
        </p>
        <p className="address text-lg font-semibold">
          🏆 Fundamentals of Digital Marketing, Google
        </p>
      </div>
    </motion.div>
  );
}

export default CertificationsPage;
