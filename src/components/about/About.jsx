import "./about.scss"
import Info from "./Info"
import { motion } from "framer-motion";
// import CV from "./michelle-resume.pdf"

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const About = () => {
  return (
    <motion.section
      className="about"
      variants={variants}
      initial="initial"
      animate="animate"
      // animate={"animate"}
    >
      <div className="heading">
      <motion.h2 className="section_title" variants={variants}>About Me</motion.h2>
      <motion.span className="section_subtitle" variants={variants}>Turning ideas into clean, captivating interfaces.</motion.span>
      </div>

      <motion.div className="about_container container grid" variants={variants}>

        <div className="wrapper">
          <div className="portfolio_img"></div>
        </div>
        {/* <img src="./mich.png" alt="michelle picture" className="about_img" /> */}

        <div className="about_data">
          <Info />
          <p className="about_description">
            Hey there! I’m Michelle, a frontend developer who’s all about building beautiful,
            functional web experiences that just make sense.
            I bring designs to life using React, TypeScript, Tailwind CSS,
            and a toolkit of modern web technologies. <br/>
            My codes are clean, my layouts are responsive,
            and my commitment? 100%. Whether I’m collaborating
            on big ideas or fine-tuning tiny details, I show up with energy, clarity, and a deep passion for getting things right.
            I’m a natural team player who loves solving problems, sharing ideas, and learning every step of the way.
            Agile? I’m on it. Git? 
              Like second nature.<br/> When I’m not immersed in code, you’ll probably find me on X, exploring new tech trends, or unwinding with a good book or playlist.
              Let’s create something meaningful — and have fun while we’re at it.
          </p>
          {/* <a download="" href={CV} className="button button--flex">Download CV <i>download logo</i></a> */}

        </div>
      </motion.div>

    </motion.section>
  )
}

export default About