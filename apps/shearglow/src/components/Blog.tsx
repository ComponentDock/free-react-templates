const posts = [
  {
    title: 'Top Hair Trends for This Season',
    excerpt: 'Discover the hottest hair trends and styles that are dominating salons this season.',
    src: 'https://picsum.photos/seed/sg-blog1/600/400',
    date: 'Sep 12, 2026',
  },
  {
    title: 'How to Choose the Right Hair Color',
    excerpt:
      "Choosing the perfect shade can be tricky. Here's our expert guide to finding your ideal color.",
    src: 'https://picsum.photos/seed/sg-blog2/600/400',
    date: 'Sep 8, 2026',
  },
  {
    title: 'Hair Care Tips for Healthy Locks',
    excerpt: 'Simple daily habits that will keep your hair looking salon-fresh between visits.',
    src: 'https://picsum.photos/seed/sg-blog3/600/400',
    date: 'Sep 3, 2026',
  },
]

export function Blog() {
  return (
    <section id="blog" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-serif text-3xl font-bold text-dark">Latest News</h2>
        <div className="mx-auto mt-2 h-1 w-16 bg-gold-400" />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article key={p.title} className="group">
              <div className="overflow-hidden rounded">
                <img
                  src={p.src}
                  alt={p.title}
                  className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <p className="mt-3 text-xs text-muted">{p.date}</p>
              <h3 className="mt-1 font-serif text-lg font-bold text-dark">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
