import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-center">
          {/* Left Section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Buy and sell your extraordinary{" "}
              <motion.span
                className="text-cyan-400"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
              >
                NFTs
              </motion.span>
            </motion.h1>
            <motion.p
              className="text-gray-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Occaecat est yrum reprehenderit reprehenderit veniam enim laborum
              est esse duis occaecat.
            </motion.p>
            <motion.div
              className="grid grid-cols-2 gap-4 max-w-xs"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <motion.button
                className="px-8 py-3 bg-cyan-400 text-white rounded-lg hover:bg-cyan-500 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore
              </motion.button>
              <motion.button
                className="px-8 py-3 bg-cyan-50 text-cyan-400 rounded-lg hover:bg-cyan-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Create
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            className="bg-violet-500 p-8 rounded-sm justify-self-center lg:justify-self-end w-full lg:w-[80%] flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
          >
            <motion.div
              className="bg-white rounded-xl p-4 shadow-lg max-w-sm"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut",
              }}
            >
              <div className="aspect-square bg-orange-400 rounded-lg overflow-hidden relative mb-4">
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 20,
                    ease: "linear",
                  }}
                >
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                    <motion.div
                      className="w-20 h-20 bg-white rounded-full relative"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "easeInOut",
                      }}
                    >
                      {/* Ghost eyes */}
                      <motion.div
                        className="absolute top-6 left-4 w-2 h-2 bg-black rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{
                          repeat: Infinity,
                          duration: 1.5,
                          ease: "easeInOut",
                        }}
                      ></motion.div>
                      <motion.div
                        className="absolute top-6 right-4 w-2 h-2 bg-black rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{
                          repeat: Infinity,
                          duration: 1.5,
                          ease: "easeInOut",
                        }}
                      ></motion.div>
                      {/* Ghost smile */}
                      <motion.div
                        className="absolute bottom-4 left-1/2 -translate-x-1/2 w-4 h-1 bg-pink-200 rounded-full"
                        animate={{ scaleX: [1, 1.2, 1] }}
                        transition={{
                          repeat: Infinity,
                          duration: 2,
                          ease: "easeInOut",
                        }}
                      ></motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
              <div className="grid gap-2">
                <div className="grid grid-cols-2 items-center">
                  <div>
                    <p className="font-semibold text-black">Asset of Fun</p>
                    <p className="text-black">Asset title #82983</p>
                  </div>
                  <motion.div
                    className="flex items-center gap-1 justify-self-end"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      ease: "easeInOut",
                    }}
                  >
                    <span className="text-cyan-400">💎</span>
                    <span className="font-bold text-black">11.98</span>
                  </motion.div>
                </div>
                <div className="grid grid-cols-2 items-center text-sm">
                  <motion.div
                    className="flex items-center gap-1"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      ease: "easeInOut",
                    }}
                  >
                    <span className="text-pink-500">♥</span>
                    <span className="text-black">352</span>
                  </motion.div>
                  <div className="flex items-center gap-1 justify-self-end">
                    <span>Last</span>
                    <span className="text-cyan-400">💎</span>
                    <span className="font-bold text-black">0.99</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
