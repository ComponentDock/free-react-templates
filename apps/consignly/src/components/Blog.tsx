import { BLOG_POSTS } from '../data'

/* Blog — "Latest News" grid of four cards with a zooming photo, title,
   date, excerpt, and a Read more link. */
export function Blog() {
  return (
    <section aria-label="Blog" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <span className="text-[11px] font-bold uppercase tracking-[.1rem] text-label">News</span>
        <h2 className="mt-3 font-display text-3xl font-bold text-black">Latest News</h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {BLOG_POSTS.map((post) => (
            <article key={post.title + post.date} className="group">
              <div className="relative overflow-hidden rounded">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 bg-brand/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold leading-snug text-black">
                <a href="#blog" className="transition-colors hover:text-brand">
                  {post.title}
                </a>
              </h3>
              <p className="mt-1 text-sm text-muted">{post.date}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{post.excerpt}</p>
              <a
                href="#blog"
                className="mt-3 inline-block text-[11px] font-bold uppercase tracking-[.1rem] text-black transition-colors hover:text-brand"
              >
                Read more
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
