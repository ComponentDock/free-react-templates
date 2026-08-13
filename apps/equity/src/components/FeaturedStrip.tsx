import { featuredCards } from '../data'

/** Featured services strip (reference `.site-section` image cards right below
 *  the hero): a 3-column row of photo cards that overlaps the hero's bottom
 *  edge via a negative top margin on a raised z-index. */
export function FeaturedStrip() {
  return (
    <section aria-label="Featured services" className="relative z-10 -mt-24 px-4 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
        {featuredCards.map(({ title, text, image }) => (
          <article key={title} className="bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
            <img src={image} alt="" className="h-52 w-full object-cover" loading="lazy" />
            <div className="p-7">
              <h3 className="font-heading text-xl font-bold text-[#25262a]">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#939393]">{text}</p>
              <a
                href="#services"
                className="mt-4 inline-block text-sm font-semibold text-primary-600 underline-offset-4 hover:underline"
              >
                Read more
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
