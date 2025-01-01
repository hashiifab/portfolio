import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="section-container relative z-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            Visual Storyteller
          </h1>
          <p className="text-xl md:text-2xl text-secondary max-w-2xl mx-auto">
            Crafting compelling narratives through the art of video editing
          </p>
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background pointer-events-none" />
    </motion.section>
  );
};