const BLOG_ITEMS = [
  {
    image: 'https://picsum.photos/seed/lookcraft-blog1/600/400',
    title: 'The Art of Natural Light Photography',
    date: 'March 15, 2024',
    excerpt:
      'Discover how to harness natural light to create stunning photographs that evoke emotion and tell compelling stories.',
  },
  {
    image: 'https://picsum.photos/seed/lookcraft-blog2/600/400',
    title: 'Behind the Lens: Studio Techniques',
    date: 'March 8, 2024',
    excerpt:
      'A deep dive into studio lighting setups, composition techniques, and post-processing workflows used by professionals.',
  },
]

export function Blog() {
  return (
    <section id="news" aria-label="Blog" className="bg-surface-light py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left: section title */}
          <div>
            <h2 className="text-3xl font-bold uppercase tracking-wide text-navy lg:text-4xl">
              Latest from the blog
            </h2>
            <p className="mt-4 max-w-md text-text-secondary">
              Tips, stories, and insights from the world of photography and visual arts.
            </p>
          </div>

          {/* Right: blog items */}
          <div className="space-y-8">
            {BLOG_ITEMS.map((item) => (
              <article key={item.title} className="group flex gap-6">
                <div className="h-28 w-28 flex-shrink-0 overflow-hidden rounded-sm">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h3 className="text-base font-bold text-navy transition-colors group-hover:text-accent-red">
                    {item.title}
                  </h3>
                  <time className="mt-1 block text-xs text-text-secondary">{item.date}</time>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">{item.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
