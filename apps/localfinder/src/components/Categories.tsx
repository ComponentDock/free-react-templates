import { UtensilsCrossed, ShoppingBag, Bed, Sparkles, Store } from 'lucide-react'

const categories = [
  { name: 'Food & Drink', count: 78, icon: UtensilsCrossed, bgColor: 'bg-cat-green' },
  { name: 'Restaurant', count: 32, icon: ShoppingBag, bgColor: 'bg-cat-red' },
  { name: 'Hotels', count: 16, icon: Bed, bgColor: 'bg-cat-yellow' },
  { name: 'Beauty & Spa', count: 55, icon: Sparkles, bgColor: 'bg-cat-pink' },
  { name: 'Shopping', count: 23, icon: Store, bgColor: 'bg-cat-coral' },
]

export function Categories() {
  return (
    <section className="py-16 bg-page">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-ink mb-3">Most Popular Categories</h2>
        <p className="text-muted text-sm mb-10">
          Discover amazing places and services in your neighborhood
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div
                className={`${cat.bgColor} w-16 h-16 rounded-full flex items-center justify-center mb-4`}
              >
                <cat.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-ink font-semibold text-sm mb-1">{cat.name}</h3>
              <span className="text-muted text-xs">{cat.count} Listings</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
