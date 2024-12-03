import { Route, Routes } from "react-router-dom";
import "swiper/css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/about/AboutPage";
import ContactPage from "./pages/contact/ContactPage";
import FeaturesPage from "./pages/features/FeaturePage";
import HomePage from "./pages/home/HomePage";
import MediaPage from "./pages/media/MediaPage";

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
