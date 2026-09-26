const posts = [
  {
    id: 1,
    title: 'Photoshoot Technique',
    date: 'March 10, 2026',
    author: 'Admin',
    seed: 'clareo-blog-1',
  },
  {
    id: 2,
    title: 'Some tricks in Photoshop for your photo',
    date: 'March 8, 2026',
    author: 'Admin',
    seed: 'clareo-blog-2',
  },
  {
    id: 3,
    title: '50 Effects in Photoshop',
    date: 'March 5, 2026',
    author: 'Admin',
    seed: 'clareo-blog-3',
  },
]

export default function Blog() {
  return (
    <section id="blog" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-12 text-center font-display text-4xl font-bold text-gray-900">
          Recent Blog
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id}>
              <div
                className="mb-4 aspect-[16/10] rounded bg-cover bg-center"
                style={{
                  backgroundImage: `url(https://picsum.photos/seed/${post.seed}/600/375)`,
                }}
                role="img"
                aria-label={post.title}
              />
              <div className="mb-2 text-xs text-gray-500">
                <span>{post.date}</span>
                <span className="mx-2">·</span>
                <span>{post.author}</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900">
                <a href="#" className="hover:text-brand-400">
                  {post.title}
                </a>
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
