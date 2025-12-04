import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Maintenance from './components/Maintenance';
import Booking from './components/Booking';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5E6E8] via-[#F5EDE4] to-[#E8DDD4]">
      <Hero />
      <About />
      <Gallery />
      <Maintenance />
      <Booking />
      <Footer />
    </div>
  );
}

export default App;
