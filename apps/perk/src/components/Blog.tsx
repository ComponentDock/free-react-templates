const blogPosts = [
  {
    title: 'The Art of Pour-Over Coffee',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
    date: '31st January, 2032',
    tags: ['Coffee', 'Lifestyle'],
    image: 'https://picsum.photos/seed/perk-b1/600/400',
  },
  {
    title: 'Why Single Origin Beans Matter',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
    date: '31st January, 2032',
    tags: ['Travel', 'Life Style'],
    image: 'https://picsum.photos/seed/perk-b2/600/400',
  },
]

export function Blog() {
  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section title */}
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-semibold text-ink md:text-4xl">
            What kind of Coffee we serve for you
          </h2>
          <p className="text-mist">Who are in extremely love with eco friendly system.</p>
        </div>

        {/* Blog cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {blogPosts.map((post) => (
            <article key={post.title} className="group">
              <div className="mb-4 overflow-hidden rounded-lg">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-64 w-full object-cover transition-transform group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="mb-3 flex gap-2">
                {post.tags.map((tag) => (
                  <a
                    key={tag}
                    href="#"
                    className="rounded-full bg-paper px-3 py-1 text-xs font-medium text-brand transition-colors hover:bg-brand hover:text-white"
                  >
                    {tag}
                  </a>
                ))}
              </div>
              <h3 className="mb-2 text-xl font-semibold text-ink transition-colors group-hover:text-brand">
                {post.title}
              </h3>
              <p className="mb-3 text-sm leading-relaxed text-mist">{post.excerpt}</p>
              <p className="text-xs text-mist">{post.date}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
