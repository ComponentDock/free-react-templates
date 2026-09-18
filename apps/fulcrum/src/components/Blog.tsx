const posts = [
  {
    title: 'A small river named Duden flows by their place',
    date: 'April 25, 2019',
    excerpt:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    seed: 'fulcrum-blog1',
  },
  {
    title: 'Strategic digital solutions for modern businesses',
    date: 'May 10, 2019',
    excerpt:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.',
    seed: 'fulcrum-blog2',
  },
  {
    title: 'Building brands that stand out from the crowd',
    date: 'June 3, 2019',
    excerpt:
      'The Big Oxmox advised her not to do so, because there were thousands of bad Commas and wild Question Marks.',
    seed: 'fulcrum-blog3',
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="bg-light-bg py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold text-ink">Blog Posts</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="overflow-hidden rounded-lg bg-white shadow-sm">
              <img
                src={`https://picsum.photos/seed/${post.seed}/600/400`}
                alt={post.title}
                className="w-full object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <h3 className="mb-2 text-lg font-bold text-ink">{post.title}</h3>
                <time className="mb-3 block text-sm text-muted">{post.date}</time>
                <p className="mb-4 text-body leading-relaxed">{post.excerpt}</p>
                <a
                  href="#blog"
                  className="text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
                >
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
