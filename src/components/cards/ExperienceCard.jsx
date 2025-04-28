import { motion } from "framer-motion";

const ExperienceCard = ({ title, company, startDate, endDate, description }) => {
  return (
    <motion.div 
    className="experience-card"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="experience-header">
        <h2>
          {title} - <span className="company">{company}</span>
        </h2>
        <p className="date">{startDate} to {endDate}</p>
      </div>
      <div className="experience-body">
        {/* <p>{description}</p> */}
      </div>
    </motion.div>
  );
};

export default ExperienceCard;