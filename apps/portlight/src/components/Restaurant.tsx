import { cn } from '@free-react-templates/ui'

const MENU_ITEMS = [
  {
    name: 'Grilled Crab with Onion',
    price: 20,
    image: 'https://picsum.photos/seed/portlight-food-1/300/200',
    description: 'Fresh crab grilled to perfection with caramelized onions.',
  },
  {
    name: 'Lobster Thermidor',
    price: 35,
    image: 'https://picsum.photos/seed/portlight-food-2/300/200',
    description: 'Classic lobster dish with creamy mustard sauce.',
  },
  {
    name: 'Grilled Salmon',
    price: 25,
    image: 'https://picsum.photos/seed/portlight-food-3/300/200',
    description: 'Atlantic salmon with herb butter and seasonal vegetables.',
  },
  {
    name: 'Wagyu Steak',
    price: 45,
    image: 'https://picsum.photos/seed/portlight-food-4/300/200',
    description: 'Premium wagyu beef with truffle mashed potatoes.',
  },
] as const

interface RestaurantProps {
  className?: string
}

export function Restaurant({ className }: RestaurantProps) {
  return (
    <section id="restaurant" className={cn('bg-white py-20', className)}>
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-ink">Restaurant</h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          {MENU_ITEMS.map((item) => (
            <div
              key={item.name}
              className="flex gap-4 rounded-lg border border-gray-100 p-4 transition-shadow hover:shadow-md"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-20 w-20 flex-shrink-0 rounded object-cover"
              />
              <div className="flex-1">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-sm font-semibold text-ink">{item.name}</h3>
                  <span className="text-sm font-bold text-brand">${item.price}.00</span>
                </div>
                <p className="mt-1 text-xs text-mist">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a
            href="#"
            className="inline-block border-b-2 border-brand pb-1 text-sm font-semibold uppercase tracking-wider text-brand transition-colors hover:text-brand-dark"
          >
            View All Menu
          </a>
        </div>
      </div>
    </section>
  )
}
