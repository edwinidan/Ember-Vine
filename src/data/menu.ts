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
        price: "$22",
        dietary: ["GF", "DF"]
      },
      {
        name: "Wagyu Beef Tartare",
        description: "Quail egg, black truffle shavings, house-made toasted brioche",
        price: "$28"
      },
      {
        name: "Roasted Bone Marrow",
        description: "Caramelized onion jam, parsley salad, sourdough crostini",
        price: "$24"
      },
      {
        name: "Wild Mushroom Arancini",
        description: "Truffle aioli, aged parmesan, crispy sage",
        price: "$18",
        dietary: ["V"]
      }
    ]
  },
  {
    category: "Mains",
    items: [
      {
        name: "Wood-Fired Ribeye",
        description: "45-day dry-aged, black garlic butter, charred asparagus, smoked sea salt",
        price: "$68",
        dietary: ["GF"]
      },
      {
        name: "Pan-Seared Scallops",
        description: "Cauliflower purée, pancetta crisp, brown butter caper sauce",
        price: "$42",
        dietary: ["GF"]
      },
      {
        name: "Truffle Mushroom Risotto",
        description: "Arborio rice, wild foraged mushrooms, aged parmesan, white truffle oil",
        price: "$34",
        dietary: ["V", "GF"]
      },
      {
        name: "Duck Breast à l'Orange",
        description: "Crispy skin duck, Grand Marnier glaze, parsnip purée, braised endive",
        price: "$46",
        dietary: ["GF"]
      }
    ]
  },
  {
    category: "Desserts",
    items: [
      {
        name: "Dark Chocolate Nemesis",
        description: "Flourless chocolate cake, raspberry coulis, 24k gold leaf",
        price: "$16",
        dietary: ["V", "GF"]
      },
      {
        name: "Burnt Basque Cheesecake",
        description: "Vanilla bean, macerated seasonal berries, chantilly cream",
        price: "$14",
        dietary: ["V"]
      },
      {
        name: "Pistachio Rosewater Tart",
        description: "Shortbread crust, crushed pistachios, honey drizzle",
        price: "$15",
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
        price: "$18"
      },
      {
        name: "Velvet Vine",
        description: "Bourbon, ruby port, black walnut bitters, luxardo cherry",
        price: "$19"
      },
      {
        name: "Golden Hour",
        description: "Gin, elderflower, prosecco, lemon twist, edible gold dust",
        price: "$17"
      }
    ]
  }
];
