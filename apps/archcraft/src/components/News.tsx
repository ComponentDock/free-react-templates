const posts = [
  {
    title: 'Modern Architecture Trends in 2025',
    date: 'Sep 15, 2025',
    image: 'https://picsum.photos/seed/news1/600/400',
  },
  {
    title: 'Sustainable Design Principles',
    date: 'Sep 10, 2025',
    image: 'https://picsum.photos/seed/news2/600/400',
  },
  {
    title: 'The Future of Interior Spaces',
    date: 'Sep 5, 2025',
    image: 'https://picsum.photos/seed/news3/600/400',
  },
] as const

export function News() {
  return (
    <section id="news" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="mb-1 text-center text-sm font-semibold uppercase tracking-wider text-brand">
          News &amp; Update
        </p>
        <h2 className="mb-10 text-center text-3xl font-bold text-ink">Our Blog Posts</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map(({ title, date, image }) => (
            <div key={title} className="group overflow-hidden rounded bg-white">
              <div className="overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <p className="mb-2 text-xs text-mist">{date}</p>
                <h3 className="text-lg font-bold text-ink">
                  <a href="#" className="hover:text-brand">
                    {title}
                  </a>
                </h3>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="#"
            className="inline-block rounded border-2 border-brand bg-brand px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-transparent hover:text-brand"
          >
            View All Posts
          </a>
        </div>
      </div>
    </section>
  )
}
