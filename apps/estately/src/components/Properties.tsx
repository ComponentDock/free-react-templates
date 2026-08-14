import { cn } from '@free-react-templates/ui'
import { properties } from '../data'

/** "Recently Add Homes" — three property cards, each with a photo, an
 *  absolutely positioned badge, a price, a title, a paragraph and a red
 *  underline link. */
export function Properties() {
  return (
    <section id="buy" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 pb-24 lg:px-8 lg:pb-[110px]">
        <h2 className="mb-16 text-center font-heading text-4xl font-bold text-heading lg:mb-[90px] lg:text-[44px]">
          {properties.title}
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {properties.cards.map((card) => (
            <article key={card.price} className="mb-0 lg:mb-14">
              <div className="relative overflow-hidden">
                <img src={card.image} alt="" loading="lazy" className="w-full" />
                <span
                  className={cn(
                    'absolute left-0 top-0 min-w-[87px] px-3 py-3 text-center font-heading text-lg font-bold text-white',
                    card.badge === 'Offer' ? 'bg-offer' : 'bg-brand',
                  )}
                >
                  {card.badge}
                </span>
              </div>
              <h3 className="mt-6 font-heading text-3xl font-bold text-heading">{card.price}</h3>
              <h5 className="mt-2 font-heading text-lg font-medium text-heading">{card.title}</h5>
              <p className="mt-3 text-[15px] leading-7 text-body">{card.text}</p>
              <a
                href="#buy"
                className="mt-5 inline-block border-b border-brand pb-0.5 font-heading text-lg font-bold text-brand transition-opacity hover:opacity-80"
              >
                Find out more
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
