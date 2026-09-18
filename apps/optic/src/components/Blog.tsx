const posts = [
  {
    image: 'https://picsum.photos/seed/optic-blog-1/600/400',
    title: 'Why Photography Is Good For Business',
    date: 'April 25, 2019',
    excerpt:
      'Discover how professional photography can elevate your brand and create lasting impressions with your audience.',
  },
  {
    image: 'https://picsum.photos/seed/optic-blog-2/600/400',
    title: 'Tips For Better Wedding Photos',
    date: 'March 12, 2019',
    excerpt:
      'Essential tips and tricks for capturing the perfect wedding moments, from preparation to the final dance.',
  },
  {
    image: 'https://picsum.photos/seed/optic-blog-3/600/400',
    title: 'The Art Of Portrait Photography',
    date: 'February 8, 2019',
    excerpt:
      'Exploring the techniques and creative approaches that make portrait photography truly compelling.',
  },
]

export function Blog() {
  return (
    <section id="blog" className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Blog Posts</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.title}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <h3 className="text-lg font-bold mb-1">{post.title}</h3>
                <time className="text-sm text-gray-400 block mb-3">{post.date}</time>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">{post.excerpt}</p>
                <a href="#" className="text-gold-400 font-semibold text-sm hover:underline">
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
