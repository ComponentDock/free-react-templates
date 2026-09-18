import { blogPosts } from '../data'

export function News() {
  return (
    <section className="bg-white py-20" id="blog">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl text-ink">News & Updates</h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <div
              key={post.title}
              className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm"
            >
              <img src={post.image} alt={post.title} className="h-48 w-full object-cover" />
              <div className="p-6">
                <div className="mb-3 flex items-center gap-2 text-xs text-muted">
                  <span className="rounded bg-primary/10 px-2 py-0.5 text-primary">
                    {post.category}
                  </span>
                  <span>{post.date}</span>
                </div>
                <h3 className="mb-2 font-heading text-lg text-ink">{post.title}</h3>
                <a
                  href="#"
                  className="text-sm font-semibold text-primary transition-colors hover:text-primary-600"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
