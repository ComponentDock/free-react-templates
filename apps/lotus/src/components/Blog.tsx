import { posts } from '../data'

export function Blog() {
  return (
    <section id="blog" aria-label="Our blog" className="bg-mist py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-medium text-ink md:text-4xl">Our Blog</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Notes on practice, breath, and building a routine that lasts.
          </p>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {posts.map((post) => (
            <article key={post.title} className="flex flex-col bg-white shadow-sm">
              <img src={post.image} alt="" loading="lazy" className="h-44 w-full object-cover" />
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs uppercase tracking-widest text-muted">
                  {post.date} · {post.byline}
                </p>
                <h3 className="mt-3 text-lg font-medium leading-snug text-ink">{post.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>
                <a
                  href="#blog"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-dark transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                >
                  Read more
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
