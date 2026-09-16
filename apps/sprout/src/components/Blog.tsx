import { blogPosts } from '../data'

export function Blog() {
  return (
    <section id="blog" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-ink">Latest Blog Posts</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="group overflow-hidden rounded-none bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative bg-brand-dark p-6 text-center text-white">
                <span className="block text-4xl font-bold">{post.day}</span>
                <span className="text-sm">
                  {post.month} {post.year}
                </span>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-lg font-bold text-ink">{post.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-body">{post.excerpt}</p>
                <a
                  href="#"
                  className="text-sm font-medium text-brand transition-colors hover:text-brand-hover"
                >
                  Read more →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
