import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

const projects = [
  {
    title: "Urban Documentary",
    videoUrl: "https://www.youtube.com/embed/o95T2Yeh_1I?autoplay=1&mute=1&loop=1&playlist=o95T2Yeh_1I", // Video YouTube untuk landscape
    type: "landscape",
    category: "Documentary",
  },
  {
    title: "Fashion Campaign",
    videoUrl: "https://www.youtube.com/embed/loTvyRY1Ds4?autoplay=1&mute=1&loop=1&playlist=loTvyRY1Ds4", // Video YouTube Shorts untuk portrait
    type: "portrait",
    category: "Commercial",
  },
  {
    title: "Tech Showcase",
    videoUrl: "https://www.youtube.com/embed/o95T2Yeh_1I?autoplay=1&mute=1&loop=1&playlist=o95T2Yeh_1I", // Video YouTube untuk landscape
    type: "landscape",
    category: "Corporate",
  },
  {
    title: "Brand Story",
    videoUrl: "https://www.youtube.com/embed/loTvyRY1Ds4?autoplay=1&mute=1&loop=1&playlist=loTvyRY1Ds4", // Video YouTube Shorts untuk portrait
    type: "portrait",
    category: "Branding",
  },
  {
    title: "Product Launch",
    videoUrl: "https://www.youtube.com/embed/o95T2Yeh_1I?autoplay=1&mute=1&loop=1&playlist=o95T2Yeh_1I", // Video YouTube untuk landscape
    type: "landscape",
    category: "Commercial",
  },
  {
    title: "Music Video",
    videoUrl: "https://www.youtube.com/embed/loTvyRY1Ds4?autoplay=1&mute=1&loop=1&playlist=loTvyRY1Ds4", // Video YouTube Shorts untuk portrait
    type: "portrait",
    category: "Entertainment",
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
    <section id="projects" className="section-container overflow-hidden">
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
                className="flex-none w-[80vw] sm:w-[60vw] md:w-[45vw] lg:w-[30vw] aspect-video relative group"
              >
                <iframe
                  src={project.videoUrl}
                  allow="autoplay; fullscreen"
                  className="w-full h-full object-cover rounded-lg"
                  frameBorder="0"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                  <div className="text-center p-4">
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
                className="flex-none w-[60vw] sm:w-[45vw] md:w-[35vw] lg:w-[25vw] aspect-[9/16] relative group"
              >
                <iframe
                  src={project.videoUrl}
                  allow="autoplay; fullscreen"
                  className="w-full h-full object-cover rounded-lg"
                  frameBorder="0"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                  <div className="text-center p-4">
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
