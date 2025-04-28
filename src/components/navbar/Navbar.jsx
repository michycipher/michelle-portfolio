import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import { motion } from "framer-motion"

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />

      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          Michelle
        </motion.span>

        <motion.div className="social"
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <a href="https://github.com/michycipher" target="_blank" rel="noopener noreferrer"><img src="/github-mark-white.png" alt="github link" /></a>
          <a href="https://www.linkedin.com/in/michelle-utomi-9827981b4/"><img src="/linkedin.png" alt="linkedin link" /></a>
          {/* <a href="#"><img src="/youtube.png" alt="x link" /></a> */}
        </motion.div>
      </div>
    </div>
  )
}
export default Navbar