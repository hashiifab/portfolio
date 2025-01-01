import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Video background hanya untuk perangkat besar */}
      <motion.div 
        className="absolute inset-0 hidden sm:block" // Menyembunyikan video pada perangkat kecil
        style={{ zIndex: -1 }}
      >
        <iframe 
          src="https://www.youtube.com/embed/P54QwJt4dC8?autoplay=1&mute=1&loop=1&playlist=P54QwJt4dC8" 
          allow="autoplay; fullscreen" 
          className="w-full h-full"
          frameBorder="0"
        />
      </motion.div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-6xl md:text-8xl font-display font-bold mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-accent">
              I am
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent via-primary to-primary/80">
              a Video Editor
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12"
          >
            Hey, gue Faiz! Gue di sini buat bantuin lo bikin video yang keren dan bikin orang ketawa. Kalau lo punya ide gila, gue yang siap mewujudkan itu!
          </motion.p>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex gap-6 justify-center"
          >
            <a 
              href="#projects" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-medium transition-colors"
            >
              Lihat Proyek
            </a>
            <a 
              href="#contact" 
              className="bg-secondary hover:bg-secondary/80 text-secondary-foreground px-8 py-4 rounded-full font-medium transition-colors"
            >
              Hubungi Gue
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-8 h-8 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
