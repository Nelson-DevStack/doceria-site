import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ProductSection from './components/ProductSection';

function App() {
  return (
    <div className="main">
      <Navbar />
      <Hero />
      <ProductSection />
    </div>
  );
}

export default App;
