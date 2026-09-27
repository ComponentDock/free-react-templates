import { Building2, Castle, Home, UtensilsCrossed, Briefcase } from 'lucide-react'

interface Category {
  icon: React.ReactNode
  name: string
  count: number
}

const categories: Category[] = [
  { icon: <Building2 size={28} />, name: 'Apartment', count: 124 },
  { icon: <Castle size={28} />, name: 'Villa', count: 56 },
  { icon: <Home size={28} />, name: 'House', count: 89 },
  { icon: <UtensilsCrossed size={28} />, name: 'Restaurant', count: 32 },
  { icon: <Briefcase size={28} />, name: 'Office', count: 67 },
]

export function Categories() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="group cursor-pointer rounded-lg border border-gray-100 bg-bg-light p-6 text-center transition-all hover:border-brand hover:shadow-md"
            >
              <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                {cat.icon}
              </div>
              <h4 className="font-heading text-base font-bold text-text-dark">{cat.name}</h4>
              <p className="mt-1 text-xs text-text-muted">{cat.count} Properties</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
