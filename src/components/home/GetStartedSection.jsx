import { motion } from "framer-motion"; // Import Framer Motion
import { BadgeCheck, Heart } from "lucide-react";
import React from "react";

const GetStartedSection = () => {
  return (
    <div className="mt-10">
      <section className="relative bg-cyan-400 px-4 py-20 ">
        <div className="max-w-5xl mx-auto ">
          <div className="items-center text-center lg:text-left flex flex-col-reverse lg:flex-row gap-10">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 1,

                type: "spring",
                stiffness: 100,
                damping: 12,
              }}
            >
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white">
                Get started!
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{
                  duration: 1,

                  delay: 0.2,
                  type: "spring",
                  stiffness: 100,
                  damping: 12,
                }}
                className="text-white/90 text-lg flex flex-col"
              >
                Quis ut exercitation officia proident enim non tempor <br />{" "}
                tempor proident nulla eu adipisicing sit consequat!
              </motion.p>
              <motion.button
                className="bg-white text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{
                  duration: 1,
                  delay: 0.4,
                  type: "spring",
                  stiffness: 100,
                  damping: 12,
                }}
              >
                Connect wallet
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="relative max-w-xs mx-auto"
            >
              <motion.div
                className="bg-white rounded-sm shadow-xl p-3"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative">
                  <img
                    src="/pexels.jpg"
                    alt="NFT Artwork"
                    className="w-full aspect-[4/3] object-cover rounded-sm transition-transform duration-500 ease-in-out transform hover:scale-105 hover:rotate-2"
                  />
                  <div className="absolute lg:top-[-30px] lg:right-[-9rem] top-[-20px] right-[320px] w-[100px] h-[100px] shadow-lg flex items-center justify-center hidden md:block">
                    <span className="text-cyan-400 text-6xl p-2 ">💎</span>
                  </div>

                  <div className="absolute top-1/2 lg:left-[380px] right-[120px] transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-sm shadow-lg p-3 lg:min-w-[300px] min-w-[250px] hidden md:block">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-8 h-8 bg-purple-400 rounded-full overflow-hidden flex items-center justify-center">
                        <span className="text-white text-xs">🐦</span>
                      </div>

                      <div className="flex-1 ">
                        <p className="font-semibold text-sm flex">
                          Unknown Birds
                        </p>
                        <div className="flex items-center gap-1 text-sm">
                          <span className="text-gray-500">Floor</span>
                          <span className="text-cyan-400">💎</span>
                          <span>0.99</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-emerald-500 text-sm">
                          +15.25%
                        </span>
                        <div className="flex items-center gap-1">
                          <span className="text-cyan-400">💎</span>
                          <span className="font-semibold">13.99</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="flex justify-between items-center gap-1">
                    <div className="flex gap-1 items-center justify-center">
                      <span className="font-light text-gray-400">
                        Asset of You
                      </span>
                      <BadgeCheck size={18} className="text-cyan-400" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-cyan-400">💎</span>
                      <span className="font-bold">11.00</span>
                    </div>
                  </div>
                  <p className="text-black font-bold text-[16px] flex">
                    Web developer
                  </p>

                  {/* Stats Row */}
                  <div className="flex justify-between items-center gap-1">
                    <div className="flex gap-1 items-center justify-center">
                      <span className="hover:text-pink-500">
                        <Heart size={18} />
                      </span>
                      <span className="text-gray-500 text-sm">352</span>
                    </div>
                    <div>
                      <span>Last</span>
                      <span className="text-cyan-400">💎</span>
                      <span>0.95</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500 rounded-tr-full"></div>
      </section>
    </div>
  );
};

export default GetStartedSection;
