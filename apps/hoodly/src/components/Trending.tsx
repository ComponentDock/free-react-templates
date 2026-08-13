import { trending } from '../data'

const tagClasses = {
  yellow: 'bg-tag-yellow',
  blue: 'bg-tag-blue',
  green: 'bg-tag-green',
  purple: 'bg-tag-purple',
} as const

/** Light "Top trending for your city" section: four listing cards with a
 *  circular photo, pink rating circle, title, address, blurb, status pills,
 *  and a colored FEATURED tag. */
export function Trending() {
  return (
    <section id="trending" aria-label="Trending listings" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-ink md:text-[48px]">{trending.eyebrow}</h2>
          <p className="mt-3 text-lg text-muted">{trending.subline}</p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {trending.cards.map((card) => (
            <article key={card.title} className="relative flex gap-5 bg-light p-4 pr-4 pl-2">
              <span
                className={`absolute right-0 top-0 px-3 py-1 text-xs font-bold uppercase text-white ${tagClasses[card.tagColor]}`}
              >
                {card.tag}
              </span>

              <div className="relative shrink-0">
                <img
                  src={card.image}
                  alt=""
                  className="h-[185px] w-[185px] rounded-full object-cover"
                />
                <span className="absolute right-0 top-0 flex h-[55px] w-[55px] items-center justify-center rounded-full bg-brand text-base font-black text-white">
                  {card.rating}
                </span>
              </div>

              <div className="py-4">
                <h3 className="text-[22px] font-bold text-ink">{card.title}</h3>
                <span className="mt-1 block text-base font-bold text-brand">{card.address}</span>
                <p className="mt-2 text-base text-muted">{card.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-block bg-brand px-4 py-1.5 text-sm text-white">
                    {card.status}
                  </span>
                  {card.statusAlt && (
                    <span className="inline-block bg-open-grey px-4 py-1.5 text-sm text-white">
                      {card.statusAlt}
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
