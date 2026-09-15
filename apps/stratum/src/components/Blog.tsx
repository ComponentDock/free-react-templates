const posts = [
  {
    image: 'https://picsum.photos/seed/stratum-blog1/600/400',
    title: 'How To Find Gold In Mining',
    date: 'January 18, 2025',
    author: 'James Cooper',
    description:
      'A comprehensive guide to modern gold prospecting techniques and the tools that make extraction more efficient than ever.',
  },
  {
    image: 'https://picsum.photos/seed/stratum-blog2/600/400',
    title: 'Surface Mining Best Practices',
    date: 'January 18, 2025',
    author: 'James Cooper',
    description:
      'Exploring the latest advances in surface mining technology and sustainable practices that are reshaping the industry.',
  },
]

export function Blog() {
  return (
    <section id="blog" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#b8b8b8] text-sm uppercase tracking-widest">
            Latest Blog Posts
          </span>
          <h2 className="text-3xl font-heading uppercase text-black mt-2">Our Blog</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <div key={post.title}>
              <a href="#" className="block mb-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover rounded"
                />
              </a>
              <h2 className="text-xl font-heading uppercase text-black mb-2">
                <a href="#" className="hover:text-[#ff8b00] transition-colors">
                  {post.title}
                </a>
              </h2>
              <p className="text-[#b8b8b8] text-xs uppercase tracking-wider mb-3">
                <span className="mr-2">{post.date}</span> By{' '}
                <a href="#" className="hover:text-[#ff8b00]">
                  {post.author}
                </a>
              </p>
              <p className="text-[#939393] mb-3">{post.description}</p>
              <a
                href="#"
                className="text-[#ff8b00] hover:text-[#e07b00] transition-colors text-sm font-medium"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
