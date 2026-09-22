const posts = [
  {
    image: 'https://picsum.photos/seed/eddy-blog-1/600/400',
    date: 'Sep 15, 2026',
    title: 'Top 5 Beach Activities This Season',
    excerpt:
      'Discover the best beach activities to enjoy during your stay at our resort, from surfing to sunset yoga.',
  },
  {
    image: 'https://picsum.photos/seed/eddy-blog-2/600/400',
    date: 'Sep 10, 2026',
    title: 'New Spa Treatments Available',
    excerpt:
      'Experience our newly introduced spa treatments designed to rejuvenate your body and mind.',
  },
  {
    image: 'https://picsum.photos/seed/eddy-blog-3/600/400',
    date: 'Sep 5, 2026',
    title: "Chef's Special Dinner Menu",
    excerpt:
      "Explore our chef's specially curated dinner menu featuring the freshest local ingredients.",
  },
] as const

export function Blog() {
  return (
    <section aria-label="Blog" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-heading text-3xl font-bold text-charcoal">Latest News</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-500">
          Stay updated with the latest happenings and events at our resort.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-lg bg-gray-50 shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="h-48 w-full object-cover"
                />
                <span className="absolute bottom-3 left-3 rounded bg-brand px-3 py-1 text-xs font-semibold text-white">
                  {post.date}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-lg font-semibold text-charcoal">{post.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">{post.excerpt}</p>
                <a
                  href="#"
                  className="mt-4 inline-block text-sm font-semibold text-brand transition-colors hover:text-orange-400"
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
