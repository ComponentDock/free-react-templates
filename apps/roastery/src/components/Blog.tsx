import { Calendar, ArrowRight } from 'lucide-react'

const posts = [
  {
    title: 'The Art of Single-Origin Brewing',
    date: 'Sep 10, 2026',
    excerpt:
      'Discover how altitude, soil, and processing methods shape the flavor profile of single-origin beans.',
    image: 'https://picsum.photos/seed/blog1/600/400',
  },
  {
    title: 'Why Cold Brew Takes Time',
    date: 'Sep 3, 2026',
    excerpt:
      'Patience is the secret ingredient. Learn why our 16-hour steep produces a smoother, less acidic cup.',
    image: 'https://picsum.photos/seed/blog2/600/400',
  },
  {
    title: 'Behind the Roast: Our New Ethiopian Yirgacheffe',
    date: 'Aug 27, 2026',
    excerpt:
      'A deep dive into the tasting notes and roasting profile of our latest seasonal arrival.',
    image: 'https://picsum.photos/seed/blog3/600/400',
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="bg-paper py-20 transition-colors dark:bg-charcoal">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-brand">
            From Our Blog
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
            Coffee Stories
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-lg dark:bg-gray-900"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-mist">
                  <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                  {post.date}
                </div>
                <h3 className="mt-3 font-display text-lg font-bold text-ink dark:text-white">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-mist">{post.excerpt}</p>
                <a
                  href="#blog"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand transition-colors hover:text-brand-dark"
                >
                  Read More
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
