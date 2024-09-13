"use client";

import About from "@/components/About";
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

const HomePage = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Blogs />
      <Contact />
    </div>
  );
};

export default HomePage;
