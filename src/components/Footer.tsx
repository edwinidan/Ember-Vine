export default function Footer() {
  return (
    <footer className="bg-[#f5f2eb] py-16 border-t border-charcoal/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-serif text-burgundy mb-4">Ember & Vine</h2>
            <p className="text-charcoal/70 text-sm max-w-sm leading-relaxed">
              An upscale casual dining experience celebrating the elemental beauty of wood-fired cooking and curated wines.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs uppercase tracking-widest text-charcoal/50 mb-4">Location</h4>
            <address className="not-italic text-sm text-charcoal/80 space-y-1">
              <p>Liberation Road, Market Circle</p>
              <p>Takoradi, Western Region</p>
              <p>Ghana</p>
              <p className="pt-2 text-burgundy font-medium">contact@emberandvine.com</p>
              <p>+233 (0) 55 486 2900</p>
            </address>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-charcoal/50 mb-4">Hours</h4>
            <ul className="text-sm text-charcoal/80 space-y-1">
              <li className="flex justify-between"><span>Mon - Thu</span> <span>5pm - 10pm</span></li>
              <li className="flex justify-between"><span>Fri - Sat</span> <span>5pm - 11pm</span></li>
              <li className="flex justify-between"><span>Sunday</span> <span>4pm - 9pm</span></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-charcoal/10 text-xs text-charcoal/50">
          <p>&copy; {new Date().getFullYear()} Ember & Vine. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-burgundy transition-colors">Instagram</a>
            <a href="#" className="hover:text-burgundy transition-colors">Facebook</a>
            <a href="#" className="hover:text-burgundy transition-colors">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
