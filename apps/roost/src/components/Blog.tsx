const posts = [
  {
    image: 'https://picsum.photos/seed/roost-blog1/400/300',
    title: 'Why Lead Generation is Key for Business Growth',
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
  },
  {
    image: 'https://picsum.photos/seed/roost-blog2/400/300',
    title: 'Why Lead Generation is Key for Business Growth',
    excerpt:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    image: 'https://picsum.photos/seed/roost-blog3/400/300',
    title: 'Why Lead Generation is Key for Business Growth',
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
  },
]

export function Blog() {
  return (
    <section id="blog" className="bg-light-100 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-gray-900">Our Blog</h2>
          <p className="text-gray-500">Latest news and articles</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <div
              key={`${post.title}-${i}`}
              className="overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <img src={post.image} alt={post.title} className="h-48 w-full object-cover" />
              <div className="p-5">
                <h3 className="mb-2 font-semibold text-gray-900">{post.title}</h3>
                <p className="mb-4 text-sm text-gray-500">{post.excerpt}</p>
                <a
                  href="#blog"
                  className="text-sm font-medium text-primary-600 hover:text-primary-700"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
