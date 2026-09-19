const posts = [
  {
    title: 'Effective Study Habits',
    author: 'Sarah Parker',
    category: 'Art & Design',
    excerpt:
      'Discover proven study techniques that help students retain information better and achieve academic success.',
    image: 'https://picsum.photos/seed/learnwise-blog1/600/300',
  },
  {
    title: 'Online Learning Tips',
    author: 'Sarah Parker',
    category: 'Art & Design',
    excerpt:
      'Maximize your online learning experience with these practical tips for remote education and virtual classrooms.',
    image: 'https://picsum.photos/seed/learnwise-blog2/600/300',
  },
]

export function Blog() {
  return (
    <section id="blog" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h3 className="mb-12 text-center font-heading text-3xl font-bold text-gray-800">
          From Our Blog
        </h3>
        <div className="grid gap-8 md:grid-cols-2">
          {posts.map((p) => (
            <div key={p.title} className="overflow-hidden rounded-lg bg-white shadow-md">
              <img
                src={p.image}
                alt={p.title}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <a
                  href="#"
                  className="mb-2 block text-lg font-bold text-gray-800 hover:text-primary"
                >
                  {p.title}
                </a>
                <div className="mb-3 flex items-center gap-2 text-xs text-gray-400">
                  <span>{p.author}</span>
                  <span>•</span>
                  <span>{p.category}</span>
                </div>
                <p className="text-sm leading-relaxed text-gray-500">{p.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
