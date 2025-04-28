import { FaAward, FaBriefcase } from "react-icons/fa";
// import { BiSupport } from "react-icons/bi";

const Info = () => {
  return (
    <div className="about_info grid">
      <div className="about_box">
        <FaAward />
        <h3 className="about_title">Experience</h3>
        <span className="about_subtitle">1.5 Years Working</span>
      </div>

      <div className="about_box">
        <FaBriefcase />
        <h3 className="about_title">Completed</h3>
        <span className="about_subtitle">3 projects</span>
      </div>

      {/* <div className="about_box">
        <BiSupport />
        <h3 className="about_title">Support</h3>
        <span className="about_subtitle">Online 24/7</span>
      </div> */}
    </div>

    
  )
}

export default Info