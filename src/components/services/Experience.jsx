import { motion, useReducedMotion } from "framer-motion";
import ExperienceCard from "../cards/ExperienceCard";
import experiences from "../../data/experiences";
import "./experience.scss";

const Experience = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="Experience"
      className="experience-section"
      aria-labelledby="experience-heading"
    >
      <div className="experience-shell">
        <motion.header
          className="experience-intro"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="experience-eyebrow">Career timeline</p>
            <h2 id="experience-heading">Work Experience</h2>
          </div>
          <p className="experience-summary">
            Building thoughtful products across web, mobile, payments, AI, and
            operations—from early architecture to production delivery.
          </p>
        </motion.header>

        <div className="experience-overview" aria-label="Experience overview">
          <span>
            <strong>{experiences.length}</strong> roles and engagements
          </span>
          <span>Web · Mobile · AI</span>
        </div>

        <div className="experience-timeline" role="list">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
