const posts = [
  {
    title: 'How to Build a Successful Brand in 2026',
    author: 'John Rooster',
    date: 'Sep 15, 2026',
    category: 'Branding',
    excerpt:
      'Building a brand is more than just a logo. Discover the key strategies that will help your brand stand out in the crowded digital marketplace.',
    seed: 'makely-blog-1',
  },
  {
    title: 'The Future of Web Development',
    author: 'Tom Sharp',
    date: 'Sep 12, 2026',
    category: 'Development',
    excerpt:
      'Explore the latest trends in web development and how they will shape the way we build and interact with websites.',
    seed: 'makely-blog-2',
  },
  {
    title: 'Design Trends That Will Dominate 2026',
    author: 'Winston Hodson',
    date: 'Sep 10, 2026',
    category: 'Design',
    excerpt:
      'From minimalism to bold typography, discover the design trends that will define the visual landscape of 2026.',
    seed: 'makely-blog-3',
  },
]

export function Blog() {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Blog</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.title}
              className="bg-white rounded-lg overflow-hidden shadow-sm border border-makely-border"
            >
              <img
                src={`https://picsum.photos/seed/${post.seed}/600/400`}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2 hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-400 mb-3">
                  {post.author} • {post.date} • {post.category}
                </p>
                <p className="text-makely-body text-sm mb-4">{post.excerpt}</p>
                <a
                  href="#"
                  className="text-primary hover:text-primary-dark transition-colors font-medium text-sm"
                >
                  Continue Reading
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
