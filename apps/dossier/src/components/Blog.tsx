const POSTS = [
  {
    title: 'The Future of Product Design in 2026',
    date: 'Sep 15, 2026',
    excerpt:
      'Exploring emerging trends in product design, from AI-assisted workflows to spatial computing interfaces.',
    seed: 'dossier-blog-1',
  },
  {
    title: 'Building Accessible Design Systems',
    date: 'Aug 28, 2026',
    excerpt:
      'How to create design systems that work for everyone, with practical tips and real-world examples.',
    seed: 'dossier-blog-2',
  },
  {
    title: 'From Mockup to Production',
    date: 'Jul 10, 2026',
    excerpt:
      'A step-by-step guide to turning design mockups into production-ready code with modern tools.',
    seed: 'dossier-blog-3',
  },
]

export function Blog() {
  return (
    <section id="blog" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">Blog on Medium</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {POSTS.map((post) => (
            <article key={post.title} className="group">
              <div className="mb-4 overflow-hidden rounded-lg">
                <img
                  src={`https://picsum.photos/seed/${post.seed}/600/400`}
                  alt={post.title}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <p className="mb-2 text-sm text-gray-500">{post.date}</p>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">{post.title}</h3>
              <p className="text-gray-600">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
