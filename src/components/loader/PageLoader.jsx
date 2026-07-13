import { motion } from "framer-motion";
import "./pageLoader.scss";

const PageLoader = () => {
  return (
    <motion.div
      className="page-loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
    >
      <div className="page-loader-content">
        <div className="page-loader-mark" aria-hidden="true">
          MU
        </div>
        <span className="page-loader-spinner" aria-hidden="true" />
        <p>Loading portfolio</p>
        <span>Please wait a moment while everything gets ready.</span>
      </div>
    </motion.div>
  );
};

export default PageLoader;
