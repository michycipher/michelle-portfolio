import "./app.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Parallex from "./components/parallex/Parallex";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Experience from "./components/services/Experience";
import PageLoader from "./components/loader/PageLoader";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import BackToTop from "./components/backToTop/BackToTop";

const App = () => {
  const [isLoading, setIsLoading] = useState(
    () => document.readyState !== "complete",
  );

  useEffect(() => {
    const finishLoading = () => setIsLoading(false);
    const fallbackTimer = window.setTimeout(finishLoading, 8000);

    if (document.readyState === "complete") {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading, { once: true });
    }

    return () => {
      window.clearTimeout(fallbackTimer);
      window.removeEventListener("load", finishLoading);
    };
  }, []);

  return (
    <>
      <AnimatePresence>{isLoading && <PageLoader />}</AnimatePresence>
      <Cursor />
      <Sidebar />
      <Navbar />
      <section id="Home" className="home-section">
        <Hero />
      </section>

      <section id="About">
        <About />
      </section>

      <section id="Services">
        <Parallex type="services" />
      </section>

      <section>
        <Services />
      </section>

      <section id="Portfolio">
        <Parallex type="Portfolio" />
      </section>

      <Portfolio />

      <Experience />

      <section id="Contact" className="contact-footer-wrapper">
        <Contact />
        <Footer />
      </section>
        <BackToTop />
    </>
  );
};

export default App;
