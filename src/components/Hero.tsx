import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax feel */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=3200&auto=format&fit=crop")',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Light overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-cream/90 via-cream/60 to-cream"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h2 className="text-burgundy tracking-[0.3em] uppercase text-sm md:text-base mb-6 font-medium">
            A Culinary Experience
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-medium text-charcoal mb-8 leading-none">
            Ember <span className="text-gold italic font-light">&</span> Vine
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <p className="text-lg md:text-xl text-charcoal/80 font-light max-w-2xl mx-auto mb-12">
            Where fire meets elegance. Upscale casual dining featuring wood-fired steaks, 
            hand-crafted pasta, and an extensive curated wine list.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a
            href="#reservations"
            className="inline-block bg-charcoal hover:bg-charcoal-light text-cream px-10 py-4 uppercase tracking-widest text-sm transition-colors duration-300"
          >
            Reserve Your Table
          </a>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-charcoal/40"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <a href="#about" className="flex flex-col items-center gap-2 hover:text-burgundy transition-colors">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown size={20} />
        </a>
      </motion.div>
    </section>
  );
}
