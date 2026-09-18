const posts = [
  {
    title: 'How to cook beef steak with sauce',
    date: 'April 22, 2024',
    excerpt: 'Master the art of cooking the perfect steak with our step-by-step guide.',
    image: 'https://picsum.photos/seed/tavern-blog1/600/400',
  },
  {
    title: 'The secret to perfect pasta',
    date: 'April 18, 2024',
    excerpt: 'Learn the techniques that make restaurant pasta dishes extraordinary.',
    image: 'https://picsum.photos/seed/tavern-blog2/600/400',
  },
]

export function Blog() {
  return (
    <section id="blog" className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-10 text-center text-3xl font-bold">Blog</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden border border-gray-100 bg-white shadow-sm"
            >
              <img
                src={post.image}
                alt={post.title}
                className="h-52 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="mb-1 text-lg font-bold">{post.title}</h3>
                <p className="mb-3 text-xs text-gray-400">{post.date}</p>
                <p className="mb-4 text-sm text-gray-500">{post.excerpt}</p>
                <a
                  href="#"
                  className="text-sm font-semibold text-flame-600 transition hover:text-flame-700"
                >
                  Read More
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
