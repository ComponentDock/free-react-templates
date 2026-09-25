const posts = [
  {
    title: 'The Future of UI Design in 2024',
    excerpt:
      'Exploring the latest trends in UI design, from glassmorphism to AI-generated interfaces and what they mean for designers.',
    date: 'Sep 15, 2024',
    author: 'John Doe',
    comments: 12,
    seed: 'palette-blog1',
  },
  {
    title: 'Mastering Tailwind CSS for Modern Projects',
    excerpt:
      'A deep dive into Tailwind CSS best practices, utility-first patterns, and how to build scalable design systems.',
    date: 'Sep 10, 2024',
    author: 'John Doe',
    comments: 8,
    seed: 'palette-blog2',
  },
  {
    title: 'Why UX Research Matters More Than Ever',
    excerpt:
      'Understanding the critical role of user research in creating products that truly meet user needs and business goals.',
    date: 'Sep 5, 2024',
    author: 'John Doe',
    comments: 15,
    seed: 'palette-blog3',
  },
]

export function Blog() {
  return (
    <section id="blog" className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold text-ink">Latest Blog</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="overflow-hidden rounded-lg bg-white shadow-md">
              <img
                src={`https://picsum.photos/seed/${post.seed}/600/400`}
                alt={post.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <div className="mb-3 flex gap-4 text-xs text-smoke">
                  <span>{post.date}</span>
                  <span>By {post.author}</span>
                  <span>{post.comments} Comments</span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-ink">{post.title}</h3>
                <p className="text-sm text-smoke">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
