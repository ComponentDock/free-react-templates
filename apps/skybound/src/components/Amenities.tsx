import { AMENITIES } from '../data/content'

export function Amenities() {
  return (
    <section id="amenities" className="relative section-gap bg-white">
      <div aria-hidden="true" className="amenities-band" />
      <div className="relative mx-auto max-w-7xl px-6">
        <h1 className="section-title text-left">
          {AMENITIES.titleFirst}
          <br />
          {AMENITIES.titleSecond}
        </h1>
        <p className="mb-14 max-w-xl">{AMENITIES.text}</p>

        <div className="grid gap-8 md:grid-cols-3">
          {AMENITIES.cards.map((card) => (
            <article key={card.src} className="info-card">
              <div className="sheen">
                <img src={card.src} alt={card.alt} className="h-[220px] w-full object-cover" />
              </div>
              <div className="p-[25px]">
                <p className="mb-2 text-xs uppercase tracking-wide text-body">{card.meta}</p>
                <h5 className="mb-3 text-lg">{card.title}</h5>
                <p>{card.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
