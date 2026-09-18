const posts = [
  {
    title: 'How Climate Change Affects Global Wildlife',
    excerpt:
      'Discover the far-reaching impacts of climate change on animal habitats and what we can do to help preserve biodiversity.',
    image: 'https://picsum.photos/seed/ecopulse-blog1/600/400',
    date: 'March 15, 2026',
  },
  {
    title: 'Sustainable Living: Tips for Reducing Your Carbon Footprint',
    excerpt:
      'Simple everyday changes that can significantly reduce your environmental impact and contribute to a healthier planet.',
    image: 'https://picsum.photos/seed/ecopulse-blog2/600/400',
    date: 'March 10, 2026',
  },
]

export function Blog() {
  return (
    <section id="blog" className="bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <span className="mb-3 text-sm font-semibold uppercase tracking-wider text-subtitle-green">
            Latest News
          </span>
          <h2 className="text-3xl font-bold text-ink lg:text-4xl">From Our Blog</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-lg border border-divider bg-white transition-shadow hover:shadow-lg"
            >
              <img src={post.image} alt={post.title} className="h-56 w-full object-cover" />
              <div className="p-6">
                <time className="mb-2 block text-sm text-mist">{post.date}</time>
                <h3 className="mb-3 text-xl font-bold text-ink">{post.title}</h3>
                <p className="leading-relaxed text-body">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
