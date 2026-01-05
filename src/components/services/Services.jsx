import { useRef } from "react";
import "./Services.scss";
import { motion, useInView } from "framer-motion";

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

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="./images/people.webp" alt="" />
          {/* <h1>
            <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
          </h1> */}
          <h1>
            <motion.b
              className="title-emphasis"
              style={{ fontWeight: "500" }}
              whileHover={{ color: "orange" }}
            >
              Everthing Needed
            </motion.b>{" "}
            To Build
          </h1>
        </div>
        <div className="title">
          <h1>

          <motion.b
            className="title-emphasis"
            style={{  fontWeight: "500" }}
            whileHover={{ color: "orange" }}
          >
              Great Product
            </motion.b>{" "}
            On The Web and Mobile.
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          // whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Component Architecture & Design Systems</h2>
          <p>
            Building reusable component libraries with styled-components,
            Tailwind CSS, and Storybook. Creating consistent, scalable design
            systems from scratch.
          </p>
        </motion.div>

        <motion.div
          className="box"
          // whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Version Control & Collaboration</h2>
          <p>
            Managing complex codebases with Git workflows, pull requests, and
            code reviews. Collaborating efficiently in Agile teams using modern
            DevOps practices.
          </p>
        </motion.div>

        <motion.div
          className="box"
          // whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>API Integration</h2>
          <p>
            Seamlessly connecting your frontend to powerful backends through
            RESTful APIs, Context API and real-time data synchronization for
            dynamic user experiences.
          </p>
          {/* <button>Go</button> */}
        </motion.div>
        <motion.div
          className="box"
          // whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Performance Optimization & Web Vitals</h2>
          <p>
            Boosting app performance with code splitting, lazy loading, and
            React optimization techniques. Achieving perfect Lighthouse scores
            and lightning-fast Core Web Vitals.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;