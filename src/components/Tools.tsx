import { motion } from "framer-motion";
import { Command, Film, Layers, Scissors, Video, Camera, Palette, Settings } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const tools = [
  {
    icon: <Film className="w-8 h-8" />,
    name: "Adobe Premiere Pro",
    description: "Professional video editing",
    expertise: "Advanced",
  },
  {
    icon: <Layers className="w-8 h-8" />,
    name: "After Effects",
    description: "Motion graphics & VFX",
    expertise: "Intermediate",
  },
  {
    icon: <Camera className="w-8 h-8" />,
    name: "DaVinci Resolve",
    description: "Color grading",
    expertise: "Expert",
  },
  {
    icon: <Video className="w-8 h-8" />,
    name: "Final Cut Pro",
    description: "Video editing suite",
    expertise: "Advanced",
  },
  {
    icon: <Scissors className="w-8 h-8" />,
    name: "Adobe Audition",
    description: "Audio editing",
    expertise: "Intermediate",
  },
  {
    icon: <Command className="w-8 h-8" />,
    name: "Cinema 4D",
    description: "3D animation",
    expertise: "Intermediate",
  },
  {
    icon: <Palette className="w-8 h-8" />,
    name: "Photoshop",
    description: "Image editing",
    expertise: "Advanced",
  },
  {
    icon: <Settings className="w-8 h-8" />,
    name: "Media Encoder",
    description: "Video compression",
    expertise: "Expert",
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
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-8 max-w-6xl mx-auto"
      >
        {tools.map((tool, index) => (
          <TooltipProvider key={tool.name}>
            <Tooltip>
              <TooltipTrigger asChild>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative flex items-center justify-center"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full transform group-hover:scale-110 transition-transform duration-300" />
                  <div className="relative p-6 text-center">
                    <div className="text-primary transform group-hover:scale-110 transition-all duration-300">
                      {tool.icon}
                    </div>
                  </div>
                </motion.div>
              </TooltipTrigger>
              <TooltipContent className="bg-background/95 backdrop-blur-sm border-primary/20">
                <div className="text-center p-2">
                  <h3 className="font-bold text-sm mb-1">{tool.name}</h3>
                  <p className="text-xs text-muted-foreground mb-1">{tool.description}</p>
                  <span className="text-xs text-primary">{tool.expertise}</span>
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </motion.div>
    </section>
  );
};