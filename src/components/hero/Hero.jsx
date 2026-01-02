import "./hero.scss";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-620%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 100,
    },
  },
};

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "$ npm install frontend-beauty\n✔ Installing dependencies...\n✔ Build successful!";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setTypedText((prev) => prev + fullText[currentIndex]);
      currentIndex++;
      if (currentIndex === fullText.length) clearInterval(interval);
    }, 100); // typing speed
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          {/* <motion.h2 variants={textVariants}>Michelle Utomi</motion.h2> */}
          <motion.h1 variants={textVariants}>
           1 The <span> React Developer </span>For The Web
          </motion.h1>
          <motion.h2 variants={textVariants}>Creating high-quality web application with
            modern tools and best practices for exceptional user experiences.
          </motion.h2>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              <a href="#Portfolio">View Project</a>
            </motion.button>
            <motion.button variants={textVariants}><a href="#Contact">Contact Me</a></motion.button>
          </motion.div>

          <motion.div variants={textVariants} className="codeFrame"
            drag
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="terminalHeader">
            <span className="red"></span>
            <span className="yellow"></span>
            <span className="green"></span>
            </div>
            

            {/* <div style={{ marginTop: '20px' }}>
                  <p>$ npm install frontend-beauty</p>
                  <p>✔ Installing dependencies...</p>
                  <p>✔ Build successful!</p>
               </div> */}

            <pre className="terminal-output">{typedText}</pre>
          </motion.div>


          {/* Scrolling direction image Div */}
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="./images/scroll.png"
            alt="scroll button"
          />
        </motion.div>
      </div>

      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Building Interfaces • Telling Tech Stories
      </motion.div>

      {/* Profile / portfolio Image div */}
      {/* <div className="imageContainer">
        <img src="/hero.png" alt="a picture of michelle" />
      </div> */}
    </div>
  );
};

export default Hero;