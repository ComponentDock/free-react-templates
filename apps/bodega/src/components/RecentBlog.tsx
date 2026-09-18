const posts = [
  {
    title: 'Top 10 Fashion Trends for 2024',
    excerpt:
      'Discover the latest styles and must-have pieces that will define your wardrobe this year.',
    image: 'https://picsum.photos/seed/bodega-blog1/600/400',
    date: 'Mar 15, 2024',
  },
  {
    title: 'How to Style Your Denim',
    excerpt: 'From casual to chic, learn the art of denim styling with our comprehensive guide.',
    image: 'https://picsum.photos/seed/bodega-blog2/600/400',
    date: 'Mar 10, 2024',
  },
  {
    title: 'Summer Collection Preview',
    excerpt: 'Get a sneak peek at what is coming next season with our exclusive preview.',
    image: 'https://picsum.photos/seed/bodega-blog3/600/400',
    date: 'Mar 05, 2024',
  },
]

export function RecentBlog() {
  return (
    <section id="blog" className="py-16" aria-label="Recent blog posts">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-heading text-center mb-12">Recent Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.title}
              className="bg-white rounded overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-52 object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <span className="absolute top-3 right-3 bg-brand text-heading text-xs font-bold px-3 py-1 rounded-sm">
                  {post.date}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-heading text-lg mb-2">
                  <a href="#" className="hover:text-brand transition-colors">
                    {post.title}
                  </a>
                </h3>
                <p className="text-sm text-body">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
