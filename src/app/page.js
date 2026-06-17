// components imports
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <TechStack />
      <Services />
      <Contact /> 
      <Footer />
    </div>
  );
};

export default page;
