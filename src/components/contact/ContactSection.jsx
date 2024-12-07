import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import useBorder from "../../hooks/useBorder";
import IconContainer from "./IconContainer";

const contactData = [
  {
    title: "Service Inquiries",
    description: "Get help with our marketing services and solutions",
    icon: Send,
  },
  {
    title: "Career Opportunities",
    description: "Join our dynamic and inclusive workplace",
    icon: ArrowRight,
  },
  {
    title: "Partnerships",
    description: "Explore collaboration and growth opportunities",
    icon: Mail,
  },
  {
    title: "General Questions",
    description: "We're here to help with any other inquiries",
    icon: Phone,
  },
];

const ContactSection = () => {
  const [dragPosition, setDragPosition] = useState({ x: 0, y: 0 });
  const borderClass = useBorder();

  return (
    <>
      <div className="px-4 py-12 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground">
            Let&apos;s Connect
          </h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Whether you have questions, need assistance, or want to explore
            partnerships, we&apos;re here to help shape your vision into
            reality.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 scrollbar-hide ">
          {contactData.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.4 }}
              viewport={{ once: true }}
              drag
              dragConstraints={{
                left: -150,
                right: 150,
                top: 0,
                bottom: 200,
              }}
              dragElastic={0.1}
              whileDrag={{
                scale: 1.1,
                rotateX: -10,
                rotateY: 10,
                zIndex: 10,
              }}
              onDragEnd={(event, info) => {
                setDragPosition({ x: 0, y: 0 });
              }}
              style={{ cursor: "grab" }}
              className={`${borderClass} p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300`}
            >
              <IconContainer key={index} icon={item.icon} />
              <h2 className="text-xl font-semibold mb-2 text-primary-foreground">
                {item.title}
              </h2>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`${borderClass} p-6 rounded-lg shadow-md`}
          >
            <h2 className="text-2xl font-bold mb-4">Send us a Message</h2>
            <p className="mb-6">
              Fill out the form below and we&apos;ll get back to you as soon as
              possible.
            </p>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="w-full px-3 py-2 rounded-md focus:outline-none ring-2 ring-second"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secon"
                    required
                  />
                </div>
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secon"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your message"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secon min-h-[150px]"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className={`${borderClass} py-2 px-4 rounded-md hover:bg-primary transition-colors duration-300 flex items-center justify-center`}
              >
                Send Message
                <Send className="w-4 h-4 ml-2" />
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            <div className={`${borderClass} p-6 rounded-lg shadow-md`}>
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <p className="mb-6">
                Reach out to us through any of these channels
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <MapPin className="w-5 h-5" />
                  <p>Alaska, United States</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-5 h-5" />
                  <p>team@yentertainmentltd.com</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-5 h-5" />
                  <p>+447347010077</p>
                </div>
              </div>
            </div>

            <div className={`${borderClass} p-6 rounded-lg shadow-md`}>
              <h2 className="text-2xl font-bold mb-4">Office Location</h2>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1019881.9948624372!2d-149.9999999!3d61.2163129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x56c8917604b33f41%3A0x257dba5aa78468e3!2sAlaska%2C%20USA!5e0!3m2!1sen!2suk!4v1656935894229!5m2!1sen!2suk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
