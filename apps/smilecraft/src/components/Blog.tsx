const posts = [
  {
    title: 'The Importance of Regular Dental Checkups',
    excerpt:
      'Regular dental visits can prevent serious oral health issues and save you money in the long run.',
    date: 'Sep 15, 2026',
    image: 'https://picsum.photos/seed/smilecraft-7/600/400',
  },
  {
    title: 'Tips for Maintaining a Healthy Smile',
    excerpt:
      'Simple daily habits that can keep your teeth and gums in excellent condition for years to come.',
    date: 'Sep 10, 2026',
    image: 'https://picsum.photos/seed/smilecraft-8/600/400',
  },
  {
    title: 'Understanding Modern Dental Technology',
    excerpt:
      'How cutting-edge technology is making dental procedures faster, safer, and more comfortable.',
    date: 'Sep 5, 2026',
    image: 'https://picsum.photos/seed/smilecraft-9/600/400',
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="bg-light-bg py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">Latest Blog</h2>
          <p className="mx-auto mt-3 max-w-xl text-body">
            Stay informed with the latest dental health tips and clinic news.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="overflow-hidden rounded-lg bg-white shadow-sm">
              <img
                src={post.image}
                alt={post.title}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <p className="text-xs text-body">{post.date}</p>
                <h3 className="mt-2 text-lg font-bold text-ink">{post.title}</h3>
                <p className="mt-2 text-sm text-body">{post.excerpt}</p>
                <a
                  href="#blog"
                  className="mt-4 inline-block text-sm font-bold text-price-blue hover:underline"
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
