const posts = [
  {
    image: 'https://picsum.photos/seed/netforge-blog1/600/400',
    title: 'The Future of Cloud Computing in 2026',
    date: 'Sep 10, 2026',
    excerpt:
      'Cloud technologies are evolving rapidly. Here is what businesses need to know about the latest trends.',
  },
  {
    image: 'https://picsum.photos/seed/netforge-blog2/600/400',
    title: 'Top Cybersecurity Practices for Small Businesses',
    date: 'Sep 5, 2026',
    excerpt:
      'Protecting your business from cyber threats does not have to be complicated. Start with these basics.',
  },
  {
    image: 'https://picsum.photos/seed/netforge-blog3/600/400',
    title: 'Why Your Business Needs a Mobile-First Strategy',
    date: 'Aug 28, 2026',
    excerpt:
      'Mobile usage continues to dominate. Learn how to optimize your digital presence for mobile users.',
  },
] as const

export function Blog() {
  return (
    <section id="blog" aria-label="Blog" className="bg-gray-50 py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Latest News</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
            Stay updated with our latest insights and industry news.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950"
            >
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <time className="text-xs text-gray-500 dark:text-gray-400">{post.date}</time>
                <h3 className="mt-2 text-lg font-semibold text-gray-900 dark:text-white">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
