export interface MenuItem {
  name: string;
  description: string;
  price: string;
  dietary?: string[];
}

export interface MenuCategory {
  category: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    category: "Starters",
    items: [
      {
        name: "Charred Octopus",
        description: "Smoked paprika, fingerling potatoes, salsa verde, preserved lemon",
        price: "₵320",
        dietary: ["GF", "DF"]
      },
      {
        name: "Wagyu Beef Tartare",
        description: "Quail egg, black truffle shavings, house-made toasted brioche",
        price: "₵420"
      },
      {
        name: "Roasted Bone Marrow",
        description: "Caramelized onion jam, parsley salad, sourdough crostini",
        price: "₵360"
      },
      {
        name: "Wild Mushroom Arancini",
        description: "Truffle aioli, aged parmesan, crispy sage",
        price: "₵260",
        dietary: ["V"]
      },
      {
        name: "Seared Foie Gras",
        description: "Brioche toast, spiced fig compote, aged balsamic reduction",
        price: "₵480"
      },
      {
        name: "Spiced Crab Cakes",
        description: "Jumbo lump crab, sriracha aioli, pickled cucumber, micro herbs",
        price: "₵380",
        dietary: ["DF"]
      }
    ]
  },
  {
    category: "Soups & Salads",
    items: [
      {
        name: "French Onion Soup",
        description: "Slow-caramelized onions, rich beef broth, gruyère crouton, fresh thyme",
        price: "₵220",
        dietary: ["V"]
      },
      {
        name: "Lobster Bisque",
        description: "Creamy Atlantic lobster, cognac, tarragon oil, chive crème fraîche",
        price: "₵280",
        dietary: ["GF"]
      },
      {
        name: "Classic Caesar",
        description: "Romaine hearts, house caesar dressing, shaved parmesan, sourdough croutons",
        price: "₵200",
        dietary: ["V"]
      },
      {
        name: "Ember Harvest Salad",
        description: "Roasted beetroot, candied walnuts, goat cheese, honey-mustard vinaigrette",
        price: "₵240",
        dietary: ["V", "GF"]
      },
      {
        name: "Seared Tuna Niçoise",
        description: "Pepper-crusted tuna, quail eggs, olives, green beans, lemon dressing",
        price: "₵290",
        dietary: ["GF", "DF"]
      }
    ]
  },
  {
    category: "Mains",
    items: [
      {
        name: "Wood-Fired Ribeye",
        description: "45-day dry-aged, black garlic butter, charred asparagus, smoked sea salt",
        price: "₵980",
        dietary: ["GF"]
      },
      {
        name: "Pan-Seared Scallops",
        description: "Cauliflower purée, pancetta crisp, brown butter caper sauce",
        price: "₵620",
        dietary: ["GF"]
      },
      {
        name: "Truffle Mushroom Risotto",
        description: "Arborio rice, wild foraged mushrooms, aged parmesan, white truffle oil",
        price: "₵480",
        dietary: ["V", "GF"]
      },
      {
        name: "Duck Breast à l'Orange",
        description: "Crispy skin duck, Grand Marnier glaze, parsnip purée, braised endive",
        price: "₵680",
        dietary: ["GF"]
      },
      {
        name: "Herb-Crusted Lamb Rack",
        description: "Dijon and herb crust, roasted garlic mash, red wine jus, minted peas",
        price: "₵850",
        dietary: ["GF"]
      },
      {
        name: "Grilled Whole Sea Bass",
        description: "Lemon-caper butter, crushed new potatoes, charred broccolini, chilli oil",
        price: "₵720",
        dietary: ["GF", "DF"]
      },
      {
        name: "Lobster Thermidor",
        description: "Half Atlantic lobster, cognac cream sauce, gruyère glaze, herb butter rice",
        price: "₵1,100"
      }
    ]
  },
  {
    category: "Desserts",
    items: [
      {
        name: "Dark Chocolate Nemesis",
        description: "Flourless chocolate cake, raspberry coulis, 24k gold leaf",
        price: "₵220",
        dietary: ["V", "GF"]
      },
      {
        name: "Burnt Basque Cheesecake",
        description: "Vanilla bean, macerated seasonal berries, chantilly cream",
        price: "₵200",
        dietary: ["V"]
      },
      {
        name: "Pistachio Rosewater Tart",
        description: "Shortbread crust, crushed pistachios, honey drizzle",
        price: "₵210",
        dietary: ["V"]
      },
      {
        name: "Classic Crème Brûlée",
        description: "Madagascan vanilla custard, caramelized sugar crust, fresh berries",
        price: "₵190",
        dietary: ["V", "GF"]
      },
      {
        name: "Mango Panna Cotta",
        description: "Coconut cream, fresh mango coulis, toasted coconut flakes, lime zest",
        price: "₵200",
        dietary: ["V", "GF", "DF"]
      },
      {
        name: "Cheese Board",
        description: "Selection of three aged cheeses, quince paste, candied pecans, artisan crackers",
        price: "₵280",
        dietary: ["V"]
      }
    ]
  },
  {
    category: "Signature Cocktails",
    items: [
      {
        name: "The Smoked Ember",
        description: "Mezcal, blood orange liqueur, agave, smoked rosemary sprig",
        price: "₵240"
      },
      {
        name: "Velvet Vine",
        description: "Bourbon, ruby port, black walnut bitters, luxardo cherry",
        price: "₵260"
      },
      {
        name: "Golden Hour",
        description: "Gin, elderflower, prosecco, lemon twist, edible gold dust",
        price: "₵230"
      },
      {
        name: "Crimson Rose",
        description: "Vodka, hibiscus syrup, fresh lime, ginger beer, dried rose petals",
        price: "₵250"
      },
      {
        name: "The Dark Harvest",
        description: "Dark rum, blackberry purée, activated charcoal, vanilla syrup, smoked ice",
        price: "₵270"
      },
      {
        name: "Vine Garden Spritz",
        description: "Aperol, white wine, cucumber, fresh mint, sparkling water",
        price: "₵220"
      }
    ]
  }
];
