import { motion, useReducedMotion } from "framer-motion";
import {
  FiArrowUpRight,
  FiBookOpen,
  FiBriefcase,
  FiGithub,
  FiMapPin,
} from "react-icons/fi";

const projectLinks = (project) => [
  project.liveLink && {
    href: project.liveLink,
    label: "View project",
    icon: FiArrowUpRight,
  },
  project.githubLink && {
    href: project.githubLink,
    label: "Source code",
    icon: FiGithub,
  },
  project.swaggerLink && {
    href: project.swaggerLink,
    label: "API docs",
    icon: FiBookOpen,
  },
].filter(Boolean);

const ExperienceCard = ({ experience, index, isLast }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      className={`experience-item${isLast ? " is-last" : ""}`}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 42 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.6, delay: Math.min(index * 0.05, 0.2) }}
      role="listitem"
    >
      <div className="experience-period">
        <span>{experience.startDate}</span>
        <span className="experience-period-line" aria-hidden="true" />
        <span>{experience.endDate}</span>
      </div>

      <div className="experience-track" aria-hidden="true">
        <motion.span
          className="experience-dot"
          initial={shouldReduceMotion ? false : { scale: 0 }}
          whileInView={shouldReduceMotion ? undefined : { scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        />
      </div>

      <div className="experience-card">
        <div className="experience-card-header">
          <div>
            <p className="experience-company">{experience.company}</p>
            <h3>{experience.title}</h3>
          </div>
          <span className="experience-type">{experience.type}</span>
        </div>

        <div className="experience-meta" aria-label="Role details">
          <span>
            <FiMapPin aria-hidden="true" />
            {experience.location}
          </span>
          <span>
            <FiBriefcase aria-hidden="true" />
            {experience.remote}
          </span>
        </div>

        <ul className="experience-highlights">
          {experience.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>

        <div className="experience-skills" aria-label="Technologies used">
          {experience.skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>

        {experience.projects.map((project) => {
          const links = projectLinks(project);

          return (
            <div className="experience-project" key={project.name}>
              <div className="experience-project-copy">
                <div className="experience-project-title">
                  <h4>{project.name}</h4>
                  <span>{project.status}</span>
                </div>
                <p>{project.description}</p>
              </div>

              {links.length > 0 && (
                <div className="experience-project-links">
                  {links.map(({ href, label, icon: Icon }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                      whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                      aria-label={`${label}: ${project.name}`}
                    >
                      {label}
                      <Icon aria-hidden="true" />
                    </motion.a>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </motion.article>
  );
};

export default ExperienceCard;
