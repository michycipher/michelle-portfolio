import { useRef } from "react";
import "./services.scss";
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
          <img src="/images/people.webp" alt="" />
          {/* <h1>
            <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
          </h1> */}
          <h1>
          <motion.b whileHover={{color:"orange"}}>Everthing Needed</motion.b> To Build
          </h1>
           
          
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>Great Product</motion.b> On The Web.
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Modern UI Design
          </h2>
          <p>
          {/* Creating beautiful, responsive interfaces that 
          look great on any device using the latest design
          trends. */}
         Designing sleek, responsive interfaces that look great on 
         any device using the latest UI trends.
          </p>
          {/* <button>Go</button> */}
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Clean Code</h2>
          <p>
          Writing maintainable, efficient code following best
          practices and modern development standards.
          </p>
          {/* <button>Go</button> */}
        </motion.div>
        
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Performance Optimization</h2>
          <p>
          Ensuring fast load times and smooth experiences through 
          efficient code and asset optimization.
          </p>
          {/* <button>Go</button> */}
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Responsive Development</h2>
          <p>
          Building web apps that work flawlessly across all screen 
          sizes from phones to large displays.
          </p>
          {/* <button>Go</button> */}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;