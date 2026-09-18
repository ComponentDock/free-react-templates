import { blog } from '../data'

export function Blog() {
  return (
    <section id="blog" className="bg-section py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <span className="block font-display text-lg font-bold italic text-brand">
            From the Pulpit
          </span>
          <h2 className="mt-2 text-4xl font-bold uppercase text-ink">Latest Blog Posts</h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {blog.map((post) => (
            <article key={post.title} className="overflow-hidden rounded bg-white shadow-sm">
              <img src={post.image} alt={post.title} className="h-48 w-full object-cover" />
              <div className="p-6">
                <span className="text-xs text-body">{post.date}</span>
                <h4 className="mt-2 text-lg font-bold text-ink">{post.title}</h4>
                <p className="mt-2 text-sm text-body">
                  by{' '}
                  <a
                    href="#"
                    className="font-semibold text-brand hover:text-brand-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                  >
                    {post.author}
                  </a>
                </p>
                <span className="mt-3 inline-block rounded bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
                  {post.category}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
