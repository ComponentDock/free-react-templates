import { NEWS_POSTS } from '../data'

export function News() {
  return (
    <section id="news" className="bg-cloud py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-ink md:text-4xl">School News</h2>
          <p className="mx-auto max-w-2xl text-mist">
            Stay updated with the latest happenings and announcements from our learning center.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {NEWS_POSTS.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-lg bg-paper shadow-sm transition-shadow hover:shadow-md"
            >
              <img src={post.image} alt={post.title} className="h-48 w-full object-cover" />
              <div className="p-6">
                <time className="mb-2 block text-xs text-mist">{post.date}</time>
                <h3 className="mb-2 text-lg font-semibold text-ink">{post.title}</h3>
                <p className="mb-4 text-sm text-mist">{post.excerpt}</p>
                <a
                  href="#news"
                  className="text-sm font-medium text-brand transition-colors hover:text-brand-dark"
                >
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
