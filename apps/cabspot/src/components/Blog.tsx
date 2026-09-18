const posts = [
  {
    image: 'https://picsum.photos/seed/cabspot-blog1/600/400',
    tags: ['Travel', 'Tips'],
    title: 'Top Tips for a Stress-Free Airport Transfer',
    excerpt:
      'Planning your next airport trip? Here are some essential tips to make your transfer smooth and hassle-free.',
    date: 'Sep 10, 2026',
  },
  {
    image: 'https://picsum.photos/seed/cabspot-blog2/600/400',
    tags: ['Business', 'Events'],
    title: 'How to Organize Event Transportation for Large Groups',
    excerpt:
      'Managing transportation for corporate events and conferences can be challenging. Learn how to simplify the process.',
    date: 'Sep 5, 2026',
  },
]

export function Blog() {
  return (
    <section id="blog" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-12 text-center text-2xl font-bold text-gray-900 md:text-3xl">
          Latest News from our Blog
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-sm bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <img src={post.image} alt={post.title} className="h-48 w-full object-cover" />
              <div className="p-6">
                <div className="mb-3 flex gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-taxi/20 px-2 py-1 text-xs font-medium text-taxi-dark"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">{post.title}</h3>
                <p className="mb-3 text-sm leading-relaxed text-gray-600">{post.excerpt}</p>
                <p className="text-xs text-gray-400">{post.date}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
