import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./Hero.scss";

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
  const fullText =
    "$ npm install frontend-excellence\n✔ Web app scaffolded...\n✔ Mobile app configured...\n✔ Ready to ship cross-platform!";

useEffect(() => {
  let currentIndex = 0;
  
  const typeNextCharacter = () => {
    if (currentIndex < fullText.length) {
      setTypedText(fullText.substring(0, currentIndex + 1));
      currentIndex++;
    }
  };
  
  const interval = setInterval(typeNextCharacter, 80);
  
  return () => clearInterval(interval);
}, [fullText]);

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h1 variants={textVariants}>
            Crafting <span>Mobile & Web</span> Applications That Scale
          </motion.h1>

          <motion.h2 variants={textVariants}>
            Engineering seamless mobile & web applications through React
            ecosystems and modern JS stacks. Obsessed with speed and user
            delight.
          </motion.h2>

          <motion.div variants={textVariants} className="buttons">
            <motion.button
              variants={textVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="#Portfolio">View Projects</a>
            </motion.button>
            <motion.button
              variants={textVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="#Contact">Lets Connect</a>
            </motion.button>
          </motion.div>

          <motion.div
            variants={textVariants}
            className="codeFrame"
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
            <pre className="terminal-output">{typedText}</pre>
          </motion.div>

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
        React • React Native • TypeScript • Next.js • Building Digital
        Experiences
      </motion.div>
    </div>
  );
};

export default Hero;
