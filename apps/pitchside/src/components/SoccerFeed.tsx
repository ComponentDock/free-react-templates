import { soccerFeed } from '../data'
import { SectionTitle } from './SectionTitle'

/** Soccer feed (reference `.soccer-section`): four tall photo cards with a
 *  red tag top-left and a white title + pipe-separated meta at the bottom. */
export function SoccerFeed() {
  return (
    <section id="feed" className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
      <SectionTitle>Soccer Feed</SectionTitle>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {soccerFeed.map((item) => (
          <article key={item.title} className="relative h-[405px] overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"
              aria-hidden="true"
            />
            <span className="absolute left-4 top-4 bg-brand px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest text-white">
              {item.tag}
            </span>
            <div className="absolute inset-x-4 bottom-6">
              <h5 className="text-lg font-medium text-white">
                <a href="#feed" className="transition-colors hover:text-brand">
                  {item.title}
                </a>
              </h5>
              <p className="mt-2 text-xs uppercase tracking-wide text-white/70">
                <span>{item.author}</span>
                <span className="mx-1.5 text-brand">|</span>
                <span>{item.date}</span>
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
