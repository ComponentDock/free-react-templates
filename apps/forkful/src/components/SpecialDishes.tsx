import { ArrowRight } from 'lucide-react'

const specials = [
  {
    number: '01.',
    name: 'Grilled Beef with potatoes',
    price: '$29.00',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    image: 'forkful-special-1',
  },
  {
    number: '02.',
    name: 'Grilled Chicken special',
    price: '$29.00',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    image: 'forkful-special-2',
  },
] as const

export function SpecialDishes() {
  return (
    <section className="bg-paper py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-16 text-center">
          <h2 className="font-display text-3xl font-bold italic text-heading sm:text-4xl">
            Our special <span className="text-brand">dishes</span>
          </h2>
        </div>
        <div className="space-y-16">
          {specials.map((dish) => (
            <article key={dish.number} className="grid items-center gap-8 md:grid-cols-2">
              <div className="flex items-start gap-6">
                <span className="font-display text-6xl font-bold text-brand/30">{dish.number}</span>
                <div>
                  <h3 className="font-display text-2xl font-bold text-heading">{dish.name}</h3>
                  <p className="mt-4 leading-relaxed text-mist">{dish.description}</p>
                  <span className="mt-4 inline-block font-display text-xl font-bold text-brand">
                    {dish.price}
                  </span>
                  <div className="mt-6">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-brand transition-colors hover:text-heading"
                    >
                      Book a Table
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={`https://picsum.photos/seed/${dish.image}/700/450`}
                  alt={dish.name}
                  className="h-full w-full object-cover"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
