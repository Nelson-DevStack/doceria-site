import './App.css';
import AboutSection from './components/AboutSection';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ProductSection from './components/ProductSection';

function App() {
  return (
    <div className="main">
      <Navbar />
      <Hero />
      <ProductSection />
      <AboutSection />
    </div>
  );
}

export default App;
