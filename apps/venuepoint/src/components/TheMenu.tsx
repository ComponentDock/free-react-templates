import { Star } from 'lucide-react'
import { type MenuCategory } from './menuData'

interface MenuCardProps {
  dish: { title: string; price: string; ingredients: string[] }
}

function MenuCard({ dish }: MenuCardProps) {
  return (
    <div className="border-b border-primary-200 py-5">
      <div className="flex items-start justify-between gap-3">
        <span className="font-body text-base font-bold text-ink">{dish.title}</span>
        <span className="shrink-0 font-body text-base font-bold text-primary-400">
          {dish.price}
        </span>
      </div>
      <ul className="mt-2 flex flex-wrap gap-2">
        {dish.ingredients.map((ing) => (
          <li key={ing} className="font-body text-xs uppercase tracking-wider text-muted">
            {ing}
          </li>
        ))}
      </ul>
      <a
        href="#"
        className="mt-3 inline-block font-body text-xs font-bold uppercase tracking-wider text-primary-400 transition-colors hover:text-primary-600"
      >
        Order Now
      </a>
    </div>
  )
}

interface TheMenuProps {
  categories?: MenuCategory[]
}

const defaultCategories: MenuCategory[] = [
  {
    title: 'Starters',
    dishes: [
      {
        title: 'Pork Tenderloin in Green Pepper',
        price: '$20',
        ingredients: ['Pork', 'Tenderloin', 'Green Pepper'],
      },
      { title: 'Shrimp with Garlic', price: '$17', ingredients: ['Shrimp', 'Garlic', 'Herbs'] },
      {
        title: 'Wild Mushroom with Chicken',
        price: '$20',
        ingredients: ['Mushroom', 'Chicken', 'Cream'],
      },
      {
        title: 'Oysters with Baked Potatoes',
        price: '$20',
        ingredients: ['Oysters', 'Potatoes', 'Butter'],
      },
      { title: 'Roast Pork', price: '$17', ingredients: ['Pork', 'Rosemary', 'Potatoes'] },
    ],
  },
  {
    title: 'Main',
    dishes: [
      { title: 'Chicken with Lemon', price: '$20', ingredients: ['Chicken', 'Lemon', 'Herbs'] },
      {
        title: 'Pork Tenderloin in Green Pepper',
        price: '$20',
        ingredients: ['Pork', 'Tenderloin', 'Green Pepper'],
      },
      { title: 'Shrimp with Garlic', price: '$17', ingredients: ['Shrimp', 'Garlic', 'Herbs'] },
      {
        title: 'Wild Mushroom with Chicken',
        price: '$20',
        ingredients: ['Mushroom', 'Chicken', 'Cream'],
      },
      {
        title: 'Oysters with Baked Potatoes',
        price: '$20',
        ingredients: ['Oysters', 'Potatoes', 'Butter'],
      },
    ],
  },
  {
    title: 'Desserts',
    dishes: [
      { title: 'Lava Cake', price: '$20', ingredients: ['Chocolate', 'Vanilla', 'Cream'] },
      { title: 'Orange Tart', price: '$17', ingredients: ['Orange', 'Pastry', 'Sugar'] },
      { title: 'Cheese Cake', price: '$20', ingredients: ['Cheese', 'Cream', 'Base'] },
      { title: 'Chocolate Mousse', price: '$17', ingredients: ['Chocolate', 'Cream', 'Egg'] },
      { title: 'Ice Cream', price: '$17', ingredients: ['Cream', 'Vanilla', 'Fruit'] },
    ],
  },
]

export function TheMenu({ categories = defaultCategories }: TheMenuProps) {
  return (
    <section id="menu" className="bg-cream py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Title bar */}
        <div className="text-center">
          <p className="font-body text-sm uppercase tracking-[0.3em] text-muted">5 Stars</p>
          <div className="my-3 flex justify-center gap-1" aria-label="5 out of 5 stars">
            {[1, 2, 3, 4, 5].map((n) => (
              <Star
                key={n}
                className="h-5 w-5 fill-accent-400 text-accent-400"
                aria-hidden="true"
              />
            ))}
          </div>
          <div className="mx-auto inline-block border-y-4 border-primary-400 px-10 py-3">
            <h2 className="font-display text-3xl text-ink md:text-4xl">The Menu</h2>
          </div>
        </div>

        {/* Three-column grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <div key={cat.title}>
              <h3 className="mb-2 font-body text-lg font-bold uppercase tracking-wider text-primary-400">
                {cat.title}
              </h3>
              <div>
                {cat.dishes.map((dish) => (
                  <MenuCard key={dish.title + dish.price} dish={dish} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
