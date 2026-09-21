const posts = [
  {
    title: "How to Secure a Business Loan in Today's Market",
    date: 'March 15, 2025',
    author: 'Admin',
    seed: 'loanforge-blog1',
  },
  {
    title: 'Top 5 Tips for Managing Your Loan Repayments',
    date: 'March 10, 2025',
    author: 'Editor',
    seed: 'loanforge-blog2',
  },
]

export function Blog() {
  return (
    <section id="blog" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 font-heading text-sm font-bold uppercase tracking-wider text-brand">
            News form our latest blog
          </p>
          <h2 className="text-3xl font-bold text-navy md:text-4xl">
            News from around the world selected by us.
          </h2>
        </div>

        {/* Blog cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg"
            >
              <img
                src={`https://picsum.photos/seed/${post.seed}/800/400`}
                alt={post.title}
                className="h-56 w-full object-cover"
              />
              <div className="p-6">
                <div className="mb-3 flex items-center gap-3 text-sm text-text-dim">
                  <span>{post.date}</span>
                  <span className="h-1 w-1 rounded-full bg-text-dim" />
                  <span>{post.author}</span>
                </div>
                <h3 className="mb-2 text-lg font-bold text-navy">
                  <a href="#" className="transition-colors hover:text-brand">
                    {post.title}
                  </a>
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
