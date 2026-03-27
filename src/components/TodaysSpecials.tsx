import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { menuData } from '../data/menu';

const SPECIALS = [
  { category: 'Starters',           name: 'Wagyu Beef Tartare' },
  { category: 'Mains',              name: 'Wood-Fired Ribeye' },
  { category: 'Mains',              name: 'Truffle Mushroom Risotto' },
  { category: 'Desserts',           name: 'Dark Chocolate Nemesis' },
  { category: 'Signature Cocktails', name: 'The Smoked Ember' },
];

const specials = SPECIALS.map(({ category, name }) => {
  const cat = menuData.find(c => c.category === category);
  const item = cat?.items.find(i => i.name === name);
  return item ? { ...item, category } : null;
}).filter(Boolean);

export default function TodaysSpecials() {
  return (
    <section id="menu" className="py-24 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h3 className="text-burgundy tracking-[0.2em] uppercase text-sm mb-4">Chef's Selection</h3>
          <h2 className="text-4xl md:text-6xl font-serif text-charcoal">Today's Specials</h2>
          <p className="mt-4 text-charcoal/60 font-light max-w-xl mx-auto text-sm">
            A curated handful of our finest offerings this evening — crafted fresh and ready to delight.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {specials.map((item, index) => (
            item && (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="flex justify-between items-baseline mb-2">
                  <h4 className="text-xl font-serif text-charcoal group-hover:text-burgundy transition-colors">
                    {item.name}
                  </h4>
                  <div className="flex-grow border-b border-charcoal/10 mx-4 border-dashed relative top-[-6px]"></div>
                  <span className="text-gold font-medium">{item.price}</span>
                </div>
                <p className="text-charcoal/70 font-light text-sm leading-relaxed mb-2">
                  {item.description}
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] uppercase tracking-wider text-charcoal/40">{item.category}</span>
                  {item.dietary?.map((diet, i) => (
                    <span key={i} className="text-[10px] uppercase tracking-wider border border-charcoal/20 px-1.5 py-0.5 text-charcoal/60">
                      {diet}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link
            to="/menu"
            className="inline-block border border-charcoal text-charcoal hover:bg-charcoal hover:text-cream px-10 py-4 uppercase tracking-widest text-sm transition-colors duration-300"
          >
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
}
