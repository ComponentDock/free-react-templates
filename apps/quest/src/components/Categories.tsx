import { Building, UtensilsCrossed, ShoppingBag, Sparkles, Clapperboard } from 'lucide-react'

const CATEGORIES = [
  { name: 'Hotels', icon: Building },
  { name: 'Restaurants', icon: UtensilsCrossed },
  { name: 'Shopping', icon: ShoppingBag },
  { name: 'Beauty & Spa', icon: Sparkles },
  { name: 'Cinema', icon: Clapperboard },
] as const

export function Categories() {
  return (
    <section className="bg-brand-dark py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {CATEGORIES.map(({ name, icon: Icon }) => (
            <a
              key={name}
              href="#"
              className="flex flex-col items-center gap-3 bg-brand/10 hover:bg-brand/20 p-6 transition-colors group"
            >
              <Icon className="w-10 h-10 text-brand group-hover:scale-110 transition-transform" />
              <span className="text-white text-sm font-semibold">{name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
