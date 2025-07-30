import { useState, useEffect } from "react"
import Links from "./links/Links"
import "./sidebar.scss"
import Togglebutton from "./toggleButton/ToggleButtontemp"
import { motion } from "framer-motion"


const Sidebar = () => {
const [open, setOpen] = useState(false);

// Ensure the state is initialized correctly when the component mounts
useEffect(() => {
  setOpen(false); // Set initial state to closed or open based on your preference
}, []);


  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(25px at 50px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    }
  }

  return (
    <motion.div className='sidebar'
    animate={open ? "open" : "closed"} initial={false}
    >
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
        <Togglebutton setOpen={setOpen} />
    </motion.div>
  )
}

export default Sidebar