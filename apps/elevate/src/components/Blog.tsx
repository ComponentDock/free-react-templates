import { ArrowRight } from 'lucide-react'

const posts = [
  {
    title: '5 Habits of Highly Effective Coaches',
    excerpt:
      'Discover the daily routines and mindset shifts that set top coaches apart from the rest.',
    image: 'https://picsum.photos/seed/elevate-blog-1/600/400',
    date: 'Sep 10, 2026',
  },
  {
    title: 'How to Set Goals That Actually Stick',
    excerpt:
      'A practical framework for setting and achieving meaningful goals in your coaching practice.',
    image: 'https://picsum.photos/seed/elevate-blog-2/600/400',
    date: 'Sep 5, 2026',
  },
  {
    title: 'The Power of Active Listening',
    excerpt: 'Why listening is the most underrated skill in coaching — and how to master it.',
    image: 'https://picsum.photos/seed/elevate-blog-3/600/400',
    date: 'Aug 28, 2026',
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-ink dark:text-white">Latest Insights</h2>
          <p className="mx-auto mt-4 max-w-2xl text-ink-light dark:text-gray-400">
            Tips, strategies, and stories to fuel your growth.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-colors dark:border-gray-800 dark:bg-gray-800"
            >
              <img src={post.image} alt={post.title} className="h-48 w-full object-cover" />
              <div className="p-6">
                <time className="text-xs text-ink-light dark:text-gray-400">{post.date}</time>
                <h3 className="mt-2 text-lg font-semibold text-ink dark:text-white">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-light dark:text-gray-400">
                  {post.excerpt}
                </p>
                <a
                  href="#blog"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
                >
                  Read More
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
