import "./footer.scss";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";


const Footer = () => {
  const [lastUpdated, setLastUpdated] = useState("");

  const repo = import.meta.env.VITE_GITHUB_REPO;
  const COMMITS_URL = `https://api.github.com/repos/${repo}/commits?per_page=1`;
  const BUILD_DATE = import.meta.env.VITE_BUILD_DATE;

  useEffect(() => {
    const cached = localStorage.getItem("lastUpdated");

    if (cached) {
      setLastUpdated(cached);
      return;
    }

    fetch(COMMITS_URL)
      .then((res) => res.json())
      .then((data) => {
        if (!data?.length) throw new Error("No commits");

        const date = new Date(data[0].commit.committer.date);
        const formatted = date.toLocaleDateString("en-US", {
          month: "long",
          year: "numeric",
        });

        setLastUpdated(formatted);
        localStorage.setItem("lastUpdated", formatted);
      })
      .catch(() => {
        const fallbackDate = BUILD_DATE
          ? new Date(BUILD_DATE).toLocaleDateString("en-US", {
              month: "long",
              year: "numeric",
            })
          : "Recently";

        setLastUpdated(fallbackDate);
        localStorage.setItem("lastUpdated", fallbackDate);
      });
  }, [COMMITS_URL, BUILD_DATE]);

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
            © {new Date().getFullYear()} Michelle Utomi. All rights reserved.
          </p>
        </div>

        <div className="footer-right">
          <p className="last-updated">
            <span className="label">Last Updated:</span> {lastUpdated} —
            Actively maintained
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
