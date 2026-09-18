const posts = [
  {
    title: 'Leading Digital Marketing Strategies',
    date: 'Jan 15, 2026',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    image: 'https://picsum.photos/seed/dictum-blog1/400/250',
  },
  {
    title: 'Business Growth & Innovation',
    date: 'Feb 20, 2026',
    description: 'Separated they live in Bookmarksgrove right at the coast of the Semantics.',
    image: 'https://picsum.photos/seed/dictum-blog2/400/250',
  },
  {
    title: 'Financial Planning Essentials',
    date: 'Mar 10, 2026',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    image: 'https://picsum.photos/seed/dictum-blog3/400/250',
  },
]

export function Blog() {
  return (
    <section id="blog-section" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary-300 font-semibold text-sm uppercase tracking-wider">
            Blog
          </span>
          <h2 className="text-3xl font-bold text-ink mt-2">Our Blog Posts</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.title} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <span className="text-xs text-muted">{post.date}</span>
                <h3 className="text-lg font-semibold text-ink mt-2 mb-2">{post.title}</h3>
                <p className="text-smoke text-sm leading-relaxed">{post.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
