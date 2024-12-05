import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "swiper/css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PageTransition from "./components/PageTransition";
import AboutPage from "./pages/about/AboutPage";
import ContactPage from "./pages/contact/ContactPage";
import FeaturesPage from "./pages/features/FeaturePage";
import HomePage from "./pages/home/HomePage";
import MediaPage from "./pages/media/MediaPage";

// Variants for background animation
const backgroundVariants = {
  initial: { y: "100%" },
  animate: { y: 0 },
  exit: { y: "-100%" },
};

const App = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      {/* Background Animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={location.key}
          variants={backgroundVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.7, ease: "easeInOut" }}
        />
      </AnimatePresence>

      <div className="relative z-20">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageTransition>
                  <HomePage />
                </PageTransition>
              }
            />
            <Route
              path="/about"
              element={
                <PageTransition>
                  <AboutPage />
                </PageTransition>
              }
            />
            <Route
              path="/features"
              element={
                <PageTransition>
                  <FeaturesPage />
                </PageTransition>
              }
            />
            <Route
              path="/media"
              element={
                <PageTransition>
                  <MediaPage />
                </PageTransition>
              }
            />
            <Route
              path="/contact"
              element={
                <PageTransition>
                  <ContactPage />
                </PageTransition>
              }
            />
          </Routes>
        </AnimatePresence>
      </div>
      <Footer />
    </>
  );
};

export default App;
