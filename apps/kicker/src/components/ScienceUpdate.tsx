import { SectionTitle } from './SectionTitle'

const SCIENCE_CARDS = [
  {
    kicker: 'Science',
    headline: '26 last-minute holiday gifts that are still thoughtful and unique',
    byline: 'by Emily R.',
    image: 'https://picsum.photos/seed/kicker-sci1/400/250',
  },
  {
    kicker: 'Science',
    headline: 'The Amex Business Platinum vs. the Amex Business Gold',
    byline: 'by David K.',
    image: 'https://picsum.photos/seed/kicker-sci2/400/250',
  },
  {
    kicker: 'Science',
    headline: 'Lights that warn planes of obstacles were exposed to Open Internet',
    byline: 'by Marcus T.',
    image: 'https://picsum.photos/seed/kicker-sci3/400/250',
  },
  {
    kicker: 'Science',
    headline: "Substituting 'follow your passion' with 'find your purpose'",
    byline: 'by Sarah Chen',
    image: 'https://picsum.photos/seed/kicker-sci4/400/250',
  },
]

export function ScienceUpdate() {
  return (
    <section className="px-4 pb-8 lg:px-[88px]">
      <SectionTitle title="Science Update" />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {SCIENCE_CARDS.map((card) => (
          <article key={card.headline} className="group">
            <div className="overflow-hidden">
              <img
                src={card.image}
                alt={card.headline}
                className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="pt-5">
              <span className="font-chivo text-[14px] font-bold capitalize text-brand-red">
                {card.kicker}
              </span>
              <h3 className="mt-2 font-chivo text-[22px] font-bold leading-[1.4] text-ink transition-colors group-hover:text-brand-red lg:text-[30px]">
                <a href="#">{card.headline}</a>
              </h3>
              <p className="mt-3 font-chivo text-[16px] font-bold text-ink">{card.byline}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
