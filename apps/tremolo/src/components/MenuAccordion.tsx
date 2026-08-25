import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface MenuItem {
  name: string
  description: string
  price: string
  image: string
  badges?: string[]
}

interface MenuCategory {
  id: string
  label: string
  items: MenuItem[]
}

const categories: MenuCategory[] = [
  {
    id: 'starters',
    label: 'Starters',
    items: [
      {
        name: 'Bruschetta al Pomodoro',
        description:
          'Grilled sourdough topped with vine-ripened tomatoes, fresh basil, and extra-virgin olive oil.',
        price: '$8.50',
        image: 'https://picsum.photos/seed/tremolo-bruschetta/400/300',
        badges: ['Vegetarian'],
      },
      {
        name: 'Crispy Calamari',
        description:
          'Golden-fried squid rings served with zesty lemon aioli and marinara dipping sauce.',
        price: '$12.00',
        image: 'https://picsum.photos/seed/tremolo-calamari/400/300',
        badges: ["Chef's Special"],
      },
      {
        name: 'Spicy Buffalo Wings',
        description:
          'Tender chicken wings tossed in our house-made fiery buffalo sauce with blue cheese dip.',
        price: '$11.50',
        image: 'https://picsum.photos/seed/tremolo-wings/400/300',
        badges: ['Spicy'],
      },
    ],
  },
  {
    id: 'mains',
    label: 'Main Courses',
    items: [
      {
        name: 'Grilled Ribeye Steak',
        description:
          'Prime 12oz ribeye, chargrilled and served with roasted garlic mashed potatoes and seasonal vegetables.',
        price: '$28.00',
        image: 'https://picsum.photos/seed/tremolo-ribeye/400/300',
        badges: ["Chef's Special"],
      },
      {
        name: 'Pan-Seared Salmon',
        description:
          'Atlantic salmon fillet with lemon butter sauce, wild rice pilaf, and steamed asparagus.',
        price: '$22.50',
        image: 'https://picsum.photos/seed/tremolo-salmon/400/300',
      },
      {
        name: 'Mushroom Risotto',
        description: 'Creamy arborio rice with wild mushrooms, truffle oil, and shaved parmesan.',
        price: '$18.00',
        image: 'https://picsum.photos/seed/tremolo-risotto/400/300',
        badges: ['Vegetarian', 'Gluten-Free'],
      },
    ],
  },
  {
    id: 'specialties',
    label: 'Specialties',
    items: [
      {
        name: 'Wood-Fired Margherita',
        description:
          'San Marzano tomatoes, fresh mozzarella, basil, and a drizzle of olive oil on our signature crust.',
        price: '$16.00',
        image: 'https://picsum.photos/seed/tremolo-margherita/400/300',
        badges: ['Vegetarian'],
      },
      {
        name: 'Truffle Tagliatelle',
        description:
          'Hand-rolled pasta with black truffle cream sauce, wild mushrooms, and pecorino romano.',
        price: '$24.00',
        image: 'https://picsum.photos/seed/tremolo-tagliatelle/400/300',
        badges: ["Chef's Special"],
      },
      {
        name: 'Lamb Shanks Provençal',
        description:
          'Slow-braised lamb shanks in a rich tomato and herb reduction with creamy polenta.',
        price: '$26.00',
        image: 'https://picsum.photos/seed/tremolo-lamb/400/300',
      },
    ],
  },
  {
    id: 'desserts',
    label: 'Desserts',
    items: [
      {
        name: 'Tiramisu Classico',
        description:
          'Espresso-soaked ladyfingers layered with mascarpone cream and dusted with cocoa.',
        price: '$10.00',
        image: 'https://picsum.photos/seed/tremolo-tiramisu/400/300',
        badges: ["Chef's Special"],
      },
      {
        name: 'Crème Brûlée',
        description: 'Silky vanilla bean custard with a caramelized sugar crust and fresh berries.',
        price: '$9.50',
        image: 'https://picsum.photos/seed/tremolo-brulee/400/300',
        badges: ['Gluten-Free'],
      },
      {
        name: 'Chocolate Lava Cake',
        description:
          'Warm dark chocolate fondant with a molten center, served with vanilla bean ice cream.',
        price: '$11.00',
        image: 'https://picsum.photos/seed/tremolo-lava/400/300',
      },
    ],
  },
  {
    id: 'beverages',
    label: 'Beverages',
    items: [
      {
        name: 'Signature Cocktail',
        description:
          'House-infused basil gin, elderflower liqueur, fresh lime, and sparkling water.',
        price: '$14.00',
        image: 'https://picsum.photos/seed/tremolo-cocktail/400/300',
      },
      {
        name: 'Artisan Lemonade',
        description:
          'Fresh-squeezed lemons with a hint of lavender and raw honey over crushed ice.',
        price: '$6.00',
        image: 'https://picsum.photos/seed/tremolo-lemonade/400/300',
        badges: ['Vegan'],
      },
      {
        name: 'Espresso Doppio',
        description: 'Double shot of our signature single-origin espresso, rich and aromatic.',
        price: '$5.00',
        image: 'https://picsum.photos/seed/tremolo-espresso/400/300',
        badges: ['Vegan'],
      },
    ],
  },
]

function AccordionItem({
  category,
  isOpen,
  onToggle,
}: {
  category: MenuCategory
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-slate-50"
      >
        <span className="text-lg font-bold text-slate-900">{category.label}</span>
        <ChevronDown
          className={cn(
            'h-5 w-5 text-slate-500 transition-transform duration-300',
            isOpen && 'rotate-180',
          )}
        />
      </button>

      {isOpen && (
        <div className="border-t border-slate-100">
          {category.items.map((item) => (
            <div
              key={item.name}
              className="flex flex-col gap-4 border-b border-slate-50 p-6 last:border-b-0 sm:flex-row sm:items-start"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-24 w-24 flex-shrink-0 rounded-xl object-cover"
                loading="lazy"
              />
              <div className="flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-semibold text-slate-900">{item.name}</h3>
                  <span className="text-lg font-bold text-amber-500">{item.price}</span>
                </div>
                <p className="mt-1 text-sm text-slate-500">{item.description}</p>
                {item.badges && item.badges.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {item.badges.map((badge) => (
                      <span
                        key={badge}
                        className="inline-block rounded-full bg-amber-100 px-3 py-0.5 text-xs font-medium text-amber-700"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export function MenuAccordion() {
  const [openId, setOpenId] = useState<string | null>('starters')

  const toggle = (id: string) => {
    setOpenId((current) => (current === id ? null : id))
  }

  return (
    <section id="menu" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900">Our Menu</h2>
        <p className="mx-auto mt-3 max-w-md text-center text-sm text-slate-500">
          Explore our curated selection of dishes — click a category to expand.
        </p>

        <div className="mt-12 flex flex-col gap-4">
          {categories.map((category) => (
            <AccordionItem
              key={category.id}
              category={category}
              isOpen={openId === category.id}
              onToggle={() => toggle(category.id)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
