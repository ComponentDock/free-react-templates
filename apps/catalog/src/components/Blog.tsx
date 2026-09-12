const posts = [
  {
    image: 'https://picsum.photos/seed/catalog-blog-1/600/400',
    title: 'Many People Selling Online',
    author: 'Mark Spiker',
    date: 'Jan 18, 2024',
    category: 'News',
    excerpt:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.',
  },
  {
    image: 'https://picsum.photos/seed/catalog-blog-2/600/400',
    title: 'Local Business Growth Tips',
    author: 'Mark Spiker',
    date: 'Jan 18, 2024',
    category: 'News',
    excerpt:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.',
  },
  {
    image: 'https://picsum.photos/seed/catalog-blog-3/600/400',
    title: 'Top Categories This Month',
    author: 'Mark Spiker',
    date: 'Jan 18, 2024',
    category: 'News',
    excerpt:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.',
  },
]

export function Blog() {
  return (
    <section className="bg-gray-100 py-12 md:py-20" id="blog">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <h2 className="text-xl font-bold text-primary-500">Our Blog</h2>
          <p className="mt-1 text-sm text-muted">See Our Daily News and Updates</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="overflow-hidden rounded-lg bg-white shadow-sm">
              <img
                src={post.image}
                alt={post.title}
                className="h-48 w-full object-cover"
                loading="lazy"
                width={600}
                height={400}
              />
              <div className="p-5">
                <h3 className="mb-2 text-base font-bold text-ink">
                  <a href="#" className="hover:text-primary-500">
                    {post.title}
                  </a>
                </h3>
                <div className="mb-3 text-xs text-muted">
                  by {post.author}
                  <span className="mx-1">&bull;</span>
                  {post.date}
                  <span className="mx-1">&bull;</span>
                  <a href="#" className="text-primary-500 hover:underline">
                    {post.category}
                  </a>
                </div>
                <p className="text-sm leading-relaxed text-body">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="#"
            className="inline-block rounded bg-primary-500 px-6 py-2 text-sm font-bold text-white transition hover:bg-primary-600"
          >
            View All Posts
          </a>
        </div>
      </div>
    </section>
  )
}
