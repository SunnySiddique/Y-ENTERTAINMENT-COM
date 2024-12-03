import { motion } from "framer-motion";
import { Users } from "lucide-react";

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const AboutPeopleSection = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="space-y-12">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              whileHover={{ rotate: 360, scale: 1.1, zoom: 1.1 }}
              transition={{
                duration: 0.4,
                type: "spring",
                stiffness: 100,
                damping: 12,
              }}
              className="inline-block p-3 rounded-full bg-teal-100 text-teal-600 mb-4"
            >
              <Users className="w-6 h-6" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.4,
                delay: 0.2,
                type: "spring",
                stiffness: 100,
                damping: 12,
              }}
              className="text-4xl font-bold mb-4 text-gray-800"
            >
              OUR PEOPLE
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.4,
                delay: 0.4,
                type: "spring",
                stiffness: 100,
                damping: 12,
              }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              At Y Entertainment, we adhere to the principles of diversity and
              inclusion and are guided by research that highlights the
              significant impact it has on fostering innovation, creativity, and
              success.
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-lg shadow-lg p-6"
              style={{
                borderWidth: "1px",
                borderColor: "hsl(240, 5.9%, 90%)",
              }}
            >
              <h3 className="text-xl font-semibold mb-4 text-teal-600">
                Diverse Team Building
              </h3>
              <p className="text-gray-700 leading-relaxed">
                In our efforts to build a highly competent and diverse team, we
                actively seek professionals from a wide range of backgrounds,
                cultures, ages, abilities, and experiences, and provide support
                and development opportunities for women in leadership positions.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white rounded-lg shadow-lg p-6"
              style={{
                borderWidth: "1px",
                borderColor: "hsl(240, 5.9%, 90%)",
              }}
            >
              <h3 className="text-xl font-semibold mb-4 text-teal-600">
                Industry Partnerships
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We also seek to stay at the forefront of industry advancements
                and research by forming partnerships with academia and
                organizations in various industries and leveraging the expertise
                of our scientific advisors.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white rounded-lg shadow-lg p-6"
              style={{
                borderWidth: "1px",
                borderColor: "hsl(240, 5.9%, 90%)",
              }}
            >
              <h3 className="text-xl font-semibold mb-4 text-teal-600">
                Talent Development
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our talent development approach, through apprenticeships and
                internships, brings us fresh ideas and unique perspectives while
                offering hands-on experience and training to young people
                entering the job market.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white rounded-lg shadow-lg p-6"
              style={{
                borderWidth: "1px",
                borderColor: "hsl(240, 5.9%, 90%)",
              }}
            >
              <h3 className="text-xl font-semibold mb-4 text-teal-600">
                Global Engagement
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our team-building efforts extend locally, nationally, and
                internationally, and we actively participate in various national
                and international government programmes.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPeopleSection;
