import { blog } from '../data'

/** Recent news (reference blog cards): subheading + heading plus three cards
 *  with a thumbnail, a date block (day + month/year), the title, a meta
 *  line, and a "read more" link. */
export function Blog() {
  return (
    <section id="blog" aria-label="Recent news" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <p className="text-sm tracking-wider uppercase">{blog.subheading}</p>
        <h2 className="mt-2 text-4xl font-black text-ink">{blog.heading}</h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {blog.posts.map(({ day, month, year, title, meta, image }) => (
            <article
              key={`${day}-${month}`}
              className="group overflow-hidden rounded-[5px] border border-ink/10"
            >
              <div className="relative">
                <img
                  src={image}
                  alt={title}
                  className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-mist px-3 py-2 text-center">
                  <span className="block text-2xl leading-none font-black text-ink">{day}</span>
                  <span className="mt-1 block text-xs text-muted">
                    {month} {year}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg leading-snug font-bold text-ink">{title}</h3>
                <p className="mt-2 text-sm text-muted">{meta}</p>
                <a
                  href="#blog"
                  className="mt-4 inline-block text-sm font-bold text-gold transition-colors hover:text-ink"
                >
                  read more &rarr;
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
