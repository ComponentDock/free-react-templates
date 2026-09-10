const posts = [
  {
    title: 'The Art of Sourdough',
    image: 'https://picsum.photos/seed/loaf-blog1/400/250',
    date: 'September 5, 2026',
    author: 'Chef Maria',
    excerpt:
      'Discover the secrets behind our perfectly fermented sourdough bread. Learn how patience and care create the best flavors.',
  },
  {
    title: 'Morning Pastries Guide',
    image: 'https://picsum.photos/seed/loaf-blog2/400/250',
    date: 'September 3, 2026',
    author: 'Baker Tom',
    excerpt:
      'From croissants to Danish pastries, explore our morning collection. Each item is freshly baked before dawn.',
  },
  {
    title: 'Pizza Night Tips',
    image: 'https://picsum.photos/seed/loaf-blog3/400/250',
    date: 'September 1, 2026',
    author: 'Chef Maria',
    excerpt:
      'Make your pizza night perfect with our expert tips on toppings, dough, and baking temperature for the ideal pie.',
  },
]

export function Blog() {
  return (
    <section id="blog" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-heading sm:text-4xl">Latest from Our Blog</h2>
          <p className="mx-auto max-w-2xl text-body">
            Tips, stories, and recipes from our kitchen to yours. Stay updated with the latest from
            Loaf bakery.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="group">
              <div className="mb-4 overflow-hidden rounded-lg">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="mb-2 text-sm font-bold uppercase tracking-wider text-heading">
                {post.title}
              </h3>
              <div className="mb-3 text-xs text-body">
                {post.date} | {post.author}
              </div>
              <p className="text-sm text-body">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
