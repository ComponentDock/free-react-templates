const posts = [
  {
    title: 'Our Latest Project',
    author: 'Michael Ross',
    date: 'October 15, 2024',
    excerpt:
      'Discover the details behind our most recent commercial construction project and how we delivered excellence.',
    img: 'https://picsum.photos/seed/constructo-blog-1/400/250',
  },
  {
    title: 'Sustainable Building Practices',
    author: 'Sarah Johnson',
    date: 'September 28, 2024',
    excerpt:
      'Learn about our commitment to sustainable construction methods and eco-friendly building materials.',
    img: 'https://picsum.photos/seed/constructo-blog-2/400/250',
  },
  {
    title: 'Renovation Tips for Homeowners',
    author: 'David Chen',
    date: 'September 10, 2024',
    excerpt:
      'Expert advice on planning your next home renovation project for maximum impact and value.',
    img: 'https://picsum.photos/seed/constructo-blog-3/400/250',
  },
]

export function Blog() {
  return (
    <section id="blog" className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-2xl font-bold uppercase text-heading">
            Our Latest Blog
          </h2>
          <div className="mx-auto mt-2 h-1 w-16 bg-accent" />
          <p className="mt-6 text-sm text-body">
            Stay updated with our latest construction news and insights
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((p) => (
            <article
              key={p.title}
              className="overflow-hidden rounded bg-white shadow-md transition-shadow hover:shadow-lg"
            >
              <img src={p.img} alt={p.title} className="h-48 w-full object-cover" loading="lazy" />
              <div className="p-6">
                <h3 className="mb-2 font-sans text-base font-bold text-heading hover:text-accent">
                  <a href="#">{p.title}</a>
                </h3>
                <p className="mb-3 text-xs text-body">
                  by <span className="font-bold text-heading">{p.author}</span> / {p.date}
                </p>
                <p className="text-sm leading-relaxed text-body">{p.excerpt}</p>
                <a
                  href="#"
                  className="mt-4 inline-block text-xs font-bold uppercase text-accent hover:text-accent-dark"
                >
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
