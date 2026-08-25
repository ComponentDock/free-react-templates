const POSTS = [
  {
    date: 'June 26, 2024',
    title: 'Freight Transport in Alaska: The Haul of the Wild',
    image: 'https://picsum.photos/seed/logistix-blog1/600/400',
  },
  {
    date: 'June 26, 2024',
    title: 'Delivery Your Stuff Quickly For Minimum Cost',
    image: 'https://picsum.photos/seed/logistix-blog2/600/400',
  },
  {
    date: 'June 26, 2024',
    title: 'Perishable Logistics: Cold Chain on a Plane',
    image: 'https://picsum.photos/seed/logistix-blog3/600/400',
  },
] as const

export function Blog() {
  return (
    <section className="bg-surface py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-gray-900">Latest News</h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((post) => (
            <article key={post.title} className="group">
              <div className="mb-4 overflow-hidden rounded-sm">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <p className="mb-2 text-xs text-gray-400">{post.date}</p>
              <h3 className="text-lg font-semibold text-gray-900 transition-colors group-hover:text-brand">
                <a href="#">{post.title}</a>
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
