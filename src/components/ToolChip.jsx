import { motion } from "framer-motion";

const floatVariant = {
  animate: {
    y: [0, -8, 0],
    x: [0, 4, 0],
    transition: {
      duration: 6,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const ToolChip = ({ tool, isActive, onClick }) => {
  const Icon = tool.icon;
  return (
    <motion.button
      variants={floatVariant}
      animate="animate"
      className={`tool ${isActive ? "active" : ""}`}
      onClick={() => onClick(tool)}
      aria-label={`Filter by ${tool.name}`}
      aria-pressed={isActive}
      whileHover={{ y: -6, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon className="tool-icon" style={{ color: tool.color }} aria-hidden />
      <span aria-hidden> {tool.name}</span>
    </motion.button>
  );
};

export default ToolChip;
