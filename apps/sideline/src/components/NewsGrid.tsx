import { newsPosts } from '../data'

/** NewsGrid: white section with three post cards (image, title link,
 *  uppercase byline/date, excerpt; titles turn brand red on hover). */
export function NewsGrid() {
  return (
    <section id="news" className="mx-auto max-w-7xl px-4 py-20 lg:px-8" aria-label="Latest news">
      <h2 className="text-3xl font-bold text-black md:text-4xl">Latest News</h2>
      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {newsPosts.map((post) => (
          <article key={post.title}>
            <img src={post.image} alt="" className="h-56 w-full object-cover" />
            <h3 className="mt-4 text-lg font-bold">
              <a href="#news" className="text-black transition-colors hover:text-brand">
                {post.title}
              </a>
            </h3>
            <p className="mt-2 text-xs uppercase tracking-wider text-muted">
              By {post.author} • {post.date}
            </p>
            <p className="mt-3 text-sm text-ink">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
