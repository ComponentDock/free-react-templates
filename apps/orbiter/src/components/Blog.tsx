const POSTS = [
  {
    date: '15 Jan',
    title: 'How to build a successful digital strategy',
    excerpt:
      "Discover the key elements that make a digital strategy effective in today's competitive landscape.",
  },
  {
    date: '28 Feb',
    title: 'The future of web development trends',
    excerpt:
      'Explore emerging technologies and methodologies that are shaping the future of web development.',
  },
  {
    date: '10 Mar',
    title: 'Branding tips for startups',
    excerpt:
      'Learn essential branding techniques that help startups establish a strong market presence.',
  },
] as const

export function Blog() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-col gap-10 lg:flex-row">
          {/* Spacer for asymmetric layout */}
          <div className="hidden lg:block lg:w-1/4" />

          {/* Blog content */}
          <div className="lg:w-3/4">
            <div className="mb-12">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-secondary">
                Our Blogs
              </p>
              <h2 className="text-3xl font-bold text-heading">Recent Blog Posts</h2>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {POSTS.map((post) => (
                <article
                  key={post.title}
                  className="bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <span className="mb-3 inline-block bg-brand-primary px-3 py-1 text-xs font-semibold text-white">
                    {post.date}
                  </span>
                  <h3 className="mb-2 text-base font-bold text-heading">
                    <a href="#" className="transition-colors hover:text-brand-primary">
                      {post.title}
                    </a>
                  </h3>
                  <p className="mb-4 text-sm text-body">{post.excerpt}</p>
                  <a
                    href="#"
                    className="text-sm font-semibold text-brand-primary transition-colors hover:text-brand-secondary"
                  >
                    Read more
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
