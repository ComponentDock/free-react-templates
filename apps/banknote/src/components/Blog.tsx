const posts = [
  {
    img: 'banknote-blog1',
    title: 'How to Save Money on Your Taxes This Year',
    author: 'Admin',
    date: 'Mar 15, 2026',
    category: 'Finance',
    excerpt:
      'Discover practical strategies to minimize your tax liability and keep more of your hard-earned money.',
  },
  {
    img: 'banknote-blog2',
    title: 'Understanding Credit Scores: A Complete Guide',
    author: 'Admin',
    date: 'Mar 10, 2026',
    category: 'Banking',
    excerpt: 'Learn what factors affect your credit score and how to improve it over time.',
  },
  {
    img: 'banknote-blog3',
    title: 'Investment Strategies for Beginners',
    author: 'Admin',
    date: 'Mar 5, 2026',
    category: 'Investment',
    excerpt:
      'Start your investment journey with these proven strategies for building long-term wealth.',
  },
]

export function Blog() {
  return (
    <section id="blog" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Our Blog</h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Stay updated with the latest financial insights and tips.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((p) => (
            <article
              key={p.title}
              className="overflow-hidden rounded-lg border shadow-sm transition hover:shadow-md"
            >
              <img
                src={`https://picsum.photos/seed/${p.img}/600/400`}
                alt={p.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <p className="mb-2 text-xs text-gray-500">
                  {p.author} · {p.date} · {p.category}
                </p>
                <h4 className="mb-2 text-lg font-bold">{p.title}</h4>
                <p className="mb-4 text-sm text-gray-600">{p.excerpt}</p>
                <a href="#" className="text-sm font-semibold text-brand transition hover:underline">
                  Continue Reading...
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
