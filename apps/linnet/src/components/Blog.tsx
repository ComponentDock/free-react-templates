const featuredPost = {
  title: 'Business Consultation Meetup — Key Takeaways',
  excerpt:
    'Discover the insights and strategies shared at our latest business consultation meetup, covering growth, innovation, and market trends.',
  date: 'January 15, 2026',
  seed: 'linnet-blog1',
}

const listPosts = [
  {
    title: 'On Graphics Design Trends',
    date: 'June 16, 2026',
    excerpt: 'Explore the latest trends in graphics design that are shaping the industry.',
    seed: 'linnet-blog2',
  },
  {
    title: 'Web Development Best Practices',
    date: 'May 22, 2026',
    excerpt: 'A comprehensive guide to modern web development best practices.',
    seed: 'linnet-blog3',
  },
  {
    title: 'Marketing Strategies for 2026',
    date: 'April 10, 2026',
    excerpt: 'Top marketing strategies to boost your business this year.',
    seed: 'linnet-blog4',
  },
]

export function Blog() {
  return (
    <section id="blog" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <h2 className="font-heading text-3xl font-bold text-navy-500">Latest Blog</h2>
          <p className="mt-3 text-gray-500">Stay updated with our latest insights and articles.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {/* Featured post */}
          <div className="overflow-hidden rounded-lg bg-gray-50 shadow-sm">
            <img
              src={`https://picsum.photos/seed/${featuredPost.seed}/800/400`}
              alt={featuredPost.title}
              className="h-56 w-full object-cover"
              loading="lazy"
            />
            <div className="p-6">
              <h3 className="font-heading text-lg font-bold text-navy-500">
                <a href="#" className="hover:text-primary-400">
                  {featuredPost.title}
                </a>
              </h3>
              <p className="mt-3 text-sm text-gray-500">{featuredPost.excerpt}</p>
            </div>
          </div>

          {/* List posts */}
          <div className="flex flex-col gap-5">
            {listPosts.map((post) => (
              <div key={post.seed} className="flex gap-4 rounded-lg bg-gray-50 p-4 shadow-sm">
                <img
                  src={`https://picsum.photos/seed/${post.seed}/200/150`}
                  alt={post.title}
                  className="h-20 w-24 flex-shrink-0 rounded object-cover"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-heading text-sm font-bold text-navy-500">
                    <a href="#" className="hover:text-primary-400">
                      {post.title}
                    </a>
                  </h4>
                  <span className="text-xs text-gray-400">{post.date}</span>
                  <p className="mt-1 text-xs text-gray-500">{post.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
