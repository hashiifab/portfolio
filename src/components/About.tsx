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
          <span className="text-primary font-medium">Tentang Gue</span>
          <h2 className="text-4xl font-display font-bold mt-2 mb-6">
            Gue sih cuma orang yang suka edit video, nggak ada yang spesial kok
          </h2>
          <p className="text-secondary text-lg leading-relaxed">
            Jadi gini, gue tuh udah jadi video editor selama beberapa tahun. Gue suka
            banget mainin footage, nambahin efek-efek keren, dan bikin video yang awalnya
            biasa aja jadi keliatan WOW! Ada banyak banget momen lucu dan gila yang
            terjadi di proses editing, tapi ya gitu deh, kadang bikin video yang dulu
            lucu malah jadi bikin bingung. Pokoknya, edit video itu kayak main puzzle,
            cuma bedanya banyak kopinya dan nggak ada aturan mainnya!
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
            src="https://cdn.idntimes.com/content-images/duniaku/post/20210309/143419247-171035831465109-1090797978136924746-o-736964e580d88d940c9a0a5da519b173.jpg"
            alt="Video Editor at Work"
            className="object-cover w-full h-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
