import "./parallex.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { tools } from "../../data/tools";
import ToolChip from "./../ToolChip";

const Parallex = ({ type }) => {
  const ref = useRef();
  const [activeTool, setActiveTool] = useState(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="parallex" ref={ref}>
      <motion.div className="layer stars" />
      <motion.div
        className="layer planets"
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "services" ? "/planets.png" : "/sun.png"
          })`,
        }}
      />
      <motion.div className="layer mountains" />

      <div className="content">
        <motion.h1 style={{ y: yText }}>
          {type === "services" ? "Tools I Use" : "Projects"}
        </motion.h1>

        {type === "services" && (
          <div className="tools">
            {tools.map((tool, index) => (
              <ToolChip
                key={tool.id}
                tool={tool}
                isActive={activeTool === tool.id}
                onClick={(tool) =>setActiveTool (prev => (prev === tool.id ? null : tool.id)  )}
                  floatDelay={index * 0.9}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Parallex;
