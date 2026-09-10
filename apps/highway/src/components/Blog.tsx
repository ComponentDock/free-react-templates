const posts = [
  {
    image: 'highway-blog-1',
    date: 'Sep 5, 2026',
    title: 'Top Tips for Road Trips',
    desc: 'Essential tips to make your next road trip memorable and safe.',
  },
  {
    image: 'highway-blog-2',
    date: 'Sep 2, 2026',
    title: 'Best Cars for Families',
    desc: 'Our top picks for family-friendly rental vehicles this season.',
  },
  {
    image: 'highway-blog-3',
    date: 'Aug 28, 2026',
    title: 'City Driving Guide',
    desc: 'Navigate the city with ease in our compact and efficient cars.',
  },
]

export function Blog() {
  return (
    <section id="blog" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold text-heading">Recent Blog</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <div key={p.title} className="group overflow-hidden rounded-lg bg-surface shadow-sm">
              <div className="overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${p.image}/400/250`}
                  alt={p.title}
                  className="h-48 w-full object-cover transition-transform group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <span className="mb-2 inline-block rounded bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
                  {p.date}
                </span>
                <h3 className="mb-2 text-lg font-bold text-heading">{p.title}</h3>
                <p className="text-sm text-body">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
