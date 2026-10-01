import { NEWS } from '../data/content'
import { SkewedChip } from './SkewedButton'

export function LatestNews() {
  return (
    <section id="blog" className="bg-white px-4 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="font-display text-sm font-bold uppercase tracking-[4px] text-brand">
            Insight and Trends
          </span>
          <h2 className="mt-2.5 font-display text-3xl font-bold uppercase leading-[48px] text-navy md:text-4xl">
            Latest news company
          </h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {NEWS.map(({ title, meta, excerpt, seed }) => (
            <article key={title} className="flex flex-col">
              <div className="relative">
                <img
                  src={`https://picsum.photos/seed/${seed}/600/380`}
                  alt={title}
                  className="h-56 w-full object-cover"
                  loading="lazy"
                />
                <SkewedChip className="absolute left-4 top-4">Guides</SkewedChip>
                <h3 className="absolute bottom-0 left-0 right-0 bg-navy/80 p-4 font-display text-base font-bold uppercase tracking-[1.5px] text-white">
                  {title}
                </h3>
              </div>
              <p className="mt-4 font-body text-xs uppercase tracking-wide text-meta">{meta}</p>
              <p className="mt-3 font-body text-sm leading-6 text-body">{excerpt}</p>
              <a
                href="#blog"
                className="mt-4 font-display text-sm font-bold uppercase tracking-[2px] text-brand hover:text-brandhover"
              >
                Read More
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
