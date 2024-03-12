"use client"
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react'

function Intrests() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const myFontStyle = {
    fontFamily: 'Saira Extra Condensed', // Font family name
    fontWeight: '700',
    fontSize: '4rem'
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
      className='ml-80 mb-40 py-40'
      id='intrests'
    >
      <p className='title uppercase' style={myFontStyle}>Interests</p>
      <div className='mt-16 space-y-6 w-5/6'>
        <p className='address text-lg font-sans font-normal text-pretty'>
          {/* Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, I am an avid skiier and novice ice climber. During the warmer months here in Colorado, I enjoy mountain biking, free climbing, and kayaking. */}
          🎯 Continuous Learning
          I am passionate about lifelong learning and constantly seek opportunities to expand my knowledge and skills. Whether it's delving into the latest technological innovations, mastering a new programming language, or exploring interdisciplinary subjects, I am committed to staying informed and adaptable in an ever-evolving landscape.
        </p>
        <p className='address font-sans text-lg font-normal text-pretty '>
          {/* When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technolgy advancements in the front-end web development world. */}
          🌍 Travel and Adventure
          Exploring new places and immersing myself in different cultures is a passion of mine. I've had the opportunity to trek through the lush jungles of Costa Rica, wander the historic streets of Rome, and marvel at the breathtaking landscapes of Iceland. Traveling not only broadens my horizons but also fuels my sense of adventure and curiosity.
        </p>
      </div>
    </motion.div>
  )
}

export default Intrests
