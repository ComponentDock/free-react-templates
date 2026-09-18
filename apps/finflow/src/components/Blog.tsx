const posts = [
  {
    title: 'Managing Your Finances in 2024',
    excerpt: 'Discover the top strategies for managing your finances effectively in the new year.',
    author: 'Sarah Johnson',
    date: 'Sep 10, 2024',
    seed: 'finflow-blog-1',
  },
  {
    title: 'Tips for Smart Investing',
    excerpt:
      'Learn how to make informed investment decisions that align with your financial goals.',
    author: 'Michael Chen',
    date: 'Sep 05, 2024',
    seed: 'finflow-blog-2',
  },
  {
    title: 'Understanding Credit Scores',
    excerpt:
      'A comprehensive guide to understanding and improving your credit score for better rates.',
    author: 'Emily Rodriguez',
    date: 'Sep 01, 2024',
    seed: 'finflow-blog-3',
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="bg-white py-20 transition-colors dark:bg-gray-950 lg:py-[120px]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">Blog</span>
          <h2 className="mt-4 text-3xl font-bold uppercase text-ink dark:text-white sm:text-4xl">
            Our Blog
          </h2>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-950"
            >
              <img
                src={`https://picsum.photos/seed/${post.seed}/600/400`}
                alt={post.title}
                loading="lazy"
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-mist dark:text-gray-400">
                  <span>{post.author}</span>
                  <span aria-hidden="true">•</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="mt-3 text-lg font-bold text-ink dark:text-white">{post.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist dark:text-gray-400">
                  {post.excerpt}
                </p>
                <a
                  href="#blog"
                  className="mt-4 inline-block text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
                >
                  Continue Reading →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
