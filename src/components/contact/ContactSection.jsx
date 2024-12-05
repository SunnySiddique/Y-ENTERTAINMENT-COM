import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone, Send } from "lucide-react";

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
  return (
    <div className="min-h-screen ">
      <div className="px-4 py-12 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Let&apos;s Connect
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you have questions, need assistance, or want to explore
            partnerships, we&apos;re here to help shape your vision into
            reality.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactData.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-bold mb-4">Send us a Message</h2>
            <p className="text-gray-600 mb-6">
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your message"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[150px]"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
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
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <p className="text-gray-600 mb-6">
                Reach out to us through any of these channels
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <p>Alaska, United States</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <p>team@yentertainmentltd.com</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <p>+447347010077</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
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
    </div>
  );
};

export default ContactSection;
