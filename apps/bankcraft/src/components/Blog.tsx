const posts = [
  {
    seed: 'bankcraft-blog-1',
    date: 'Sep 5, 2026',
    title: 'Smart Saving Strategies for 2026',
    excerpt:
      'Learn the top strategies that financial experts recommend for maximizing your savings this year.',
  },
  {
    seed: 'bankcraft-blog-2',
    date: 'Sep 2, 2026',
    title: 'Understanding Business Loans',
    excerpt:
      'A comprehensive guide to understanding different types of business loans and which one fits your needs.',
  },
  {
    seed: 'bankcraft-blog-3',
    date: 'Aug 28, 2026',
    title: 'Digital Banking Trends',
    excerpt:
      'Explore the latest trends in digital banking and how they are transforming the financial industry.',
  },
]

export function Blog() {
  return (
    <section id="blog" className="bg-paper py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-ink">Our Blog</h2>
          <p className="mx-auto max-w-xl text-gray-500">
            Stay updated with the latest financial insights and banking tips from our experts.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group overflow-hidden rounded-xl bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${post.seed}/400/250`}
                  alt={post.title}
                  className="h-48 w-full object-cover transition group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="mb-2 text-xs text-brand">{post.date}</p>
                <h3 className="mb-2 text-lg font-bold text-ink">{post.title}</h3>
                <p className="text-sm text-gray-500">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
