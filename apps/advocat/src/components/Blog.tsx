import { blogPosts } from '../data'

/** Blog section with 3 cards showing image + date overlay + title. */
export function Blog() {
  return (
    <section id="blog" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">Blog</span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-ink md:text-4xl">Recent Blog</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.title} className="group">
              <a href="#blog" className="block overflow-hidden rounded-lg">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <span className="rounded bg-brand px-3 py-1.5 text-xs font-semibold text-white">
                      {post.date}
                    </span>
                  </div>
                </div>
              </a>
              <div className="mt-4">
                <h3 className="font-heading text-lg font-semibold text-ink">
                  <a href="#blog" className="transition-colors hover:text-brand">
                    {post.title}
                  </a>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-body">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
