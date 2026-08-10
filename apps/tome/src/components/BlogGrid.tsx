import { blogEntries, imgUrl } from '../data'

export function BlogGrid() {
  return (
    <section
      aria-label="Blog entries"
      className="grid gap-x-8 gap-y-14 px-6 py-16 sm:grid-cols-2 lg:px-12 lg:py-20"
    >
      {blogEntries.map((entry) => (
        <article key={entry.heading} className="group">
          <a
            href="#top"
            className="block overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            <img
              src={imgUrl(entry.seed, 600, 400)}
              alt={entry.heading}
              className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </a>
          <div className="py-4">
            <p className="text-xs font-normal uppercase tracking-[2px] text-brand">
              <a
                href="#top"
                className="transition-colors hover:text-brand/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60"
              >
                {entry.date}
              </a>
              <span aria-hidden="true"> · </span>
              <a
                href="#top"
                className="transition-colors hover:text-brand/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60"
              >
                {entry.author}
              </a>
            </p>
            <h3 className="mt-3 font-display text-[28px] font-normal leading-snug text-black transition-colors group-hover:text-brand">
              <a
                href="#top"
                className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60"
              >
                {entry.heading}
              </a>
            </h3>
            <p className="mt-3 text-sm font-light leading-relaxed text-body">{entry.excerpt}</p>
          </div>
        </article>
      ))}
    </section>
  )
}
