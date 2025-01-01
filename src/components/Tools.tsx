import { motion } from "framer-motion";
import { Command, Film, Layers, Scissors, Video, Camera, Palette, Settings } from "lucide-react";

const tools = [
  {
    icon: <Film className="w-8 h-8" />,
    name: "Adobe Premiere Pro",
    description: "Professional video editing",
  },
  {
    icon: <Layers className="w-8 h-8" />,
    name: "After Effects",
    description: "Motion graphics & VFX",
  },
  {
    icon: <Camera className="w-8 h-8" />,
    name: "DaVinci Resolve",
    description: "Color grading",
  },
  {
    icon: <Video className="w-8 h-8" />,
    name: "Final Cut Pro",
    description: "Video editing suite",
  },
  {
    icon: <Scissors className="w-8 h-8" />,
    name: "Adobe Audition",
    description: "Audio editing",
  },
  {
    icon: <Command className="w-8 h-8" />,
    name: "Cinema 4D",
    description: "3D animation",
  },
  {
    icon: <Palette className="w-8 h-8" />,
    name: "Photoshop",
    description: "Image editing",
  },
  {
    icon: <Settings className="w-8 h-8" />,
    name: "Media Encoder",
    description: "Video compression",
  },
];

export const Tools = () => {
  return (
    <section id="tools" className="section-container">
      <div className="text-center mb-16">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-primary font-medium"
        >
          Tools & Skills
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl font-display font-bold mt-2"
        >
          Professional Stack
        </motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
      >
        {tools.map((tool, index) => (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl transform group-hover:scale-105 transition-transform duration-300" />
            <div className="relative p-6 text-center">
              <div className="text-primary mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {tool.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{tool.name}</h3>
              <p className="text-sm text-muted-foreground">{tool.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};