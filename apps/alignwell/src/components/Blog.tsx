const posts = [
  {
    title: 'What Every Athlete Needs To Know About Injury Recovery',
    image: 'https://picsum.photos/seed/alignwell-blog1/600/400',
    author: 'Dr. Lloyd Wilson',
    authorAvatar: 'https://picsum.photos/seed/alignwell-author1/100/100',
    date: '24 February 2024',
  },
  {
    title: 'The Benefits of Regular Chiropractic Adjustments',
    image: 'https://picsum.photos/seed/alignwell-blog2/600/400',
    author: 'Dr. Rachel Parker',
    authorAvatar: 'https://picsum.photos/seed/alignwell-author2/100/100',
    date: '18 February 2024',
  },
  {
    title: 'How Posture Affects Your Overall Health',
    image: 'https://picsum.photos/seed/alignwell-blog3/600/400',
    author: 'Dr. Ian Smith',
    authorAvatar: 'https://picsum.photos/seed/alignwell-author3/100/100',
    date: '12 February 2024',
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">
            News & Blog
          </span>
          <h2 className="mt-2 text-3xl font-bold text-ink dark:text-white">
            Latest News From Our Blog
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="mb-3 flex items-center gap-3">
                  <img
                    src={post.authorAvatar}
                    alt={post.author}
                    className="h-8 w-8 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div className="text-xs text-mist">
                    <p>{post.author}</p>
                    <p>{post.date}</p>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-ink dark:text-white">{post.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
