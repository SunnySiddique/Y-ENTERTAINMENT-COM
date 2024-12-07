import { motion } from "framer-motion";
import useBorder from "../../hooks/useBorder";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const CompanyOverviewSection = () => {
  const borderClass = useBorder();

  return (
    <section
      className={`max-w-6xl mx-auto py-20 px-4  shadow-lg ${borderClass} rounded-sm`}
    >
      <div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-primary-foreground text-4xl font-bold mb-8 "
          >
            COMPANY OVERVIEW
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-justify md:text-balance leading-relaxed max-w-3xl mx-auto "
          >
            Operationally, we are an entrepreneurial R&D deep tech venture,
            evolving as a lean, fully remote, international, and ethical
            business. Thriving on creativity, we iterated into our current state
            from a boutique marketing and PR company, incorporated in London in
            2013. Strategically, our focus is on facilitating digital
            transformation of creative and luxury industries, while our R&D
            activities concentrate on building Web 3.0 with a focus on
            artificial intelligence, alongside quantum computing and blockchain
            technology, particularly asset tokenization.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyOverviewSection;
