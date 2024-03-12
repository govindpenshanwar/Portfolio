"use client";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";


function Skills() {
    const myFontStyle = {
        fontFamily: "Saira Extra Condensed", // Font family name
        fontWeight: "700",
        fontSize: "4rem",
    };
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    return (
        <>
            <motion.div
                className="ml-80 mt-10 py-40 mb-40  "
                id="skills"
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
            >
                <p className="uppercase title -mt-10" style={myFontStyle}>
                    Skills
                </p>
                <div
                    className="flex flex-row justify-around mt-10 -ml-20 "
                >


                    <div className="w-60 text-center shadow-xl rounded">
                        <p className="p-3 font-bold text-zinc-900 text-2xl ">Frontend</p>
                        <ul className="flex flex-col gap-6 cursor-pointer">
                            <li className="address text-lg font-semibold hover:text-zinc-600 transition-all">
                                HTML
                            </li>
                            <li className="address text-lg font-semibold hover:text-zinc-600 transition-all">
                                CSS
                            </li>
                            <li className="address text-lg font-semibold hover:text-zinc-600 transition-all">
                                Javascript
                            </li>
                            <li className="address text-lg font-semibold hover:text-zinc-600 transition-all">
                                Next.js
                            </li>
                            <li className="address text-lg font-semibold hover:text-zinc-600 transition-all">
                                React.js
                            </li>
                            <li className="address text-lg font-semibold hover:text-zinc-600 transition-all mb-3">
                                Tailwind CSS
                            </li>
                            <li className="address text-lg font-semibold hover:text-zinc-600 transition-all mb-3">
                                Material-UI
                            </li>
                            <li className="address text-lg font-semibold hover:text-zinc-600 transition-all mb-3">
                                Bootstrap
                            </li>
                        </ul>
                    </div>

                    <div className="w-60   text-center shadow-xl rounded ">
                        <p className="p-3 font-bold text-zinc-900 text-2xl">Backend</p>
                        <ul className="flex flex-col gap-6 cursor-pointer">
                            <li className="address text-lg  font-semibold hover:text-zinc-600 transition-all">
                                Node.js
                            </li>
                            <li className="address text-lg font-semibold hover:text-zinc-600 transition-all">
                                Express.js
                            </li>
                            <li className="address text-lg font-semibold hover:text-zinc-600 transition-all">
                                JsonWebTokens
                            </li>
                            <li className="address text-lg font-semibold hover:text-zinc-600 transition-all">
                                REST API`s
                            </li>
                            <li className="address text-lg font-semibold hover:text-zinc-600 transition-all ">
                                Next Auth
                            </li>
                        </ul>
                    </div>

                    <div className="w-60 text-center  shadow-xl rounded ">
                        <p className="p-3 font-bold text-zinc-900 text-2xl">Databases</p>
                        <ul className="flex flex-col gap-6 cursor-pointer">
                            <li className="address text-lg font-semibold hover:text-zinc-600 transition-all">
                                MongoDB
                            </li>
                            <li className="address text-lg font-semibold hover:text-zinc-600 transition-all">
                                Postgre SQL
                            </li>
                            <li className="address text-lg font-semibold hover:text-zinc-600 transition-all">
                                MY SQL
                            </li>
                        </ul>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default Skills;
