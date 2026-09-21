const posts = [
  {
    id: 1,
    title: 'Fashion New Trends',
    date: '16 February 2020',
    excerpt: 'What Curling Irons Are The Best Ones',
    seed: 'threadline-blog1',
  },
  {
    id: 2,
    title: 'Eternity Bands Do Last Forever',
    date: '21 February 2020',
    excerpt: 'Eternity Bands Do Last Forever',
    seed: 'threadline-blog2',
  },
  {
    id: 3,
    title: 'The Health Benefits Of Sunglasses',
    date: '28 February 2020',
    excerpt: 'The Health Benefits Of Sunglasses',
    seed: 'threadline-blog3',
  },
]

export function BlogPosts() {
  return (
    <section className="py-16 bg-surface-alt" aria-label="Latest news">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-surface-dark text-center mb-10">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="group">
              <div className="overflow-hidden rounded-lg mb-4">
                <div
                  className="h-48 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(https://picsum.photos/seed/${post.seed}/400/250)`,
                  }}
                />
              </div>
              <p className="text-xs text-gray-400 mb-1">{post.date}</p>
              <h3 className="text-lg font-bold text-surface-dark mb-2">{post.title}</h3>
              <a
                href="#read-more"
                className="text-brand-500 text-sm font-semibold uppercase hover:text-brand-600 transition-colors"
              >
                Read More
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
