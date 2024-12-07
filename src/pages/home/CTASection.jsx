import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import aboutImage from "/aboutImage.jpg";

const CTASection = () => {
  return (
    <section className="relative py-20 overflow-hidden mb-10">
      <div className="absolute inset-0 z-0">
        <img
          src={aboutImage}
          alt="CTA background"
          layout="fill"
          className="object-cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-primary-foreground">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6 text-primary-foreground"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl mb-8"
          >
            Let's work together to bring your vision to life.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a
              href="/contact"
              className="bg-primary text-primary-foreground py-3 px-8 rounded-full font-semibold text-lg hover:bg-primary/55 transition duration-300 inline-flex items-center group"
            >
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
