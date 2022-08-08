import './App.css';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ProductSection from './components/ProductSection';
import ReviewsSection from './components/ReviewsSection';

function App() {
  return (
    <div className="main">
      <Navbar />
      <Hero />
      <ProductSection />
      <AboutSection />
      <ContactSection />
      <ReviewsSection />
      <Footer />
    </div>
  );
}

export default App;
