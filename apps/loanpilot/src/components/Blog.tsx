const posts = [
  {
    title: 'How To Choose The Right Loan For Your Needs',
    excerpt:
      'Finding the perfect loan can be overwhelming. Here are some key factors to consider when selecting the right loan product for your financial situation.',
    author: 'David Chen',
    date: 'Sep 15, 2024',
    image: 'loan-blog-1',
  },
  {
    title: 'Understanding Interest Rates And APR',
    excerpt:
      'Interest rates and APR can significantly impact your loan costs. Learn how to read and compare rates to make informed borrowing decisions.',
    author: 'Maria Garcia',
    date: 'Sep 12, 2024',
    image: 'loan-blog-2',
  },
  {
    title: 'Tips For Improving Your Credit Score',
    excerpt:
      'A good credit score can open doors to better loan terms. Discover practical strategies to boost your credit score before applying for a loan.',
    author: 'Alex Johnson',
    date: 'Sep 10, 2024',
    image: 'loan-blog-3',
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="bg-light-bg py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-navy sm:text-4xl">Latest Post</h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="overflow-hidden rounded bg-white shadow-sm">
              <img
                src={`https://picsum.photos/seed/${post.image}/600/400`}
                alt={post.title}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="mb-2 text-lg font-bold text-navy">{post.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-body-text-secondary">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={`https://picsum.photos/seed/${post.image}-author/40/40`}
                    alt={post.author}
                    className="h-10 w-10 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <p className="text-sm font-semibold text-navy">{post.author}</p>
                    <p className="text-xs text-body-text-secondary">{post.date}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
