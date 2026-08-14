import { ArrowRight } from 'lucide-react'
import { posts } from '../data'

/** "Latest News From Blog" — two post cards with image, date badge,
 *  category, title, and a "Read more" link. */
export function BlogSection() {
  return (
    <section id="blog" aria-label="Latest news" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Our Latest News From Our Blog
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold text-title dark:text-white">
            Latest News From Blog
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group border border-gray-200 bg-soft transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="relative">
                <img src={post.image} alt={post.title} className="h-60 w-full object-cover" />
                <span className="absolute left-4 top-4 flex h-14 w-14 flex-col items-center justify-center bg-brand text-white">
                  <span className="font-display text-lg font-bold leading-none">
                    {post.date.split(' ')[0]}
                  </span>
                  <span className="text-[10px] uppercase tracking-wide">
                    {post.date.split(' ')[1]}
                  </span>
                </span>
              </div>
              <div className="p-7">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">
                  {post.category}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold leading-snug text-title transition-colors group-hover:text-brand dark:text-white">
                  {post.title}
                </h3>
                <a
                  href={post.href}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand"
                >
                  Read more
                  <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
