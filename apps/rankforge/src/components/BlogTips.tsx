const posts = [
  {
    title: 'Top 10 SEO Strategies for 2024',
    date: '25 April, 2024',
    seed: 'rankforge-blog-1',
  },
  {
    title: 'Content Marketing Best Practices',
    date: '18 April, 2024',
    seed: 'rankforge-blog-2',
  },
  {
    title: 'Link Building Techniques That Work',
    date: '10 April, 2024',
    seed: 'rankforge-blog-3',
  },
] as const

export function BlogTips() {
  return (
    <section id="blog" aria-label="Blog tips" className="bg-mist py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-semibold text-primary-700 dark:text-gray-100">
            Tips and Tricks From Our Experts
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.title}
              className="overflow-hidden rounded-md bg-white shadow-sm transition-shadow hover:shadow-md dark:bg-gray-900"
            >
              <img
                src={`https://picsum.photos/seed/${post.seed}/400/250`}
                alt={post.title}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold text-primary-700 dark:text-gray-100">
                  {post.title}
                </h3>
                <div className="mt-4 flex items-center justify-between">
                  <a
                    href="#blog"
                    className="text-sm font-medium text-accent-400 transition-colors hover:text-accent-500"
                  >
                    Continue Reading
                  </a>
                  <span className="text-xs text-muted">{post.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
