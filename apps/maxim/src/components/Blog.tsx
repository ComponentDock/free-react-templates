import { BLOG_POSTS } from '../data'

/* Blog — 3-column grid of blog post cards with image, date, title, excerpt. */
export function Blog() {
  return (
    <section id="blog-section" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">Blog</span>
          <h2 className="mt-2 text-3xl font-bold text-ink">Recent Posts</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <article key={post.title} className="group">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={post.photo}
                  alt={post.title}
                  className="aspect-[16/10] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-4">
                <span className="text-xs text-muted">{post.date}</span>
                <h3 className="mt-1 text-lg font-bold text-ink transition-colors group-hover:text-brand">
                  <a href="#home-section">{post.title}</a>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
