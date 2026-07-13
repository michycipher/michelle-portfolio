import "./footer.scss";
import { motion } from "framer-motion";

const lastUpdated = new Intl.DateTimeFormat("en-US", {
  month: "long",
  year: "numeric",
}).format(new Date(import.meta.env.VITE_BUILD_DATE));

const Footer = () => {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="footer-content">
        <div className="footer-left">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Michelle Utomi. All rights reserved.
          </p>
        </div>

        <div className="footer-right">
          <p className="last-updated">
            <span className="label">Last Updated:</span> {lastUpdated} &mdash;
            Actively maintained
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
