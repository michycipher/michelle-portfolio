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
                onClick={setActiveTool}
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

// import "./parallex.scss";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

// const tools = [
//   "TypeScript",
//   "React",
//   "Next.js",
//   "SCSS",
//   "Framer Motion",
//   "REST APIs",
//   "Git",
// ];

// const Parallex = ({ type }) => {
//   const ref = useRef();

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end start"],
//   });

//   const yText = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);
//   const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

//   return (
//     <div className="parallex" ref={ref}>
//       {/* Title */}
//       <motion.h1 style={{ y: yText }}>
//         {type === "services" ? "Tools I Master" : "Projects"}
//       </motion.h1>

//       {/* Floating Tools */}
//       {type === "services" && (
//         <motion.div
//           className="tools"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.2 }}
//         >
//           {tools.map((tool, index) => (
//             <motion.div
//               key={tool}
//               className="tool"
//               whileHover={{ scale: 1.1 }}
//               animate={{
//                 y: [0, -10, 0],
//               }}
//               transition={{
//                 duration: 3,
//                 repeat: Infinity,
//                 delay: index * 0.2,
//               }}
//             >
//               {tool}
//             </motion.div>
//           ))}
//         </motion.div>
//       )}

//       {/* Layers */}
//       <motion.div className="mountains" />
//       <motion.div
//         className="planets"
//         style={{
//           y: yBg,
//           backgroundImage: `url(${
//             type === "services" ? "/planets.png" : "/sun.png"
//           })`,
//         }}
//       />
//       <motion.div className="stars" style={{ x: yBg }} />
//     </div>
//   );
// };

// export default Parallex;
