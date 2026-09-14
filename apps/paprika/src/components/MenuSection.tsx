import { Star } from 'lucide-react'

const MENU_ITEMS = [
  {
    name: 'Grilled Chicken',
    price: 32,
    description: 'Herb-marinated chicken with roasted vegetables',
    image: 'paprika-menu-1',
  },
  {
    name: 'Lasagne Pasta',
    price: 16,
    description: 'Classic layered pasta with rich bolognese sauce',
    image: 'paprika-menu-2',
  },
  {
    name: 'Pepperoni Pizza',
    price: 24,
    description: 'Wood-fired pizza with spicy pepperoni and mozzarella',
    image: 'paprika-menu-3',
  },
  {
    name: 'Caesar Salad',
    price: 14,
    description: 'Crisp romaine with parmesan, croutons, and caesar dressing',
    image: 'paprika-menu-4',
  },
  {
    name: 'Ribeye Steak',
    price: 42,
    description: 'Prime cut grilled to perfection with garlic butter',
    image: 'paprika-menu-5',
  },
  {
    name: 'Seafood Risotto',
    price: 28,
    description: 'Creamy arborio rice with shrimp, mussels, and saffron',
    image: 'paprika-menu-6',
  },
  {
    name: 'Vegetable Flavour',
    price: 32,
    description: 'Seasonal vegetables with herb-infused olive oil',
    image: 'paprika-menu-7',
  },
  {
    name: 'Tiramisu',
    price: 12,
    description: 'Traditional Italian dessert with espresso-soaked ladyfingers',
    image: 'paprika-menu-8',
  },
]

function StarRating() {
  return (
    <ul className="flex gap-0.5">
      {[1, 2, 3, 4].map((i) => (
        <li key={i}>
          <Star size={14} className="fill-yellow-400 text-yellow-400" />
        </li>
      ))}
      <li>
        <Star size={14} className="text-yellow-400" />
      </li>
    </ul>
  )
}

export function MenuSection() {
  return (
    <section id="menu" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="font-[family-name:var(--font-cursive)] text-3xl text-[#b10400]">Our</h3>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl uppercase text-[#333] mt-1">
            Menu
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {MENU_ITEMS.map((item) => (
            <div
              key={item.name}
              className="flex gap-4 p-4 border border-gray-100 rounded-lg hover:shadow-md transition-shadow"
            >
              <img
                src={`https://picsum.photos/seed/${item.image}/120/120`}
                alt={item.name}
                className="w-24 h-24 object-cover rounded"
                loading="lazy"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-[family-name:var(--font-heading)] text-lg text-[#333]">
                    {item.name}
                  </h4>
                  <span className="font-[family-name:var(--font-heading)] text-lg text-[#b10400]">
                    ${item.price}
                  </span>
                </div>
                <p className="text-gray-500 text-sm mb-2">{item.description}</p>
                <div className="flex items-center justify-between">
                  <StarRating />
                  <button className="text-xs text-[#b10400] font-semibold uppercase hover:underline">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
