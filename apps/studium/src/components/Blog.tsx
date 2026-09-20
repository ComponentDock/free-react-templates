const posts = [
  {
    title: 'How to Start Your Online Learning Journey',
    date: 'Sep 15, 2026',
    seed: 'studium-blog1',
  },
  { title: 'Top 5 Skills to Learn in 2026', date: 'Sep 10, 2026', seed: 'studium-blog2' },
  { title: 'Benefits of Online Certifications', date: 'Sep 5, 2026', seed: 'studium-blog3' },
]

export function Blog() {
  return (
    <section id="blog" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <h2 className="mb-12 text-3xl font-bold text-brand-text md:text-4xl">Recent Post</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-xl bg-brand-light shadow-md transition-shadow hover:shadow-lg"
            >
              <img
                src={`https://picsum.photos/seed/${post.seed}/600/300`}
                alt={post.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6 text-left">
                <p className="mb-2 text-xs text-brand-muted">{post.date}</p>
                <h3 className="mb-3 text-lg font-bold text-brand-text">{post.title}</h3>
                <a href="#blog" className="text-sm font-semibold text-brand-blue hover:underline">
                  Read more
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
