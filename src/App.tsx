import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Reservations from './components/Reservations';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-cream text-charcoal font-sans selection:bg-burgundy selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Reservations />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
