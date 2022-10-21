import React from "react";
import { motion } from "framer-motion"

import star from "../assets/images/star.png"
import happyBirthDay from "../assets/images/hbd.png"
import picture from "../assets/images/ayang.png"

const Main = () => {
  return (
    <div className="main-container">
      <motion.div 
        className="content-wrapper"
        animate={{
          background: "rgba(0,0,0,0.5)"
        }}
        transition={{
          duration: 1,
          delay: 1.5
        }}
      >
        <div className="star-wrapper">
          <motion.img 
            src={star} 
            alt="star"
            className="star top-10 left-10"
            initial={{
              x: "-100vw",
              opacity: 0
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1
            }}
          />
          <motion.img 
            src={star} 
            alt="star"
            className="star top-20 left-32"
            initial={{
              x: "100vw",
              opacity: 0
            }}
            animate={{
              x: 0,
              opacity: 1
            }}
            transition={{
              duration: 1
            }}
          />
          <motion.img 
            src={star} 
            alt="star"
            className="star top-14 left-52"
            initial={{
              y: "-100vh",
              opacity: 0
            }}
            animate={{
              y: 0,
              opacity: 1
            }}
            transition={{
              duration: 1.5
            }}
          />
          <motion.img 
            src={star} 
            alt="star"
            className="star top-5 left-80"
            initial={{
              x: "100vw",
              opacity: 0
            }}
            animate={{
              x: 0,
              opacity: 1
            }}
            transition={{
              duration: 1.5
            }}
          />
          <motion.img 
            src={star} 
            alt="star"
            className="star top-40 left-20"
            initial={{
              x: "-100vw",
              opacity: 0
            }}
            animate={{
              x: 0,
              opacity: 1
            }}
            transition={{
              duration: 1.5
            }}
          />
          <motion.img 
            src={star} 
            alt="star"
            className="star top-32 left-64"
            initial={{
              y: "-100vh",
              opacity: 0
            }}
            animate={{
              y: 0,
              opacity: 1
            }}
            transition={{
              duration: 1.2
            }}
          />
          <motion.img 
            src={star} 
            alt="star"
            className="star top-52 left-80"
            initial={{
              x: "100vw",
              opacity: 0
            }}
            animate={{
              x: 0,
              opacity: 1
            }}
            transition={{
              duration: 1.2
            }}
          />
          <motion.img 
            src={star} 
            alt="star"
            className="star top-48 left-44"
            initial={{
              x: "100vw",
              opacity: 0
            }}
            animate={{
              x: 0,
              opacity: 1
            }}
            transition={{
              duration: 1.2
            }}
          /> 
          <motion.img 
            src={star} 
            alt="star"
            className="star top-64 left-1"
            initial={{
              x: "100vw",
              opacity: 0
            }}
            animate={{
              x: 0,
              opacity: 1
            }}
            transition={{
              duration: 1.2
            }}
          /> 
          <motion.img 
            src={star} 
            alt="star"
            className="star top-[480px] left-44"
            initial={{
              y: "100vh",
              opacity: 0
            }}
            animate={{
              y: 0,
              opacity: 1
            }}
            transition={{
              duration: 1.2
            }}
          /> 
          <motion.img 
            src={star} 
            alt="star"
            className="star top-[580px] left-16"
            initial={{
              x: "-100vw",
              opacity: 0
            }}
            animate={{
              x: 0,
              opacity: 1
            }}
            transition={{
              duration: 1.5
            }}
          /> 
          <motion.img 
            src={star} 
            alt="star"
            className="star top-[750px] left-16"
            initial={{
              x: "-100vw",
              opacity: 0
            }}
            animate={{
              x: 0,
              opacity: 1
            }}
            transition={{
              duration: 1.8
            }}
          /> 
          <motion.img 
            src={star} 
            alt="star"
            className="star top-[580px] left-72"
            initial={{
              x: "100vw",
              opacity: 0
            }}
            animate={{
              x: 0,
              opacity: 1
            }}
            transition={{
              duration: 1.5
            }}
          /> 
          <motion.img 
            src={star} 
            alt="star"
            className="star top-[750px] left-72"
            initial={{
              x: "-100vw",
              opacity: 0
            }}
            animate={{
              x: 0,
              opacity: 1
            }}
            transition={{
              duration: 1.8
            }}
          /> 
          
        </div>
        <div className="title-wrapper">
          <h1 className="title">19 October 2022</h1>
          <p className="subtitle">
            Twenty years ago was born a beautiful girl who i love the most,
            healthy wealthy my dear!
          </p>
        </div>
        <div className="image-wrapper">
          <motion.img 
            src={happyBirthDay} 
            alt="happy birthday!"
            className="happy-birthday"
            initial={{
              opacity: 0,
              scale: 0
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 0.8
            }}
          />
          <img 
            src={picture}
            alt="biyaaa"
            className="object-contain w-full"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Main;
