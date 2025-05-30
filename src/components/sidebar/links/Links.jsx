import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.3,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {

const items = [
"Home",
"About",
"Services",
"Portfolio",
// "Experience",
"Contact",
]

  return (
    <motion.div className="links" variants={variants}>
    {items.map((item) => (
      <motion.a
        href={`#${item}`}
        key={item}
        variants={itemVariants}
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 0.95 }}
      >
        {item}
      </motion.a>
    ))}
  </motion.div>
);
};

export default Links