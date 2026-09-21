import { ArrowRight } from 'lucide-react'

const dishes = [
  {
    number: '01.',
    title: 'Garlic',
    subtitle: 'green beans',
    price: '$12.00',
    desc: 'Fresh garlic green beans sauteed to perfection with a hint of sea salt and olive oil, creating a simple yet elegant side dish.',
    img: 'feastly-dish1',
  },
  {
    number: '02.',
    title: 'Lemon',
    subtitle: 'rosemary chicken',
    price: '$12.00',
    desc: 'Tender chicken infused with bright lemon zest and aromatic rosemary, roasted until golden and juicy for a comforting main course.',
    img: 'feastly-dish2',
  },
] as const

export function Specials() {
  return (
    <section id="specials" className="py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-16 text-center">
          <h3 className="font-display text-3xl font-bold text-ink">
            Our <span className="text-primary-400">special</span> dishes
          </h3>
          <p className="mt-2 italic text-smoke">
            Beast kind form divide night above let moveth bearing darkness.
          </p>
        </div>

        <div className="space-y-16">
          {dishes.map((dish, i) => (
            <div
              key={dish.number}
              className={`grid items-center gap-10 md:grid-cols-2 ${i % 2 === 1 ? 'md:[direction:rtl]' : ''}`}
            >
              <div className={i % 2 === 1 ? 'md:[direction:ltr]' : ''}>
                <h1 className="relative mb-4 font-display text-5xl font-bold text-ink">
                  {dish.number}
                  <span className="absolute top-12 left-12 h-px w-48 bg-ink" />
                </h1>
                <h3 className="font-display text-2xl font-bold text-ink">
                  <span className="text-primary-400">{dish.title}</span>
                  <br />
                  {dish.subtitle}
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-smoke">{dish.desc}</p>
                <span className="mt-2 block text-2xl font-bold text-primary-400">{dish.price}</span>
                <a
                  href="#contact"
                  className="group/btn mt-4 inline-flex items-center gap-2 text-sm font-medium uppercase text-ink transition-colors hover:text-primary-400"
                >
                  Book a table
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </a>
              </div>
              <div className={i % 2 === 1 ? 'md:[direction:ltr]' : ''}>
                <img
                  src={`https://picsum.photos/seed/${dish.img}/500/400`}
                  alt={dish.title + ' ' + dish.subtitle}
                  className="w-full rounded object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
