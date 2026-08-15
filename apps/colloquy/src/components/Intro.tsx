import { introCards } from '../data'

export function Intro() {
  return (
    <section id="about-section" className="bg-white px-6 py-24 lg:px-36 lg:py-[115px]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        {introCards.map((card) => (
          <article key={card.title} className="group bg-card">
            <img src={card.image} alt="" loading="lazy" className="h-52 w-full object-cover" />
            <div className="px-6 py-8 transition-colors group-hover:bg-gradient-to-r group-hover:from-brand group-hover:to-brand-light">
              <h2 className="text-2xl font-medium text-ink group-hover:text-white">
                <a href="#speakers-section" className="transition-colors">
                  {card.title}
                </a>
              </h2>
              <p className="mt-2 text-sm text-meta group-hover:text-white">{card.subtitle}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
