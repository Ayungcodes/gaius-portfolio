// components imports
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Services from "./components/Services";
import Contact from "./components/Contact";

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
    </div>
  );
};

export default page;
