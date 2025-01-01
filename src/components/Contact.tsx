import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center"
      >
        <span className="text-primary font-medium">Get in Touch</span>
        <h2 className="text-4xl font-display font-bold mt-2 mb-8">
          Let's Create Together
        </h2>
        <div className="space-y-6">
          <a
            href="mailto:contact@example.com"
            className="flex items-center justify-center space-x-3 text-lg hover:text-primary transition-colors"
          >
            <Mail className="w-6 h-6" />
            <span>contact@example.com</span>
          </a>
          <a
            href="tel:+1234567890"
            className="flex items-center justify-center space-x-3 text-lg hover:text-primary transition-colors"
          >
            <Phone className="w-6 h-6" />
            <span>+1 (234) 567-890</span>
          </a>
          <div className="flex items-center justify-center space-x-3 text-lg">
            <MapPin className="w-6 h-6" />
            <span>Los Angeles, CA</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};