import { useEffect } from "react";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Tools } from "@/components/Tools";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { motion, useScroll, useSpring } from "framer-motion";

const Index = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    document.body.style.overflow = "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="relative">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-[0%] z-50"
        style={{ scaleX }}
      />
      <Hero />
      <About />
      <Tools />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;