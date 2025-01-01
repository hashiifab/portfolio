import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="about" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        <div>
          <span className="text-primary font-medium">About Me</span>
          <h2 className="text-4xl font-display font-bold mt-2 mb-6">
            Passionate about visual storytelling
          </h2>
          <p className="text-secondary text-lg leading-relaxed">
            With over 5 years of experience in video editing, I specialize in creating
            compelling visual narratives that captivate and engage audiences. My work
            spans from commercial projects to documentary storytelling.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative aspect-square rounded-lg overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
            alt="Video Editor at Work"
            className="object-cover w-full h-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};