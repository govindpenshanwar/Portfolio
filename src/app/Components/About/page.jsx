"use client";
import React, { useRef } from "react";
import "../../font.css"; // Import the CSS file where font is defined
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import Tooltip from '@mui/material/Tooltip'
import { motion, useInView } from 'framer-motion'
import Link from "next/link";
import { Instagram } from "@mui/icons-material";

function About() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const myFontStyle = {
        fontFamily: "Saira Extra Condensed", // Font family name
        fontWeight: "700",
        fontSize: "5rem",
    };
    const myFontStyle2 = {
        fontFamily: "Saira Extra Condensed", // Font family name
        fontSize: "1.35rem",
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: -150 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -150 }}
            transition={{
                delay: 0.4,
                duration: 0.3,
                ease: "linear",
                stiffness: 170,
                type: "spring"
            }}
            ref={ref}
            className=" ml-80 mt-36  py-32"
            id="about"
        >
            <h1
                className="title text-xl uppercase text-left"
                style={myFontStyle}
            >
                Govindraj
                <span className="subTitle ml-3">Penshanwar</span>
            </h1>

            <div
                className="address ml-1 mt-6 text-left "
                style={myFontStyle2}
            >
                SURESH NAGAR, ANDHERI(W) - MUMBAI, 9049846234 -
                <span className="subTitle "> govindpenshanwar32@gmail.com</span>
            </div>

            <div className="address text-left  text-lg mt-20 w-5/6 mb-5">
                <p>
                    Iam a Full Stack Developer with expertise in Next.js, React.js,
                    MongoDB, Express.js, and Node.js. Seeking a Full Stack role to
                    contribute technical skills and deliver high-impact, scalable web
                    solutions.
                </p>
            </div>

            <div className="flex mt-16 mb-56">
                <ul
                    className="flex flex-row gap-8"
                >
                    <a href="./Resume.pdf" download={"Resume"}>
                        <motion.li
                            whileHover={{ scale: 1.2 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            className=" cursor-pointer">
                            <Tooltip title="Download Resume">
                                <SaveAltIcon style={{ fontSize: "3rem" }} />
                            </Tooltip>
                        </motion.li>
                    </a>
                    <motion.li
                        className="cursor-pointer"
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        <Link href="https://www.instagram.com/iam_govind18">
                            <Tooltip title="Instagram">
                                <Instagram style={{ fontSize: "3rem" }} />
                            </Tooltip>
                        </Link>
                    </motion.li>

                    <motion.li
                        className=" cursor-pointer "
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        <Tooltip title="Twitter">
                            <TwitterIcon style={{ fontSize: "3rem" }} />
                        </Tooltip>
                    </motion.li>

                    <motion.li
                        className=" cursor-pointer"
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        <Link href="https://www.linkedin.com/in/govindraj-penshanwar-b2753b221/">
                            <Tooltip title="Linkedin">
                                <LinkedInIcon style={{ fontSize: "3rem" }} />
                            </Tooltip>
                        </Link>
                    </motion.li>

                    <motion.li
                        className=" cursor-pointer"
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        <Link href="https://github.com/govindpenshanwar">
                            <Tooltip title="Github">
                                <GitHubIcon style={{ fontSize: "3rem" }} />
                            </Tooltip>
                        </Link>

                    </motion.li>

                </ul>
            </div>
        </motion.div>
    );
}

export default About;
