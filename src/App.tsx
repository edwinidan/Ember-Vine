import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TodaysSpecials from './components/TodaysSpecials';
import Reservations from './components/Reservations';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';
import MenuPage from './pages/MenuPage';

function HomePage() {
  return (
    <div className="min-h-screen bg-cream text-charcoal font-sans selection:bg-burgundy selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <TodaysSpecials />
        <Reservations />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </BrowserRouter>
  );
}
