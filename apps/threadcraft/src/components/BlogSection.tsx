const posts = [
  {
    image: 'https://picsum.photos/seed/blog1/600/400',
    date: 'Jan 15, 2026',
    title: 'Top 10 Fashion Trends for Spring',
    excerpt: 'Discover the must-have styles that will define this season.',
  },
  {
    image: 'https://picsum.photos/seed/blog2/600/400',
    date: 'Feb 03, 2026',
    title: 'How to Style Denim for Every Occasion',
    excerpt: 'From casual brunches to office-ready looks, denim never goes out of style.',
  },
  {
    image: 'https://picsum.photos/seed/blog3/600/400',
    date: 'Feb 22, 2026',
    title: "Sustainable Fashion: A Beginner's Guide",
    excerpt: 'Learn how to build an eco-friendly wardrobe without compromising on style.',
  },
]

export function BlogSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-extrabold text-text-dark text-center mb-2">From The Blog</h2>
      <p className="text-text-secondary text-center text-sm mb-8">
        Latest stories, tips, and trends
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <article
            key={post.title}
            className="bg-body-bg rounded overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <span className="text-xs text-text-secondary uppercase tracking-wide">
                {post.date}
              </span>
              <h3 className="text-base font-bold text-text-dark mt-1 mb-2">{post.title}</h3>
              <p className="text-sm text-text-body leading-relaxed">{post.excerpt}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
