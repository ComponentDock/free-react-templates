import { blogPosts, blogTitle, blogSubtitle } from '../data'

export function Blog() {
  return (
    <section id="blog-section" aria-label="Blog" className="bg-light py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-ink">{blogTitle}</h2>
          <p className="mt-4 text-body">{blogSubtitle}</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {blogPosts.map((post, i) => (
            <article key={i} className="group overflow-hidden rounded-lg bg-white shadow-sm">
              <a href="#" className="relative block h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-3 left-3 flex items-center gap-2">
                  <span className="rounded bg-brand px-2 py-1 text-xs font-bold text-white">
                    {post.date}
                  </span>
                  <span className="rounded bg-brand px-2 py-1 text-xs font-bold text-white">
                    {post.month}
                  </span>
                </div>
              </a>
              <div className="p-5">
                <p className="text-xs text-muted">
                  Posted by: <span className="font-medium text-ink">{post.author}</span>
                </p>
                <h3 className="mt-1 text-lg font-bold text-ink">
                  <a href="#" className="transition-colors hover:text-brand">
                    {post.title}
                  </a>
                </h3>
                <p className="mt-2 text-sm text-muted">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
