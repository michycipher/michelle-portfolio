import "./portfolio.scss";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { items } from "../../data/projects";

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset:["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  // const y = useTransform(scrollYProgress, [0, 1], ["0%", "-300%"]); for the scrolling speed on the y axis

  const handleClick = () => {
    window.open(item.link, "_blank");
  };

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} className="projectImage" alt="michelle's projects" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>

            <div className="tools">
              {item.tools.map((tool) => (
                <span className="tool-chip" key={tool}>
                  {tool}
                </span>
              ))}
            </div>
            <button onClick={handleClick}>View More</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const [activeCategory, setActiveCategory] = useState("all");

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => setShowHint(true), 3000);
    const hideTimer = setTimeout(() => setShowHint(false), 6000);

    const onScroll = () => setShowHint(false);
    window.addEventListener("scroll", onScroll, { once: true });

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar bar"></motion.div>
        <p className="subtitle">
        A selection of my recent work across web and mobile platforms, showcasing my skills in frontend development,
          React Native, and creating exceptional user experiences.
        </p>

        <div className="filters">
          {["all", "web", "mobile"].map((type) => (
            <button
              key={type}
              className={activeCategory === type ? "active" : ""}
              onClick={() => setActiveCategory(type)}
            >
              {type.toUpperCase()}
            </button>
          ))}
        </div>

        <motion.div
          // className="filterHint"
          initial={{ opacity: 0 }}
          animate={{ opacity: showHint ? 1 : 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="filterLabel">Filter by tech</p>
        </motion.div>
      </div>

      {items
        .filter(
          (item) => activeCategory === "all" || item.category === activeCategory
        )
        .map((item) => (
          <Single item={item} key={item.id} />
        ))}
    </div>
  );
};

export default Portfolio;