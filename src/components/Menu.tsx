import { useState } from 'react';
import { motion } from 'motion/react';
import { menuData } from '../data/menu';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(menuData[0].category);

  return (
    <section id="menu" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h3 className="text-burgundy tracking-[0.2em] uppercase text-sm mb-4">Culinary Offerings</h3>
          <h2 className="text-4xl md:text-6xl font-serif text-charcoal">The Menu</h2>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16">
          {menuData.map((category) => (
            <button
              key={category.category}
              onClick={() => setActiveCategory(category.category)}
              className={`text-sm md:text-base uppercase tracking-widest pb-2 transition-all duration-300 relative ${
                activeCategory === category.category
                  ? 'text-burgundy'
                  : 'text-charcoal/50 hover:text-charcoal'
              }`}
            >
              {category.category}
              {activeCategory === category.category && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-burgundy"
                />
              )}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="min-h-[400px]">
          {menuData.map((category) => (
            activeCategory === category.category && (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12"
              >
                {category.items.map((item, index) => (
                  <div key={index} className="group">
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
                    {item.dietary && (
                      <div className="flex gap-2">
                        {item.dietary.map((diet, i) => (
                          <span key={i} className="text-[10px] uppercase tracking-wider border border-charcoal/20 px-1.5 py-0.5 text-charcoal/60">
                            {diet}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </motion.div>
            )
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <p className="text-sm text-charcoal/50 italic">
            * Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness.
          </p>
        </div>
      </div>
    </section>
  );
}
