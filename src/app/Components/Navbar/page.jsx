"use client";
import Image from "next/image";
import React, { useRef } from "react";
import gp from "@public/gp.png";
import { Link } from "react-scroll";
import { scroller } from "react-scroll";
import { useRouter } from "next/navigation";
import { motion, useInView } from "framer-motion";

function Navbar() {
  const router = useRouter();
  const ref = useRef(null)
  const scrollToComponent = (componentId) => {
    scroller.scrollTo(componentId, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div className="sideNav w-64 h-lvh flex fixed flex-col p-10 text-center top-0 left-0">
      <motion.span
        initial={{ opacity: 0, x: -150 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.2,
          duration: 0.3,
          ease: "linear",
          stiffness: 170,
          type: "spring"
        }}
        className="p-4 mb-7 mt-40">
        <Image
          className="img-bdr rounded-full"
          src={gp}
          width={170}
          alt="Logo"
        />
      </motion.span>

      <motion.ul
        className=" flex flex-col gap-4 text-center font-semibold text-lg font-sans uppercase"
        initial={{ opacity: 0, x: -150 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.3,
          ease: "linear",
          stiffness: 170,
          type: "spring"
        }}
      >
        <motion.li
          className="navlink hover:text-zinc-100 text-base  cursor-pointer"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link
            activeClass="active-white"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}

          >
            About
          </Link>
        </motion.li>

        <motion.li
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="navlink text-base  hover:text-zinc-100 cursor-pointer">
          <Link
            activeClass="active-white"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Projects
          </Link>
        </motion.li>

        <motion.li
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="navlink text-base hover:text-zinc-100  cursor-pointer">
          <Link
            activeClass="active-white"
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Skills
          </Link>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="navlink text-base hover:text-zinc-100  cursor-pointer">
          <Link
            activeClass="active-white"
            to="education"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Education
          </Link>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="navlink text-base hover:text-zinc-100  cursor-pointer">
          <Link
            activeClass="active-white"
            to="certifications"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Certifications
          </Link>
        </motion.li>

        <motion.li
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="navlink text-base hover:text-zinc-100  cursor-pointer">
          <Link
            activeClass="active-white"
            to="intrests"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Interests
          </Link>
        </motion.li>
      </motion.ul>
    </div>
  );
}

export default Navbar;
