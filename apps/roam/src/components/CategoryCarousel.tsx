import { Calendar, MessageCircle } from 'lucide-react'
import { categoryCards, imgUrl, readMoreLabel } from '../data'

export function CategoryCarousel() {
  return (
    <section aria-label="Travel categories" className="bg-white pt-[150px] pb-[120px]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="mb-[50px] max-w-[510px] font-display text-5xl leading-tight font-bold text-ink">
          Best Travel Experience Within the Universe.
        </h2>
      </div>
      <div className="flex gap-6 overflow-x-auto px-4 pb-4 sm:px-6 lg:px-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]">
        {categoryCards.map((card) => (
          <article key={card.seed} className="group relative w-72 shrink-0 overflow-hidden bg-ink">
            <img
              src={imgUrl(card.seed, 600, 450)}
              alt=""
              className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/20" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white">
              <h3 className="font-display text-2xl font-bold">
                <a
                  href="#"
                  className="transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                >
                  {card.title}
                </a>
              </h3>
              <div className="mt-3 flex items-center gap-4 text-xs">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 text-aqua" aria-hidden="true" />
                  {card.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <MessageCircle className="h-3.5 w-3.5 text-sky" aria-hidden="true" />
                  {card.comments}
                </span>
              </div>
              <a
                href="#"
                className="mt-3 inline-block text-[15px] font-medium transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                {readMoreLabel}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
