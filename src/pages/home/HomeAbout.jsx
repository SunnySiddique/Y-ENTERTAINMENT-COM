import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import aboutImage from "/aboutImage.jpg";

const HomeAbout = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <div className="relative">
              <img
                src={aboutImage}
                alt="Our company office"
                width={800}
                height={600}
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-700/20 rounded-lg"></div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:w-1/2 md:pl-12"
          >
            <h2 className="text-4xl font-bold mb-6">About Our Company</h2>
            <p className="text-gray-600 mb-6 text-lg">
              Founded in 2010, YourCompany has been at the forefront of digital
              innovation, helping businesses of all sizes navigate the
              complexities of the modern marketplace. Our passion for technology
              and commitment to client success drives everything we do.
            </p>
            <a
              href="/about"
              className="text-blue-600 font-semibold text-lg hover:underline flex items-center group"
            >
              Learn More
              <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
