import { Wine, Coffee, UtensilsCrossed } from 'lucide-react'

const AMENITIES = [
  {
    title: 'Free Drinks',
    description: 'Complimentary welcome drinks upon arrival',
    icon: Wine,
    image: 'https://picsum.photos/seed/lexicon-guest1/400/500',
  },
  {
    title: 'Free Breakfast',
    description: 'Daily buffet breakfast included',
    icon: Coffee,
    image: 'https://picsum.photos/seed/lexicon-guest2/400/500',
  },
  {
    title: 'Free Dinner',
    description: 'Enjoy a complimentary dinner on your first night',
    icon: UtensilsCrossed,
    image: 'https://picsum.photos/seed/lexicon-guest3/400/500',
  },
]

export function Guests() {
  return (
    <section className="section-padding bg-paper">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">
            We Offer to Our Guest
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {AMENITIES.map((item) => (
            <div key={item.title} className="group relative overflow-hidden rounded">
              <img
                src={item.image}
                alt={item.title}
                className="h-80 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-ink/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <item.icon size={40} className="text-brand" aria-hidden="true" />
                <h3 className="mt-4 font-display text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-2 px-6 text-center text-sm text-white/80">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
