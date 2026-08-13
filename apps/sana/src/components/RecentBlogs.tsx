const posts = [
  {
    title: 'Portable Fashion for Women',
    excerpt:
      'Practical style tips for busy professionals who want to look polished without the fuss.',
    image: 'https://picsum.photos/seed/sana-blog-1/600/400',
  },
  {
    title: 'Summer Wear Is Coming',
    excerpt:
      'Stay comfortable and protected this season with our guide to heat-smart clothing choices.',
    image: 'https://picsum.photos/seed/sana-blog-2/600/400',
  },
  {
    title: 'Healthy Living Every Day',
    excerpt: 'Small daily habits that keep your heart, mind, and body in top shape all year round.',
    image: 'https://picsum.photos/seed/sana-blog-3/600/400',
  },
] as const

/** Three-column recent blog cards: image, title link, excerpt. */
export function RecentBlogs() {
  return (
    <section id="blogs" className="mx-auto max-w-7xl px-4 py-24 lg:px-8">
      <div className="mx-auto mb-14 max-w-xl text-center">
        <h2 className="text-3xl font-bold text-ink-900">Our Recent Blogs</h2>
        <p className="mt-4 text-sm leading-6 text-mute-500">
          Advice, news, and stories from our medical team — updated regularly.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {posts.map((post) => (
          <article key={post.title} className="group">
            <img
              src={post.image}
              alt={post.title}
              className="h-56 w-full object-cover"
              loading="lazy"
            />
            <h4 className="mt-5 text-lg font-medium text-ink-900 transition-colors group-hover:text-primary-500">
              <a href="#blogs">{post.title}</a>
            </h4>
            <p className="mt-3 text-sm leading-6 text-mute-500">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
