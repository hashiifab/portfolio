import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

const projects = [
  {
    title: "Urban Documentary",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    type: "landscape",
    category: "Documentary",
  },
  {
    title: "Fashion Campaign",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    type: "portrait",
    category: "Commercial",
  },
  {
    title: "Tech Showcase",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    type: "landscape",
    category: "Corporate",
    likes: 987,
    comments: 45,
  },
  {
    title: "Brand Story",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    type: "portrait",
    category: "Branding",
    likes: 3456,
    comments: 234,
  },
  {
    title: "Product Launch",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    type: "landscape",
    category: "Commercial",
    likes: 1789,
    comments: 123,
  },
  {
    title: "Music Video",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    type: "portrait",
    category: "Entertainment",
    likes: 4567,
    comments: 345,
  },
];

const landscapeProjects = projects.filter(p => p.type === "landscape");
const portraitProjects = projects.filter(p => p.type === "portrait");

export const Projects = () => {
  const landscapeRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const landscapeScroll = setInterval(() => {
      if (landscapeRef.current) {
        if (landscapeRef.current.scrollLeft + landscapeRef.current.offsetWidth >= landscapeRef.current.scrollWidth) {
          landscapeRef.current.scrollLeft = 0;
        } else {
          landscapeRef.current.scrollLeft += 1;
        }
      }
    }, 20);

    const portraitScroll = setInterval(() => {
      if (portraitRef.current) {
        if (portraitRef.current.scrollLeft + portraitRef.current.offsetWidth >= portraitRef.current.scrollWidth) {
          portraitRef.current.scrollLeft = 0;
        } else {
          portraitRef.current.scrollLeft += 1;
        }
      }
    }, 20);

    return () => {
      clearInterval(landscapeScroll);
      clearInterval(portraitScroll);
    };
  }, []);

  return (
    <section id="projects" className="section-container">
      <div className="text-center mb-16">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-primary font-medium"
        >
          Featured Work
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl font-display font-bold mt-2"
        >
          Project Gallery
        </motion.h2>
      </div>

      <div className="space-y-12">
        <div>
          <h3 className="text-xl font-medium mb-6 text-muted-foreground">Landscape Projects</h3>
          <div 
            ref={landscapeRef}
            className="flex overflow-x-hidden space-x-4 pb-4"
          >
            {[...landscapeProjects, ...landscapeProjects].map((project, index) => (
              <motion.div
                key={`${project.title}-${index}`}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-none w-[600px] aspect-video relative group"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <span className="text-white/80 text-sm">{project.category}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-medium mb-6 text-muted-foreground">Portrait Projects</h3>
          <div 
            ref={portraitRef}
            className="flex overflow-x-hidden space-x-4 pb-4"
          >
            {[...portraitProjects, ...portraitProjects].map((project, index) => (
              <motion.div
                key={`${project.title}-${index}`}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-none w-[400px] aspect-[9/16] relative group"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <span className="text-white/80 text-sm">{project.category}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
