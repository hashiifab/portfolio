import { motion } from "framer-motion";
import { Command, Film, Layers, Scissors } from "lucide-react";

const tools = [
  {
    icon: <Film className="w-8 h-8" />,
    name: "Adobe Premiere Pro",
    description: "Professional video editing software",
  },
  {
    icon: <Layers className="w-8 h-8" />,
    name: "After Effects",
    description: "Motion graphics and visual effects",
  },
  {
    icon: <Command className="w-8 h-8" />,
    name: "DaVinci Resolve",
    description: "Color grading and correction",
  },
  {
    icon: <Scissors className="w-8 h-8" />,
    name: "Final Cut Pro",
    description: "Advanced video editing suite",
  },
];

export const Tools = () => {
  return (
    <section id="tools" className="section-container">
      <div className="text-center mb-16">
        <span className="text-primary font-medium">Tools & Skills</span>
        <h2 className="text-4xl font-display font-bold mt-2">
          Professional Stack
        </h2>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {tools.map((tool, index) => (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="tool-card"
          >
            <div className="text-primary mb-4">{tool.icon}</div>
            <h3 className="text-xl font-bold mb-2">{tool.name}</h3>
            <p className="text-secondary">{tool.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};