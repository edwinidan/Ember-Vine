import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-cream relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Grid */}
          <div className="relative h-[600px] w-full">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="absolute top-0 left-0 w-2/3 h-2/3 z-10"
            >
              <img 
                src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1600&auto=format&fit=crop" 
                alt="Chef preparing food" 
                className="w-full h-full object-cover shadow-xl shadow-black/10"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute bottom-0 right-0 w-2/3 h-2/3 z-20"
            >
              <img 
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1600&auto=format&fit=crop" 
                alt="Restaurant interior" 
                className="w-full h-full object-cover shadow-xl shadow-black/10 border-4 border-cream"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            {/* Decorative element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-gold/40 rounded-full z-0"></div>
          </div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-burgundy tracking-[0.2em] uppercase text-sm mb-4">Our Story</h3>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight text-charcoal">
              A symphony of <span className="text-burgundy italic">smoke</span> and <span className="text-gold italic">spirit</span>.
            </h2>
            
            <div className="space-y-6 text-charcoal/80 font-light leading-relaxed">
              <p>
                Founded in 2024, Ember & Vine was born from a simple philosophy: the best flavors come from the earth and the fire. We source our ingredients from local purveyors and sustainable farms, letting the natural quality of the food shine through minimal, yet masterful, preparation.
              </p>
              <p>
                Our kitchen is anchored by a custom-built wood-fired hearth, where our chefs coax complex, smoky profiles from premium cuts of meat and seasonal vegetables. Paired with a wine list curated to highlight bold, terroir-driven vintages, every meal here is designed to linger in your memory.
              </p>
            </div>
            
            <div className="mt-10">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Signature_of_John_Hancock.svg/1200px-Signature_of_John_Hancock.svg.png" 
                alt="Executive Chef Signature" 
                className="h-12 opacity-80"
                referrerPolicy="no-referrer"
              />
              <p className="text-sm tracking-widest uppercase mt-2 text-gold">Executive Chef</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
