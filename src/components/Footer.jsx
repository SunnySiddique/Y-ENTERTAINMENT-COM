import { motion } from "framer-motion";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <footer className="bg-[#001F2D] text-white py-12 px-4 md:px-6 lg:px-8">
      <motion.div
        className="container mx-auto max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          {/* Logo */}
          <motion.div className="md:col-span-2" variants={itemVariants}>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg"></div>
              <span className="text-2xl font-bold">Logo</span>
            </div>
          </motion.div>

          {/* Categories */}
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-gray-400">
              {[
                "All",
                "Trending",
                "Art",
                "Photography",
                "Video",
                "Music",
                "Sport",
                "Utilities",
              ].map((item) => (
                <motion.li
                  key={item}
                  className="hover:text-white cursor-pointer"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              {[
                "Blog",
                "User guides",
                "Webinars",
                "Help Center",
                "Platform Status",
                "Partners",
                "Taxes",
              ].map((item) => (
                <motion.li
                  key={item}
                  className="hover:text-white cursor-pointer"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              {["About", "Join us"].map((item) => (
                <motion.li
                  key={item}
                  className="hover:text-white cursor-pointer"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Stay in the loop */}
          <motion.div className="lg:col-span-4" variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-4">
              <span className="bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">
                Stay in the loop
              </span>
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              For product announcements and exclusive insights
            </p>
            <motion.div
              className="flex"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <input
                type="email"
                placeholder="Input your email"
                className="flex-1 px-4 py-2 bg-[#002B3D] rounded-l outline-none border border-gray-700 focus:border-cyan-400"
              />
              <motion.button
                className="px-6 py-2 bg-cyan-400 text-white rounded-r hover:bg-cyan-500 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4"
          variants={itemVariants}
        >
          <div className="flex gap-8">
            <motion.button
              className="px-4 py-2 border border-gray-800 rounded-lg hover:border-gray-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              English
            </motion.button>
            <motion.button
              className="px-4 py-2 border border-gray-800 rounded-lg hover:border-gray-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              © 2024
            </motion.button>
          </div>
          <div className="flex gap-4">
            {["twitter", "facebook", "instagram", "youtube"].map((social) => (
              <motion.a
                key={social}
                href={`https://${social}.com`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center">
                  <span className="sr-only">{social}</span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
