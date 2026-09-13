import { Calendar, ChevronRight } from 'lucide-react'

const posts = [
  {
    image: 'https://picsum.photos/seed/tidal-blog1/400/250',
    date: 'Sep 12, 2026',
    title: 'Top 10 Destinations for Your Next Adventure',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    image: 'https://picsum.photos/seed/tidal-blog2/400/250',
    date: 'Sep 10, 2026',
    title: 'How to Pack Light for Long Trips',
    excerpt:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    image: 'https://picsum.photos/seed/tidal-blog3/400/250',
    date: 'Sep 8, 2026',
    title: 'Budget Travel Tips for 2026',
    excerpt:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
] as const

export function Blog() {
  return (
    <section id="blog" aria-label="Blog" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand">Our Blog</p>
          <h2 className="mt-3 text-3xl font-bold text-text-primary">Latest Blog Posts</h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group overflow-hidden rounded-lg border border-gray-100 shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-1 text-xs text-text-secondary">
                  <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                  <time>{post.date}</time>
                </div>
                <h3 className="mt-3 text-lg font-semibold text-text-primary">{post.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">{post.excerpt}</p>
                <a
                  href="#blog"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand transition-colors hover:text-brand-dark"
                >
                  Read More
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
