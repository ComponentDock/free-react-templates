import { featureCards } from '../data'

/** FeatureCards: three bg-image cards overlapping the hero bottom by -70px.
 *  On pointer devices the text reveals on hover/focus (zoom + dark overlay);
 *  on small viewports the text is always visible (no hover dependency). */
export function FeatureCards() {
  return (
    <section
      aria-label="Club features"
      className="relative z-10 mx-auto -mt-10 max-w-7xl px-4 lg:-mt-[70px] lg:px-8"
    >
      <div className="grid gap-6 md:grid-cols-3">
        {featureCards.map((card) => (
          <article key={card.title} className="group relative h-[420px] overflow-hidden">
            <img
              src={card.image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div
              className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/90 group-focus-within:bg-black/90"
              aria-hidden="true"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100">
              <h3 className="text-xl font-bold text-white">{card.title}</h3>
              <p className="mt-2 max-w-xs text-sm text-card-copy">{card.body}</p>
              <a
                href="#news"
                className="mt-4 inline-block bg-brand px-4 py-2 text-xs font-light uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#d92f24]"
              >
                Read More
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
