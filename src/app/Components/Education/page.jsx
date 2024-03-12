"use client"
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react'

function EducationPage() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const myFontStyle = {
        fontFamily: 'Saira Extra Condensed', // Font family name
        fontWeight: '700',
        fontSize: '4rem'
    };
    return (
        <>
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

                className='ml-80 mb-40 py-40' id="education"
                ref={ref}
            >
                <p className='title uppercase ' style={myFontStyle}>Education</p>
                <div className=' mt-10 grid sm:grid-cols-12 gap-24'>
                    <div className='col-span-8 text-lg font-bold uppercase'>
                        DES`s Navinchandra Mehta Institute of Technology and Development, Mumbai
                    </div>
                    <div className='col-span-4 text-lg font-medium'>
                        November 2022 - Pursuing
                    </div>
                </div>
                <p className='address text-lg mt-2 font-semibold'>MCA (Masters in computer Applications)</p>

                <div className=' mt-16 grid sm:grid-cols-12 gap-24'>
                    <div className='col-span-8 text-lg font-bold uppercase'>
                        SSBES`S Institute of technology and management, Nanded
                    </div>
                    <div className='col-span-4 text-lg font-medium'>
                        June 2019 - July 2022
                    </div>
                </div>
                <p className='address text-lg mt-2 font-semibold'>BCA (Bachelors in computer Applications)</p>
                <p className='address mt-2 text-lg font-medium'>CGPA - 9.69</p>

                {/* <div className=' mt-16 grid sm:grid-cols-12 gap-24'>
            <div className='col-span-8 text-lg font-bold uppercase'>
            Mahatma Phule High School , Balapur
            </div>
            <div className='col-span-4 text-lg font-medium'>
                June 2017 - March 2019
            </div>
        </div>
        <p className='address text-lg mt-2 font-semibold'>HSC </p>
        <p className='address mt-2 text-lg font-medium'>55%</p>

        <div className=' mt-16 grid sm:grid-cols-12 gap-24'>
            <div className='col-span-8 text-lg font-bold uppercase'>
            Mother teresa english high school, Balapur
            </div>
            <div className='col-span-4 text-lg font-medium'>
                April 2017
            </div>
        </div>
        <p className='address text-lg mt-2 font-semibold'>SSC </p>
        <p className='address mt-2 text-lg font-medium'>79%</p> */}


            </motion.div>


        </>
    )
}

export default EducationPage;
