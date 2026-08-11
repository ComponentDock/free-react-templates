import { ButtonLink } from '@free-react-templates/ui'
import { APARTMENTS, BROWSE_BLURB, BROWSE_CTA, BROWSE_HEADING } from '../data'

/* Section heading — uppercase Oswald 2rem, .2em letter-spacing, centered,
   with a centered 70×2px tan underline. */
function SectionHeading({ title, blurb }: { title: string; blurb: string }) {
  return (
    <div className="mx-auto mb-16 max-w-2xl text-center">
      <h2 className="font-heading text-2xl font-bold uppercase tracking-[0.2em] text-black lg:text-[2rem]">
        {title}
      </h2>
      <div aria-hidden="true" className="mx-auto mt-4 h-[2px] w-[70px] bg-brand" />
      <p className="mt-4 leading-relaxed text-ink">{blurb}</p>
    </div>
  )
}

/* a.unit-9 — 300px-tall cover-photo card with the city name on a tan
   highlight and the price on a black highlight, both using the box-shadow
   "gutter" trick (background + `10px 0 0 <same color>`) so the highlight
   extends 10px past the text end. */
function UnitCard({ title, price, image }: { title: string; price: string; image: string }) {
  return (
    <a href="#featured" className="group relative block h-[300px] overflow-hidden">
      <img
        src={image}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute bottom-4 left-0">
        <h2 className="mb-2 inline-block bg-brand px-3 py-1 text-[15px] font-normal text-white shadow-[10px_0_0_0_#e3c4a8]">
          {title}
        </h2>
        <br />
        <span className="inline-block bg-black px-3 py-1 text-[15px] text-white shadow-[10px_0_0_0_#000]">
          {price}
        </span>
      </div>
    </a>
  )
}

/* .site-section — Browse Apartments: centered heading + 4 unit-9 cards in a
   4-up row on desktop (2-up ≤991px, stacked ≤767px) + centered CTA. */
export function BrowseApartments() {
  return (
    <section id="apartments" aria-label="Browse apartments" className="py-[7em]">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading title={BROWSE_HEADING} blurb={BROWSE_BLURB} />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {APARTMENTS.map((card) => (
            <UnitCard
              key={card.city}
              title={card.city}
              price={card.price}
              image={`https://picsum.photos/seed/${card.seed}/800/600`}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <ButtonLink
            href="#featured"
            className="h-auto rounded-none bg-brand px-5 py-3 text-base font-normal uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
          >
            {BROWSE_CTA}
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
