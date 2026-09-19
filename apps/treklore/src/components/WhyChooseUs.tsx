import { Zap, Compass, Tag } from 'lucide-react'

const cards = [
  {
    icon: Zap,
    title: 'Fast Services',
    description:
      'Quick and efficient booking with instant confirmation on all travel arrangements.',
    image: 'https://picsum.photos/seed/treklore-fast/600/400',
  },
  {
    icon: Compass,
    title: 'Expert Guides',
    description: 'Knowledgeable local guides who bring destinations to life with insider stories.',
    image: 'https://picsum.photos/seed/treklore-guides/600/400',
  },
  {
    icon: Tag,
    title: 'Best Deals',
    description: 'Unbeatable prices and exclusive discounts on tours, hotels, and experiences.',
    image: 'https://picsum.photos/seed/treklore-deals/600/400',
  },
]

export function WhyChooseUs() {
  return (
    <section aria-label="Why choose us" className="relative py-24">
      {/* Parallax background */}
      <div
        className="absolute inset-0 bg-cover bg-fixed bg-center"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/treklore-parallax/1920/800)' }}
      />
      <div className="absolute inset-0 bg-navy/80" />

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <span className="font-display text-sm font-semibold uppercase tracking-widest text-brand-blue">
            simply amazing places
          </span>
          <h2 className="mt-2 font-display text-4xl font-bold uppercase tracking-wide text-white">
            Why Choose Us?
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="overflow-hidden rounded bg-white/10 backdrop-blur-sm transition hover:bg-white/20"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={card.image}
                  alt={`${card.title} feature`}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-navy/50">
                  <card.icon className="h-12 w-12 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 font-display text-xl font-bold uppercase text-white">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/70">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
