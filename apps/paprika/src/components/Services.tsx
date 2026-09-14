import { Pizza, Coffee, Beef, Wine } from 'lucide-react'

const SERVICES = [
  {
    icon: Pizza,
    name: 'Pizzas',
    description: 'Hand-tossed dough with premium ingredients and authentic wood-fired flavor.',
  },
  {
    icon: Coffee,
    name: 'Coffee',
    description: 'Single-origin beans roasted daily for the richest, smoothest cup.',
  },
  {
    icon: Beef,
    name: 'Burgers',
    description: 'Angus beef patties with artisan buns and house-made sauces.',
  },
  {
    icon: Wine,
    name: 'Drinks',
    description: 'Curated wine list and craft cocktails to complement every dish.',
  },
]

export function Services() {
  return (
    <section className="py-16 bg-[#f8f9fa]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div key={service.name} className="text-center p-6">
              <service.icon size={48} className="mx-auto mb-4 text-[#b10400]" strokeWidth={1.5} />
              <h3 className="font-[family-name:var(--font-heading)] text-xl mb-3 text-[#333]">
                {service.name}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
