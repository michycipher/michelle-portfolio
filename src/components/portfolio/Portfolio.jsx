import "./portfolio.scss";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

import { items } from "../../data/projects";

const Single = ({ item }) => {
  const shouldReduceMotion = useReducedMotion();
  const [imageState, setImageState] = useState("loading");

  return (
    <motion.article
      className="portfolio-item"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container">
        <div className="wrapper">
          <div
            className={`imageContainer image-${imageState}`}
            aria-busy={imageState === "loading"}
          >
            {imageState !== "loaded" && (
              <div
                className="project-image-loader"
                role={imageState === "loading" ? "status" : "alert"}
              >
                {imageState === "loading" ? (
                  <>
                    <span className="project-loader-spinner" aria-hidden="true" />
                    <span>Loading project preview...</span>
                  </>
                ) : (
                  <span>Preview unavailable</span>
                )}
              </div>
            )}
            <img
              src={item.img}
              className="projectImage"
              alt={`${item.title} project preview`}
              loading="lazy"
              onLoad={() => setImageState("loaded")}
              onError={() => setImageState("error")}
            />
          </div>

          <div className="textContainer">
            <h2>{item.title}</h2>
            <p>{item.desc}</p>

            <div className="tools" aria-label={`${item.title} technologies`}>
              {item.tools.map((tool) => (
                <span className="tool-chip" key={tool}>
                  {tool}
                </span>
              ))}
            </div>

            <motion.a
              className="view-more"
              href={item.link}
              target="_blank"
              rel="noreferrer"
              whileHover={shouldReduceMotion ? undefined : { y: -2 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              aria-label={`View ${item.title}`}
            >
              View More
            </motion.a>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = items.filter(
    (item) => activeCategory === "all" || item.category === activeCategory,
  );

  return (
    <div className="portfolio">
      <header className="progress">
        <h1>Featured Projects</h1>
        <div className="progressBar bar" aria-hidden="true" />
        <p className="subtitle">
          A selection of my recent work across web and mobile platforms,
          showcasing my skills in frontend development, React Native, and
          creating exceptional user experiences.
        </p>

        <div className="filters" aria-label="Filter projects by platform">
          {["all", "web", "mobile"].map((type) => (
            <button
              key={type}
              type="button"
              className={activeCategory === type ? "active" : ""}
              aria-pressed={activeCategory === type}
              onClick={() => setActiveCategory(type)}
            >
              {type.toUpperCase()}
            </button>
          ))}
        </div>
      </header>

      <div className="projects-list">
        {filteredItems.map((item) => (
          <Single item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
