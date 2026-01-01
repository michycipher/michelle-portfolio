// import "./about.scss";
// import { motion } from "framer-motion";

// const stack = [
//   { title: "Frontend", items: ["React", "Next.js", "TypeScript", "Vue.js"] },
//   { title: "Backend", items: ["NodeJS", "Express", "Convex", "Supabase"] },
//   { title: "Styling", items: ["Tailwind", "SCSS", "Ant Design"] },
//   { title: "State", items: ["Redux Toolkit", "Context API"] },
//   { title: "Mobile", items: ["React Native", "Expo"] },
//   { title: "Workflow", items: ["Git", "Agile", "Scrum", "Component-driven"] },
// ];

// const About = () => {
//   return (
//     <section className="about">
//       <div className="about_grid">
//         {/* IMAGE */}
//         <div className="visual">
//           <div className="img" >
//             <img src="./mich.png" alt="michelle picture" className="about_img" />
//             </div>

//         </div>

//         {/* RIGHT SIDE */}
//         <div className="right">
//           {/* EXPERIENCE */}
//           <div className="experience">
//             <div className="exp_card">
//               <h4>Web Experience</h4>
//               <p>
//                 Built production dashboards, admin systems, sass apps and customer-facing
//                 apps using React, Next.js, and TypeScript.
//               </p>
//             </div>

//             <div className="exp_card accent">
//               <h4>Mobile Experience</h4>
//               <p>
//                 Developed cross-platform mobile apps with React Native & Expo,
//                 handling API integration, state, and performance.
//               </p>
//             </div>
//           </div>

//           {/* CAPABILITIES */}
//           <div className="capability_grid">
//             {stack.map((item) => (
//               <motion.div
//                 key={item.title}
//                 className="cap_card"
//                 whileHover={{ y: -4 }}
//               >
//                 <h5>{item.title}</h5>
//                 <span>{item.items.join(" • ")}</span>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

import { motion } from "framer-motion";
import "./about.scss";
import Info from "./Info";

const stack = [
  { title: "Frontend", items: ["React", "Next.js", "TypeScript", "Vue.js"] },
  { title: "Backend", items: ["NodeJS", "Express", "Convex", "Supabase"] },
  { title: "Styling", items: ["Tailwind", "SCSS", "Ant Design"] },
  { title: "State", items: ["Redux Toolkit", "Context API"] },
  { title: "Mobile", items: ["React Native", "Expo"] },
  { title: "Workflow", items: ["Git", "Agile", "Scrum", "Component-driven"] },
];

const About = () => {
  return (
    <section className="about">
      <div className="about_grid">
        {/* IMAGE */}
        <motion.div
          className="visual"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="img">
            <img
              src="./mich.png"
              alt="michelle picture"
              className="about_img"
            />
          </div>
          <Info />
        </motion.div>

        {/* RIGHT SIDE */}
        <div className="right">
          {/* DESCRIPTION */}
          <motion.div
            className="description"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>About Me</h3>
            <p>
              I&#39;m a Frontend Engineer with 3 years of experience building
              scalable, user-focused products using React-native, React, Next.js, and
              TypeScript. I&#39;ve spent the last few years working with Ubulu
              Africa, a leading digital innovation hub, where I helped design
              and ship production-grade interfaces that support startups,
              innovators, and ecosystem programs across Africa.
            </p>
            <p>
              My work includes contributing to InnoX, an open innovation
              operating system powering hackathons, pitch competitions, and
              accelerator programs; translating complex innovation workflows
              into clean, intuitive user experiences. I enjoy turning big ideas
              into reliable software, building systems that scale, and creating
              products that genuinely support people doing meaningful work.
            </p>
          </motion.div>

          {/* EXPERIENCE */}
          <motion.div
            className="experience"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="exp_card"
              whileHover={{
                y: -4,
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
              }}
              transition={{ duration: 0.3 }}
            >
              <h4>Web Experience</h4>
              <p>
                Built production dashboards, admin systems, Saas apps and
                customer-facing apps using React, Next.js, and TypeScript.
              </p>
            </motion.div>

            <motion.div
              className="exp_card accent"
              whileHover={{
                y: -4,
                boxShadow: "0 10px 30px var(--accent-glow)",
              }}
              transition={{ duration: 0.3 }}
            >
              <h4>Mobile Experience</h4>
              <p>
                Developed cross-platform mobile apps with React Native & Expo,
                handling API integration, state, and performance.
              </p>
            </motion.div>
          </motion.div>

          {/* CAPABILITIES */}
          <motion.div
            className="capability_grid"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {stack.map((item, index) => (
              <motion.div
                key={item.title}
                className="cap_card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.08 }}
                whileHover={{
                  y: -3,
                  boxShadow: "0 8px 24px var(--accent-glow)",
                }}
                viewport={{ once: true }}
              >
                <h5>{item.title}</h5>
                <span>{item.items.join(" • ")}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

// import "./about.scss"
// import Info from "./Info"
// import { motion } from "framer-motion";
// // import CV from "./michelle-resume.pdf"

// const variants = {
//   initial: {
//     x: -500,
//     y: 100,
//     opacity: 0,
//   },
//   animate: {
//     x: 0,
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 1,
//       staggerChildren: 0.1,
//     },
//   },
// };

// const About = () => {
//   return (
//     <motion.section
//       className="about"
//       variants={variants}
//       initial="initial"
//       animate="animate"
//       // animate={"animate"}
//     >
//       <div className="heading">
//       <motion.h2 className="section_title" variants={variants}>About Me</motion.h2>
//       <motion.span className="section_subtitle" variants={variants}>Turning ideas into clean, captivating interfaces.</motion.span>
//       </div>

//       <motion.div className="about_container container grid" variants={variants}>

//         <div className="wrapper">
//           <div className="portfolio_img"></div>
//         </div>
//         {/* <img src="./mich.png" alt="michelle picture" className="about_img" /> */}

//         <div className="about_data">
//           <Info />
//           <p className="about_description">
//             Hey there! I’m Michelle, a frontend developer who’s all about building beautiful,
//             functional web experiences that just make sense.
//             I bring designs to life using React, TypeScript, Tailwind CSS,
//             and a toolkit of modern web technologies. <br/>
//             My codes are clean, my layouts are responsive,
//             and my commitment? 100%. Whether I’m collaborating
//             on big ideas or fine-tuning tiny details, I show up with energy, clarity, and a deep passion for getting things right.
//             I’m a natural team player who loves solving problems, sharing ideas, and learning every step of the way.
//             Agile? I’m on it. Git?
//               Like second nature.<br/> When I’m not immersed in code, you’ll probably find me on X, exploring new tech trends, or unwinding with a good book or playlist.
//               Let’s create something meaningful — and have fun while we’re at it.
//           </p>
//           {/* <a download="" href={CV} className="button button--flex">Download CV <i>download logo</i></a> */}

//         </div>
//       </motion.div>

//     </motion.section>
//   )
// }

// export default About
