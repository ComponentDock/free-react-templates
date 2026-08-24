import { NEWS, NEWS_BLURB, NEWS_HEADING } from '../data'

/* .site-section.bg-light — News & Events on the light #EDF0F5 background:
   3 cards (image + white p-4 text block with an uppercase secondary date
   and a black headline link), 3-up on desktop, stacked ≤767px. */
export function News() {
  return (
    <section id="news" aria-label="News and events" className="bg-soft py-[7em]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="font-heading text-2xl font-bold uppercase tracking-[0.2em] text-black lg:text-[2rem]">
            {NEWS_HEADING}
          </h2>
          <div aria-hidden="true" className="mx-auto mt-4 h-[2px] w-[70px] bg-brand" />
          <p className="mt-4 leading-relaxed text-ink">{NEWS_BLURB}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {NEWS.map((card) => (
            <article key={card.title}>
              <a href="#news" className="block overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${card.seed}/800/600`}
                  alt=""
                  loading="lazy"
                  className="h-auto w-full object-cover"
                />
              </a>
              <div className="bg-white p-4">
                <span className="block text-xs font-normal uppercase tracking-wide text-secondary">
                  {card.date}
                </span>
                <h3 className="mt-2">
                  <a href="#news" className="text-[18px] font-bold text-black hover:text-brand">
                    {card.title}
                  </a>
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
