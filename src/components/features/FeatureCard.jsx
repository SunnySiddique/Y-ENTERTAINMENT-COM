import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import useBorder from "../../hooks/useBorder";

const FeatureCard = ({ id, title, image, description }) => {
  const borderClass = useBorder();
  return (
    <motion.div
      className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 "
      whileHover={{ y: -5 }}
    >
      <div className="relative ">
        <img
          src={image}
          alt={title}
          layout="fill"
          className="w-full h-60 transition-transform duration-300 hover:scale-105 object-cover"
        />
      </div>
      <div
        className={`${borderClass} p-6 `}
        style={{
          borderBottomRightRadius: "10px",
          borderBottomLeftRadius: "10px",
        }}
      >
        <h3 className="text-xl font-bold mb-2 line-clamp-2 text-primary-foreground">
          {title}
        </h3>
        <p className="mb-4 line-clamp-3 text-sm">{description}</p>
        <Link to={`/event/${id}`}>
          <motion.button
            className="inline-flex items-center font-bold text-sm text-blue-600 hover:text-blue-800"
            whileHover={{ x: 5 }}
          >
            Learn More
            <ArrowRight className="ml-2 h-4 w-4" />
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
