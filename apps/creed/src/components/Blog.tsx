const posts = [
  {
    date: '03 April, 2025',
    title: 'New Community Rules',
    excerpt:
      'We have updated our community guidelines to better serve our members and visitors. Please take a moment to review the changes.',
    image: 'https://picsum.photos/seed/creed-blog1/400/250',
  },
  {
    date: '27 March, 2025',
    title: 'A Perfect Afternoon at Church',
    excerpt:
      'Our spring fellowship event brought together over 200 community members for an afternoon of worship, food, and fellowship.',
    image: 'https://picsum.photos/seed/creed-blog2/400/250',
  },
  {
    date: '20 March, 2025',
    title: 'Bible Studies for Kids',
    excerpt:
      "Our children's Bible study program has been growing rapidly. Learn about the exciting new curriculum we are introducing.",
    image: 'https://picsum.photos/seed/creed-blog3/400/250',
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="bg-surface py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-gray-900">Latest News</h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Stay up to date with the latest happenings at our church and community events.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <article
              key={i}
              className="overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <img
                src={post.image}
                alt={post.title}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <span className="text-sm text-gray-500">{post.date}</span>
                <h3 className="mt-1 text-lg font-semibold text-gray-900">{post.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{post.excerpt}</p>
                <a
                  href="#blog"
                  className="mt-4 inline-block text-sm font-medium text-primary-400 hover:text-primary-500"
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
