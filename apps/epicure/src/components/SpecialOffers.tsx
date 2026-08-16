import { cn } from '@free-react-templates/ui'
import { offers } from '../data'

/** Special Offers: centered eyebrow + heading, then two rows of four
 *  alternating image/text cells with green prices. */
export function SpecialOffers() {
  return (
    <section id="offers" aria-label="Special Offers" className="bg-white px-6 py-20">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <span className="font-display text-xs font-bold uppercase tracking-[0.1em] text-primary">
          {offers.eyebrow}
        </span>
        <h2 className="mt-2 font-display text-4xl font-semibold uppercase text-body xl:text-5xl">
          {offers.heading}
        </h2>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-0 md:grid-cols-2 xl:grid-cols-4">
        {offers.cells.map((cell, index) => (
          <article
            key={cell.title}
            className={cn(
              'group flex flex-col',
              index === 1 && 'md:order-2 xl:order-none',
              index === 2 && 'md:order-1 xl:order-none',
            )}
          >
            <div className="h-56 overflow-hidden bg-section-grey md:h-64">
              <img
                src={cell.image}
                alt={cell.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col items-center justify-center bg-white px-8 py-8 text-center">
              <h3 className="font-display text-2xl font-semibold text-body">{cell.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{cell.blurb}</p>
              <span className="mt-4 font-display text-xl font-bold text-accent">{cell.price}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
