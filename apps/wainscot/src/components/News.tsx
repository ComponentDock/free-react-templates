import { newsCards, newsSubtext, newsTitle } from '../data'

export function News() {
  return (
    <section id="news-section" className="bg-white py-[120px]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-[34px] font-light text-ink">{newsTitle}</h2>
          <p className="mt-4 text-[15px] leading-7 text-body">{newsSubtext}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {newsCards.map((card) => (
            <article key={card.title} className="group">
              <div className="overflow-hidden rounded-[5px]">
                <img
                  src={card.image}
                  alt={card.alt}
                  className="h-[220px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-6 text-lg font-medium text-ink">
                <a href="#news-section" className="transition-colors hover:text-brand">
                  {card.title}
                </a>
              </h3>
              <p className="mt-3 text-sm leading-6 text-body">{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
