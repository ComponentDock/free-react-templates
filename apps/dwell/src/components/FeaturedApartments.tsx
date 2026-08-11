import { FEATURED_APARTMENTS, FEATURED_BLURB, FEATURED_HEADING } from '../data'

function HighlightCard({ title, price, image }: { title: string; price: string; image: string }) {
  return (
    <a href="#apartments" className="group relative block h-[300px] overflow-hidden">
      <img
        src={image}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute bottom-4 left-0">
        <h3 className="mb-2 inline-block bg-brand px-3 py-1 text-[15px] font-normal text-white shadow-[10px_0_0_0_#e3c4a8]">
          {title}
        </h3>
        <br />
        <span className="inline-block bg-black px-3 py-1 text-[15px] text-white shadow-[10px_0_0_0_#000]">
          {price}
        </span>
      </div>
    </a>
  )
}

/* .site-block-retro — Featured Apartments collage: left column (48% width)
   one tall card; right column (48%, 8% gutter) two stacked 300px cards.
   Columns stack full-width ≤767px (left card keeps 300px height + 8% mb). */
export function FeaturedApartments() {
  const [primary, ...stacked] = FEATURED_APARTMENTS
  return (
    <section id="featured" aria-label="Featured apartments" className="py-[7em]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="font-heading text-2xl font-bold uppercase tracking-[0.2em] text-black lg:text-[2rem]">
            {FEATURED_HEADING}
          </h2>
          <div aria-hidden="true" className="mx-auto mt-4 h-[2px] w-[70px] bg-brand" />
          <p className="mt-4 leading-relaxed text-ink">{FEATURED_BLURB}</p>
        </div>

        <div className="flex flex-col gap-[8%] md:flex-row">
          <div className="md:w-1/2">
            <HighlightCard
              title={primary!.title}
              price={primary!.price}
              image={`https://picsum.photos/seed/${primary!.seed}/900/700`}
            />
          </div>
          <div className="flex flex-col gap-[8%] md:w-1/2">
            {stacked.map((card) => (
              <HighlightCard
                key={card.title}
                title={card.title}
                price={card.price}
                image={`https://picsum.photos/seed/${card.seed}/800/600`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
