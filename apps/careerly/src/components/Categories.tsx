import {
  Calculator,
  Car,
  Building2,
  Wifi,
  Heart,
  Palette,
  Truck,
  UtensilsCrossed,
} from 'lucide-react'

const categories = [
  { name: 'Accounting / Finance', count: 10391, icon: Calculator },
  { name: 'Automotive Jobs', count: 2845, icon: Car },
  { name: 'Construction', count: 5120, icon: Building2 },
  { name: 'Telecommunications', count: 3672, icon: Wifi },
  { name: 'Healthcare', count: 8943, icon: Heart },
  { name: 'Design & Multimedia', count: 4218, icon: Palette },
  { name: 'Transportation', count: 3891, icon: Truck },
  { name: 'Restaurant / Food', count: 6534, icon: UtensilsCrossed },
]

export function Categories() {
  return (
    <section id="categories" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Popular Categories</h2>
          <p className="text-gray-500">Browse jobs by category and find your perfect match</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon
            return (
              <a
                key={cat.name}
                href="#"
                className="block p-6 bg-white border border-gray-100 rounded-lg hover:shadow-md hover:border-brand/30 transition-all text-center group"
              >
                <Icon className="h-10 w-10 text-brand mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-sm font-semibold text-gray-800 mb-1">{cat.name}</h3>
                <span className="text-xs text-gray-400">{cat.count.toLocaleString()} jobs</span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
