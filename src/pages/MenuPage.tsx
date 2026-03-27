import Navbar from '../components/Navbar';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-cream text-charcoal font-sans selection:bg-burgundy selection:text-white">
      <Navbar />
      <main className="pt-28">
        <div className="text-center py-16 bg-cream border-b border-charcoal/10">
          <h3 className="text-burgundy tracking-[0.2em] uppercase text-sm mb-4">Ember & Vine</h3>
          <h1 className="text-5xl md:text-7xl font-serif text-charcoal">Full Menu</h1>
          <p className="mt-4 text-charcoal/60 font-light max-w-xl mx-auto text-sm">
            Every dish crafted with care — browse our complete offering at your leisure.
          </p>
        </div>
        <Menu />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
