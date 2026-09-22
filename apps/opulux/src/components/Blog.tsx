const POSTS = [
  {
    image: 'https://picsum.photos/seed/opulux-blog1/400/250',
    date: 'Mar 20, 2025',
    author: 'Admin',
    title: 'Experience Luxury Like Never Before',
    excerpt:
      'Discover what makes a stay at Opulux truly unforgettable, from our curated amenities to personalized service.',
  },
  {
    image: 'https://picsum.photos/seed/opulux-blog2/400/250',
    date: 'Mar 15, 2025',
    author: 'Admin',
    title: 'Top 5 Reasons to Book a Suite',
    excerpt:
      'Spacious living, premium views, and exclusive perks — here is why our suites are worth every penny.',
  },
  {
    image: 'https://picsum.photos/seed/opulux-blog3/400/250',
    date: 'Mar 10, 2025',
    author: 'Admin',
    title: 'A Culinary Journey at Our Restaurant',
    excerpt:
      'From locally sourced ingredients to world-class chefs, explore the flavors that define our dining experience.',
  },
]

export function Blog() {
  return (
    <section id="blog" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold">Latest</p>
          <h2 className="font-heading text-4xl font-bold">Recent Blog</h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((post) => (
            <article
              key={post.title}
              className="group overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <div className="mb-2 flex items-center gap-3 text-xs text-gray-400">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.author}</span>
                </div>
                <h3 className="mb-2 font-heading text-lg font-bold leading-tight">{post.title}</h3>
                <p className="text-sm leading-relaxed text-gray-500">{post.excerpt}</p>
                <a
                  href="#"
                  className="mt-3 inline-block text-sm font-medium text-cyan transition-colors hover:text-cyan-hover"
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
