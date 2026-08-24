const posts = [
  {
    image: 'https://picsum.photos/seed/gastro-blog1/600/400',
    date: '15 Dec',
    title: 'The Art of Italian Cooking',
    excerpt:
      'Discover the secrets behind authentic Italian cuisine and learn how to bring the flavors of Italy into your home kitchen.',
  },
  {
    image: 'https://picsum.photos/seed/gastro-blog2/600/400',
    date: '10 Dec',
    title: 'Best Wine Pairings for Pasta',
    excerpt:
      'Our sommelier shares the perfect wine pairings for your favorite pasta dishes, from classic reds to refreshing whites.',
  },
  {
    image: 'https://picsum.photos/seed/gastro-blog3/600/400',
    date: '5 Dec',
    title: 'Holiday Menu Preview',
    excerpt:
      'Get a sneak peek at our exclusive holiday menu featuring seasonal ingredients and festive Italian traditions.',
  },
]

export function Blog() {
  return (
    <section id="blog" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="font-accent text-lg text-brand">Latest News</p>
          <h2 className="mt-2 text-4xl font-bold">The Blog</h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="overflow-hidden rounded-[10px] bg-white shadow-sm">
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-[250px] w-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 rounded bg-brand px-3 py-1 text-xs font-semibold text-white">
                  {post.date}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold">{post.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-gray">{post.excerpt}</p>
                <a
                  href="#blog"
                  className="mt-4 inline-block text-sm font-semibold text-brand transition-colors hover:text-surface-dark"
                >
                  Continue Reading →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
