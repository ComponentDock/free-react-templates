import { NEWS_POSTS } from '../data'

/* News — "Latest News" section with a static grid of three post cards
   (image, date, title link, excerpt, Read more). */
export function News() {
  return (
    <section id="news-section" aria-label="News" className="bg-white px-4 py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl font-bold uppercase text-brand">Latest News</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {NEWS_POSTS.map((post, index) => (
            <article
              key={`${post.title}-${index}`}
              className="overflow-hidden bg-white shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
            >
              <img
                src={post.image}
                alt={`News image ${index + 1}`}
                className="aspect-[3/2] w-full object-cover"
              />
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-wide text-brand">{post.date}</p>
                <h3 className="mt-2 font-display text-lg font-semibold text-ink">
                  <a href="#news-section" className="transition-colors hover:text-brand">
                    {post.title}
                  </a>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{post.excerpt}</p>
                <p className="mt-5">
                  <a href="#news-section" className="text-sm font-medium text-brand">
                    Read more
                  </a>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
