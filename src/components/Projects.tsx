import { motion } from "framer-motion";

const projects = [
  {
    title: "Urban Documentary",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    type: "landscape",
  },
  {
    title: "Fashion Campaign",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    type: "portrait",
  },
  {
    title: "Tech Showcase",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    type: "landscape",
  },
  {
    title: "Brand Story",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    type: "portrait",
  },
  {
    title: "Product Launch",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    type: "landscape",
  },
  {
    title: "Music Video",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    type: "portrait",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="section-container">
      <div className="text-center mb-16">
        <span className="text-primary font-medium">Featured Work</span>
        <h2 className="text-4xl font-display font-bold mt-2">
          Project Gallery
        </h2>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`project-card ${
              project.type === "portrait" ? "aspect-[9/16]" : "aspect-video"
            }`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};