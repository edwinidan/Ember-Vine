import { motion } from 'motion/react';

export default function Reservations() {
  return (
    <section id="reservations" className="relative py-32 bg-cream overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-20 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=3200&auto=format&fit=crop")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/80 to-transparent z-0"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-burgundy tracking-[0.2em] uppercase text-sm mb-4">Join Us</h3>
          <h2 className="text-5xl md:text-7xl font-serif mb-8 text-charcoal">Make a Reservation</h2>
          <p className="text-lg text-charcoal/70 font-light mb-12 max-w-2xl mx-auto">
            Experience the warmth of Ember & Vine, Takoradi. For parties of 6 or more, please call us directly on +233 (0) 55 486 2900.
          </p>

          {/* Glassmorphism Form Container */}
          <div className="bg-white/60 backdrop-blur-md border border-white p-8 md:p-12 rounded-sm shadow-xl shadow-black/5">
            <form className="grid grid-cols-1 md:grid-cols-3 gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col text-left">
                <label className="text-xs uppercase tracking-widest text-charcoal/60 mb-2">Date</label>
                <input 
                  type="date" 
                  className="bg-transparent border-b border-charcoal/20 py-2 text-charcoal focus:outline-none focus:border-burgundy transition-colors"
                  defaultValue={new Date().toISOString().split('T')[0]}
                />
              </div>
              <div className="flex flex-col text-left">
                <label className="text-xs uppercase tracking-widest text-charcoal/60 mb-2">Time</label>
                <select className="bg-transparent border-b border-charcoal/20 py-2 text-charcoal focus:outline-none focus:border-burgundy transition-colors appearance-none">
                  <option value="17:00" className="bg-white text-charcoal">5:00 PM</option>
                  <option value="18:00" className="bg-white text-charcoal">6:00 PM</option>
                  <option value="19:00" className="bg-white text-charcoal" selected>7:00 PM</option>
                  <option value="20:00" className="bg-white text-charcoal">8:00 PM</option>
                  <option value="21:00" className="bg-white text-charcoal">9:00 PM</option>
                </select>
              </div>
              <div className="flex flex-col text-left">
                <label className="text-xs uppercase tracking-widest text-charcoal/60 mb-2">Guests</label>
                <select className="bg-transparent border-b border-charcoal/20 py-2 text-charcoal focus:outline-none focus:border-burgundy transition-colors appearance-none">
                  <option value="1" className="bg-white text-charcoal">1 Person</option>
                  <option value="2" className="bg-white text-charcoal" selected>2 People</option>
                  <option value="3" className="bg-white text-charcoal">3 People</option>
                  <option value="4" className="bg-white text-charcoal">4 People</option>
                  <option value="5" className="bg-white text-charcoal">5 People</option>
                </select>
              </div>
              <div className="md:col-span-3 mt-6">
                <button 
                  type="submit"
                  className="w-full bg-charcoal hover:bg-charcoal-light text-cream font-medium py-4 uppercase tracking-widest transition-colors duration-300"
                >
                  Find a Table
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
