import "./portfolio.scss"
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState } from "react";


const items = [
  {
    id: 1,
    title: "InnoX",
    img: "/innox.png",
    desc: "InnoX Africa, an innovation platform designed for challenges, hackathons, and venture building across Africa. I developed a responsive, high-performance frontend that ensures seamless navigation, integrates powerful engines, and scales for future growth, all optimized to support innovators and organizations in creating and scaling solutions.",
    link: "https://www.innox.africa/",
  },
  {
    id: 2,
    title: "Akwa Ibom Tech week",
    img: "/AKTW.png",
    desc: "AKTW on InnoX Africa is a professional innovation platform offering tailored tools for collaboration and growth. Its responsive, high-performing design ensures seamless user experiences and intuitive workflows. Built for scalability, it supports professionals and organizations in driving impactful innovation.",
    link: "https://aktw.innox.africa/",
  },
  {
    id: 3,
    title: "Ubulu Africa",
    img: "/ubulu.png",
    desc: "Ubulu Africa is a digital innovation hub built with Next.js, React.js, and Tailwind CSS. It features a fast, responsive, and SEO-optimized frontend focused on performance and scalability. The platform empowers innovators and organizations to connect, collaborate, and scale solutions across Africa.",
  link: "https://ubulu.africa/",
  },
  // {
  //   id: 4,
  //   title: "Music App",
  //   img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  // },
  // {
  //   id: 5,
  //   title: "Music App",
  //   img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  // },
]

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref, 
    // offset:["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
// const y = useTransform(scrollYProgress, [0, 1], ["0%", "-300%"]); for the scrolling speed on the y axis

const handleClick = () => {
  window.open(item.link, "_blank"); 
};  

return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="michelle's projects" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button onClick={handleClick} >View More</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1 >Featured Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar bar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};


export default Portfolio;