import { Wine, Fish, Coffee, Salad } from 'lucide-react'

const features = [
  {
    icon: Wine,
    title: 'Drinks',
    description: 'Refreshing beverages crafted with care to complement your meal.',
  },
  {
    icon: Fish,
    title: 'Sea Foods',
    description: 'Freshly caught seafood prepared with authentic coastal flavors.',
  },
  {
    icon: Coffee,
    title: 'Cup Coffees',
    description: 'Premium roasted beans brewed to perfection every time.',
  },
  {
    icon: Salad,
    title: 'Fresh Salad',
    description: 'Garden-fresh greens with seasonal vegetables and house dressings.',
  },
]

export function Features() {
  return (
    <section id="about" className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="flex flex-col items-center">
              <f.icon className="mb-4 h-12 w-12 text-flame-600" />
              <h3 className="mb-2 text-lg font-bold">{f.title}</h3>
              <p className="text-sm text-gray-500">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
