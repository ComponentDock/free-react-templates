import { Utensils, Hotel, Music, Coffee, Landmark } from 'lucide-react'

const CATEGORIES = [
  { name: 'Restaurants', icon: Utensils },
  { name: 'Hotels', icon: Hotel },
  { name: 'Nightlife', icon: Music },
  { name: 'Coffeeshops', icon: Coffee },
  { name: 'Culture', icon: Landmark },
] as const

export function Categories() {
  return (
    <div className="relative z-20 -mt-16 max-w-6xl mx-auto px-4">
      <div className="bg-white rounded shadow-[0_32px_114px_rgba(0,0,0,0.35)] flex flex-col md:flex-row">
        {CATEGORIES.map((cat) => (
          <a
            key={cat.name}
            href="#"
            className="flex-1 flex flex-col md:flex-row items-center gap-3 py-6 px-4 hover:bg-gray-50 transition-colors text-center md:text-left"
          >
            <div className="w-14 h-14 rounded-full bg-brand/10 flex items-center justify-center">
              <cat.icon className="w-7 h-7 text-brand" />
            </div>
            <span className="text-sm font-semibold text-text-primary">{cat.name}</span>
          </a>
        ))}
      </div>
    </div>
  )
}
