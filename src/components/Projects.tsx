import { motion } from "framer-motion";

const projects = [
  {
    title: "Urban Documentary",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    type: "landscape",
    category: "Documentary",
    likes: 1234,
    comments: 89,
  },
  {
    title: "Fashion Campaign",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    type: "portrait",
    category: "Commercial",
    likes: 2567,
    comments: 156,
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

export const Projects = () => {
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
          className="text-4xl md:text-5xl font-display font-bold mt-2"
        >
          Project Gallery
        </motion.h2>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 md:gap-2 max-w-6xl mx-auto"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative aspect-square overflow-hidden bg-black/20"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
              <h3 className="text-xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <div className="flex items-center space-x-6 text-white">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                  </svg>
                  {project.likes.toLocaleString()}
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                  </svg>
                  {project.comments.toLocaleString()}
                </div>
              </div>
              <span className="mt-2 text-sm text-white/80">
                {project.category}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};