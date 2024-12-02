"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";

// team members data
const teamMembers = [
  {
    name: "Full name",
    title: "Professional title",
    image: "/singleImage.jpg",
    twitter: "#",
    linkedin: "#",
  },
  {
    name: "Full name",
    title: "Professional title",
    image: "/singleImage.jpg",
    twitter: "#",
    linkedin: "#",
  },
  {
    name: "Full name",
    title: "Professional title",
    image: "/singleImage.jpg",
    twitter: "#",
    linkedin: "#",
  },
  {
    name: "Full name",
    title: "Professional title",
    image: "/singleImage.jpg",
    twitter: "#",
    linkedin: "#",
  },
  {
    name: "Full name",
    title: "Professional title",
    image: "/singleImage.jpg",
    twitter: "#",
    linkedin: "#",
  },
  {
    name: "Full name",
    title: "Professional title",
    image: "/singleImage.jpg",
    twitter: "#",
    linkedin: "#",
  },
  {
    name: "Full name",
    title: "Professional title",
    image: "/singleImage.jpg",
    twitter: "#",
    linkedin: "#",
  },
  {
    name: "Full name",
    title: "Professional title",
    image: "/singleImage.jpg",
    twitter: "#",
    linkedin: "#",
  },
];

const AboutTeam = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl font-bold mb-2 uppercase"
          >
            Our Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-500"
          >
            Lorem ipsum
          </motion.p>
        </motion.div>

        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 1,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="relative text-center bg-white border border-gray-200 rounded-lg shadow group"
            >
              {/* Image Wrapper */}
              <div className="relative rounded-t-lg overflow-hidden">
                {/* Card Image */}
                <img
                  className="w-full object-cover"
                  src={member.image}
                  alt={`${member.name}`}
                  width={300}
                  height={300}
                />

                {/* Image Overlay */}
                <motion.div
                  initial={{ opacity: 0, y: "100%" }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-black/75 flex flex-col justify-center items-center text-white"
                >
                  <h3 className="text-lg font-semibold mb-2">{member.name}</h3>
                  <p className="mb-4">{member.title}</p>
                  <div className="flex gap-4">
                    <a
                      href={member.twitter}
                      className="text-white hover:text-gray-300 transition-colors"
                      aria-label={`${member.name}'s Twitter`}
                    >
                      <Twitter className="h-6 w-6" />
                    </a>
                    <a
                      href={member.linkedin}
                      className="text-white hover:text-gray-300 transition-colors"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin className="h-6 w-6" />
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Card Content */}
              <div className="p-5">
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-teal-500 mb-3">{member.title}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutTeam;
