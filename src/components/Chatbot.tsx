import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Loader2 } from 'lucide-react';
import { menuData, MenuItem } from '../data/menu';

type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
};

type ItemWithCategory = MenuItem & { category: string };

function parsePrice(price: string): number {
  return parseInt(price.replace('$', ''), 10);
}

function formatCategory(categoryName: string): string {
  const cat = menuData.find(c => c.category === categoryName);
  if (!cat) return "I'm sorry, I couldn't find that section. Shall I walk you through the full menu?";
  return (
    `Our ${categoryName}:\n\n` +
    cat.items.map(i => `• ${i.name} (${i.price}) — ${i.description}`).join('\n\n')
  );
}

function formatDietaryResponse(items: ItemWithCategory[], label: string): string {
  if (items.length === 0) {
    return `We don't currently list dedicated ${label} items, but our chef is happy to discuss customisations — please ask your server on the evening.`;
  }
  const grouped = items.reduce<Record<string, ItemWithCategory[]>>((acc, item) => {
    (acc[item.category] ??= []).push(item);
    return acc;
  }, {});
  const sections = Object.entries(grouped).map(
    ([cat, catItems]) =>
      `${cat}:\n${catItems.map(i => `  • ${i.name} (${i.price})`).join('\n')}`
  );
  return `Here are our ${label} options:\n\n${sections.join('\n\n')}`;
}

