import "./app.scss"
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallex from "./components/parallex/Parallex";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import About from "./components/about/About"
// import Experience from "./components/services/Experience";


const App = () => {
  return <>
    <Cursor />
    <section id="Home">
      <Navbar />
      <Hero />
    </section>

    <section id="About"><About /></section>

    <section id="Services"><Parallex type="services" /></section>

    <section ><Services /></section>

    <section id="Portfolio"><Parallex type="Portfolio" /></section>

    <Portfolio />

    {/* <section id="Experience"><Experience /></section> */}
    
    <section id="Contact"><Contact /></section>

  </>;
};

export default App;
