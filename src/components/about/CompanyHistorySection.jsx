import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import useBorder from "../../hooks/useBorder";
import historyImage from "/history.jpg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.7,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const CompanyHistorySection = () => {
  const borderClass = useBorder();

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="text-center">
            <motion.div
              variants={itemVariants}
              whileHoverr={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className={`bg-primary/40 text-primary-foreground inline-block p-3 rounded-md ${borderClass} mb-4`}
            >
              <Clock className="w-6 h-6" />
            </motion.div>
            <motion.h2
              variants={itemVariants}
              className="text-primary-foreground text-4xl font-bold mb-4 "
            >
              OUR HISTORY
            </motion.h2>
          </div>
          <motion.div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-lg overflow-hidden"
            >
              <img
                src={historyImage}
                alt="Company History"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                style={{ transform: "scale(1.05)" }}
              />
            </motion.div>
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.5 }}
                className={`rounded-lg shadow-lg p-6 ${borderClass}`}
              >
                <p className="text-primaryText leading-relaxed">
                  Our journey began in 2013 in London's City of Westminster,
                  when the company was incorporated at Ingestre Place in Soho,
                  thriving on the area's creative energy. We subsequently moved
                  to Mayfair, one of the world's most affluent areas, where we
                  gained valuable insights into the luxury market and honed our
                  expertise in luxury branding.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className={`rounded-lg shadow-lg p-6 ${borderClass}`}
              >
                <p className="leading-relaxed">
                  Today, we are based in the historically rich and culturally
                  diverse city of Liverpool, whose UNESCO World Heritage-listed
                  waterfront and status as a European Capital of Culture in 2008
                  have given us a deep understanding of the local market and
                  culture. This unique perspective allows us to operate
                  effectively locally, throughout the United Kingdom, and
                  internationally.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyHistorySection;
