import { Clock, ShoppingCart } from 'lucide-react'

const DEALS = [
  {
    id: 1,
    category: 'Headphones',
    name: 'Beoplay H7',
    originalPrice: 300,
    salePrice: 225,
    image: 'https://picsum.photos/seed/techvault-deal1/300/300',
  },
  {
    id: 2,
    category: 'Smartphones',
    name: 'Galaxy S21',
    originalPrice: 999,
    salePrice: 799,
    image: 'https://picsum.photos/seed/techvault-deal2/300/300',
  },
]

export function DealsOfTheWeek() {
  return (
    <section className="bg-mist py-12">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-8 font-display text-2xl font-bold text-ink">Deals of the Week</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {DEALS.map((deal) => (
            <div
              key={deal.id}
              className="flex flex-col items-center gap-6 rounded-lg bg-white p-6 shadow-sm md:flex-row"
            >
              <img
                src={deal.image}
                alt={deal.name}
                className="h-48 w-48 flex-shrink-0 object-contain"
              />
              <div className="flex-1">
                <a href="#" className="text-sm text-primary-400 hover:underline">
                  {deal.category}
                </a>
                <h3 className="mt-1 font-display text-lg font-bold text-ink">{deal.name}</h3>
                <div className="mt-2 flex items-baseline gap-3">
                  <span className="text-sm text-smoke line-through">${deal.originalPrice}</span>
                  <span className="text-xl font-bold text-sale">${deal.salePrice}</span>
                </div>
                <div className="mt-4 rounded bg-ice p-3">
                  <div className="flex items-center gap-2 text-xs text-smoke">
                    <Clock className="h-3 w-3" />
                    <span className="font-semibold text-ink">Hurry Up</span>
                    <span>Offer ends in:</span>
                  </div>
                  <div className="mt-2 flex gap-2">
                    {['02', '34', '56'].map((val, i) => (
                      <div
                        key={i}
                        className="flex h-10 w-10 items-center justify-center rounded bg-primary-400 font-display text-sm font-bold text-white"
                      >
                        {val}
                      </div>
                    ))}
                  </div>
                </div>
                <button className="mt-4 inline-flex items-center gap-2 rounded bg-primary-400 px-5 py-2 text-sm font-semibold text-white hover:bg-primary-500 transition-colors">
                  <ShoppingCart className="h-4 w-4" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