function getRuleBasedResponse(userInput: string): string {
  const lower = userInput.toLowerCase().trim();

  const allItems: ItemWithCategory[] = menuData.flatMap(cat =>
    cat.items.map(item => ({ ...item, category: cat.category }))
  );

  // RESERVATIONS
  if (/reserv|book\s+a?\s*(table|seat)|make\s+a?\s*booking/.test(lower)) {
    return "I'd be delighted to help arrange your visit! Please scroll to our Reservations section on this page, where you can select your preferred date, time, and party size. We look forward to welcoming you.";
  }

  // RECOMMENDATIONS
  if (/recommend|what'?s?\s*good|suggest|popular|best\s+dish|must.?try|what should i (get|order|try)/.test(lower)) {
    const picks = ['Wood-Fired Ribeye', 'Pan-Seared Scallops', 'Wild Mushroom Arancini']
      .map(name => allItems.find(i => i.name === name))
      .filter((i): i is ItemWithCategory => Boolean(i));
    return (
      "Our guests particularly enjoy these selections:\n\n" +
      picks.map(i => `• ${i.name} (${i.price}) — ${i.description}`).join('\n\n') +
      "\n\nWould you like to know more, or shall I filter by dietary preference?"
    );
  }

  // BUDGET
  const budgetKeyword = /budget|spend|afford|i have|i've got|i'm working with/.test(lower);
  const dollarMatch = lower.match(/\$\s*(\d+)|(\d+)\s*dollar/);
  if (budgetKeyword && dollarMatch) {
    const budget = parseInt(dollarMatch[1] || dollarMatch[2], 10);
    const starters = allItems.filter(i => i.category === 'Starters');
    const mains = allItems.filter(i => i.category === 'Mains');
    const cocktails = allItems.filter(i => i.category === 'Signature Cocktails');

    let combo: ItemWithCategory[] | null = null;

    // Try starter + main within budget
    outer: for (const main of mains) {
      for (const starter of starters) {
        if (parsePrice(starter.price) + parsePrice(main.price) <= budget) {
          combo = [starter, main];
          break outer;
        }
      }
    }

    // Try main + cocktail
    if (!combo) {
      for (const main of mains) {
        const cocktail = cocktails.find(
          c => parsePrice(main.price) + parsePrice(c.price) <= budget
        );
        if (cocktail) { combo = [main, cocktail]; break; }
      }
    }

    // Try main alone
    if (!combo) {
      const m = mains.find(m => parsePrice(m.price) <= budget);
      if (m) combo = [m];
    }

    // Try cocktail alone
    if (!combo) {
      const c = cocktails.find(c => parsePrice(c.price) <= budget);
      if (c) combo = [c];
    }

    if (combo) {
      let running = 0;
      const lines = combo.map(item => {
        running += parsePrice(item.price);
        return `• ${item.name} (${item.category}) — ${item.price}  |  Subtotal: $${running}`;
      });
      const remaining = budget - running;
      return (
        `With a budget of $${budget}, here's a curated pairing:\n\n` +
        lines.join('\n') +
        `\n\nTotal: $${running} — $${remaining} to spare`
      );
    } else {
      return `Our menu starts from $14 for desserts and $17 for cocktails. With a $${budget} budget, I'd suggest starting with a signature cocktail to set the mood.`;
    }
  }

  // DIETARY FILTERING
  if (/\bvegan\b/.test(lower)) {
    const matches = allItems.filter(i => i.dietary?.includes('V') && i.dietary?.includes('DF'));
    return formatDietaryResponse(matches, 'vegan');
  }

  if (/vegetarian|veggie|\bno meat\b/.test(lower)) {
    const matches = allItems.filter(i => i.dietary?.includes('V'));
    return formatDietaryResponse(matches, 'vegetarian');
  }

  if (/gluten.?free|\bgf\b/.test(lower)) {
    const matches = allItems.filter(i => i.dietary?.includes('GF'));
    return formatDietaryResponse(matches, 'gluten-free');
  }

  if (/dairy.?free|\bdf\b|lactose/.test(lower)) {
    const matches = allItems.filter(i => i.dietary?.includes('DF'));
    return formatDietaryResponse(matches, 'dairy-free');
  }

  if (/spicy|heat\b|chili|chilli/.test(lower)) {
    return "Our menu favours refined, umami-forward flavours over pronounced heat. The Charred Octopus features smoked paprika for a gentle warmth. Would you like to explore other starters?";
  }

  // CATEGORY BROWSING
  if (/\bstarter|appetizer|small plate|start with/.test(lower)) {
    return formatCategory('Starters');
  }
  if (/\bmain\b|entree|entrée|main course|something filling/.test(lower)) {
    return formatCategory('Mains');
  }
  if (/dessert|sweet|after dinner|pudding/.test(lower)) {
    return formatCategory('Desserts');
  }
  if (/cocktail|drink\b|bar\b|beverage|tipple/.test(lower)) {
    return formatCategory('Signature Cocktails');
  }

  // ITEM LOOKUP — fuzzy name match
  const foundItem = allItems.find(item => {
    const nameLower = item.name.toLowerCase();
    if (lower.includes(nameLower)) return true;
    const words = nameLower.split(/\s+/).filter(w => w.length >= 4);
    return words.some(w => lower.includes(w));
  });
  if (foundItem) {
    const dietaryNote = foundItem.dietary?.length
      ? `\n\nDietary: ${foundItem.dietary.join(', ')}`
      : '';
    return (
      `${foundItem.name} — ${foundItem.price}\n\n` +
      `${foundItem.description}${dietaryNote}\n\n` +
      `Would you like to know more, or shall I suggest a pairing?`
    );
  }

  // HOURS
  if (/hour|open|close|when|time/.test(lower)) {
    return "Ember & Vine is open Wednesday through Sunday, 5:30 PM to 10:30 PM. Reservations are recommended, especially on weekends. Shall I guide you to the booking form?";
  }

  // FALLBACK
  return (
    "I'm your Ember & Vine concierge — here to help with:\n\n" +
    "• Recommendations — \"What do you recommend?\"\n" +
    "• Budget planning — \"I have a $60 budget\"\n" +
    "• Dietary needs — \"Show me vegetarian options\"\n" +
    "• Menu browsing — \"What starters do you have?\"\n" +
    "• Dish details — \"Tell me about the ribeye\"\n" +
    "• Reservations — \"I'd like to book a table\"\n\n" +
    "How may I assist you this evening?"
  );
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: 'Welcome to Ember & Vine. I am your digital concierge. How may I assist you with our menu or reservations today?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { id: Date.now().toString(), role: 'user', content: userMessage }]);
    setIsLoading(true);

    await new Promise(resolve => setTimeout(resolve, 400));

    const reply = getRuleBasedResponse(userMessage);
    setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), role: 'assistant', content: reply }]);
    setIsLoading(false);
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full bg-burgundy text-cream shadow-xl shadow-black/20 hover:bg-burgundy-dark transition-colors ${isOpen ? 'hidden' : 'flex'}`}
        aria-label="Open chat"
      >
        <MessageSquare size={24} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-[350px] sm:w-[400px] h-[500px] max-h-[80vh] flex flex-col bg-white border border-charcoal/10 rounded-lg shadow-2xl overflow-hidden"
          >
            <div className="bg-cream p-4 border-b border-charcoal/10 flex justify-between items-center">
              <div>
                <h3 className="font-serif text-burgundy text-lg font-medium">Ember & Vine Concierge</h3>
                <p className="text-xs text-charcoal/60">Always here to help</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-charcoal/50 hover:text-charcoal transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-md text-sm whitespace-pre-line ${
                      msg.role === 'user'
                        ? 'bg-charcoal text-cream rounded-tr-none'
                        : 'bg-cream border border-charcoal/5 text-charcoal rounded-tl-none'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-cream border border-charcoal/5 text-charcoal p-3 rounded-md rounded-tl-none">
                    <Loader2 size={16} className="animate-spin text-burgundy" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSendMessage} className="p-3 bg-cream border-t border-charcoal/10 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about our menu..."
                className="flex-1 bg-white border border-charcoal/20 rounded-md px-3 py-2 text-sm text-charcoal focus:outline-none focus:border-burgundy transition-colors"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="bg-burgundy hover:bg-burgundy-dark disabled:opacity-50 disabled:hover:bg-burgundy text-cream p-2 rounded-md transition-colors"
              >
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
