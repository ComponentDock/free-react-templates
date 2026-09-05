import { Clock, Bookmark } from 'lucide-react'

const posts = [
  {
    image: 'https://picsum.photos/seed/counsel-blog-1/600/400',
    alt: 'Legal rights article',
    category: 'Legal Tips',
    date: 'March 15, 2024',
    title: 'Understanding Your Legal Rights as a Business Owner',
    excerpt:
      'Every business owner should know their fundamental legal rights. This guide covers the essential protections available to you.',
  },
  {
    image: 'https://picsum.photos/seed/counsel-blog-2/600/400',
    alt: 'Family law article',
    category: 'Family Law',
    date: 'March 10, 2024',
    title: 'Navigating Divorce: What You Need to Know',
    excerpt:
      'Divorce proceedings can be overwhelming. Learn about the key steps and how to protect your interests throughout the process.',
  },
  {
    image: 'https://picsum.photos/seed/counsel-blog-3/600/400',
    alt: 'Estate planning article',
    category: 'Estate Planning',
    date: 'March 5, 2024',
    title: 'Essential Steps for Effective Estate Planning',
    excerpt:
      'Proper estate planning ensures your assets are protected and distributed according to your wishes. Here is how to get started.',
  },
]

export function Blog() {
  return (
    <section id="blog" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">Latest From Blog</h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-xl border border-gray-200 bg-white transition-shadow hover:shadow-lg"
            >
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.alt}
                  className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-mist">
                  <span className="rounded bg-brand/10 px-2 py-1 font-semibold text-brand">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" aria-hidden="true" />
                    {post.date}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-ink">{post.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">{post.excerpt}</p>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand hover:text-brand-dark"
                >
                  <Bookmark className="h-4 w-4" aria-hidden="true" />
                  Read More
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
