const posts = [
  {
    title: 'Renovating National Gallery',
    date: 'April 14, 2024',
    category: 'Web Design',
    comments: 4,
    excerpt:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    image: 'https://picsum.photos/seed/timber-blog1/400/250',
  },
  {
    title: 'Modern Interiors for Beginners',
    date: 'April 14, 2024',
    category: 'Inspiration',
    comments: 4,
    excerpt:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    image: 'https://picsum.photos/seed/timber-blog2/400/250',
  },
  {
    title: 'Build Your Dream Space',
    date: 'April 14, 2024',
    category: 'Web Design',
    comments: 4,
    excerpt:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    image: 'https://picsum.photos/seed/timber-blog3/400/250',
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="bg-lighter px-4 py-20 font-['Quicksand',sans-serif]">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-bold text-dark">Read Recent Blog</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <article key={i} className="overflow-hidden rounded-lg bg-white shadow-sm">
              <img src={post.image} alt={post.title} className="h-48 w-full object-cover" />
              <div className="p-6">
                <div className="mb-3 flex flex-wrap gap-2 text-xs text-muted">
                  <span>{post.date}</span>
                  <span>|</span>
                  <span>{post.category}</span>
                  <span>|</span>
                  <span>{post.comments} comments</span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-dark">
                  <a href="#" className="hover:text-primary">
                    {post.title}
                  </a>
                </h3>
                <p className="text-sm leading-relaxed text-muted">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
