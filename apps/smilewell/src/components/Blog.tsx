const featured = {
  title: 'Every Smile Is Precious',
  date: 'Oct 20, 2024',
  author: 'Dr. Bob Carry',
  excerpt:
    'Your smile is one of the first things people notice about you. Discover why maintaining good oral health is essential for your overall well-being and confidence.',
  img: 'https://picsum.photos/seed/smilewell-blog-featured/800/500',
}

const posts = [
  { title: 'How to Choose the Right Dentist', date: 'Oct 15, 2024', author: 'Dr. Jean Smith' },
  { title: 'Tips for Kids Dental Health', date: 'Oct 10, 2024', author: 'Dr. Ricky Fisher' },
  { title: 'The Benefits of Regular Checkups', date: 'Oct 5, 2024', author: 'Dr. Bob Carry' },
  { title: 'Modern Dentistry Innovations', date: 'Sep 28, 2024', author: 'Dr. Jean Smith' },
] as const

export function Blog() {
  return (
    <section id="blog" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-smoke">
            Latest Blog Posts
          </p>
          <h2 className="text-3xl font-bold text-ink">Our Blog</h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Featured post */}
          <article className="overflow-hidden rounded-lg border border-gray-100 shadow-sm">
            <img
              src={featured.img}
              alt={featured.title}
              className="h-64 w-full object-cover"
              loading="lazy"
            />
            <div className="p-6">
              <div className="mb-2 flex items-center gap-2 text-xs text-mist">
                <span>{featured.date}</span>
                <span>&middot;</span>
                <span>{featured.author}</span>
              </div>
              <h3 className="mb-2 text-xl font-bold text-ink">{featured.title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-smoke">{featured.excerpt}</p>
              <a href="#" className="text-sm font-semibold text-brand hover:underline">
                Read More
              </a>
            </div>
          </article>

          {/* Compact posts */}
          <div className="flex flex-col gap-4">
            {posts.map((post) => (
              <article
                key={post.title}
                className="rounded-lg border border-gray-100 p-5 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-1 flex items-center gap-2 text-xs text-mist">
                  <span>{post.date}</span>
                  <span>&middot;</span>
                  <span>{post.author}</span>
                </div>
                <h3 className="text-base font-bold text-ink">{post.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
