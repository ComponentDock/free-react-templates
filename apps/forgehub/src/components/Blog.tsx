const posts = [
  {
    title: 'Create Beautiful Website In Less Than An Hour',
    author: 'Ham Brook',
    date: 'Jan 18, 2024',
    category: 'News',
    excerpt:
      'Discover how to build stunning websites quickly with modern tools and frameworks that streamline the development process.',
    image: 'forgehub-blog1',
  },
  {
    title: 'The Future of Web Development in 2024',
    author: 'James Phelps',
    date: 'Feb 12, 2024',
    category: 'Technology',
    excerpt:
      'Explore the latest trends and technologies shaping the future of web development and digital experiences.',
    image: 'forgehub-blog2',
  },
  {
    title: 'Design Principles Every Developer Should Know',
    author: 'James Phelps',
    date: 'Mar 5, 2024',
    category: 'Design',
    excerpt:
      'Essential design principles that will elevate your web projects and create better user experiences.',
    image: 'forgehub-blog3',
  },
]

export function Blog() {
  return (
    <section id="blog-section" className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Blog</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article key={p.title}>
              <a href="#" className="block overflow-hidden rounded-lg">
                <img
                  src={`https://picsum.photos/seed/${p.image}/600/400`}
                  alt={p.title}
                  className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </a>
              <h3 className="mt-4 text-lg font-bold">
                <a href="#" className="text-gray-900 hover:text-primary">
                  {p.title}
                </a>
              </h3>
              <div className="mb-3 text-sm text-gray-500">
                {p.author} <span className="mx-2">&bull;</span> {p.date}
                <span className="mx-2">&bull;</span>{' '}
                <a href="#" className="text-primary hover:underline">
                  {p.category}
                </a>
              </div>
              <p className="mb-3 text-gray-600">{p.excerpt}</p>
              <a href="#" className="text-sm font-medium text-primary hover:underline">
                Continue Reading...
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
