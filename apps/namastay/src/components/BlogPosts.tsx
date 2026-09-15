const posts = [
  {
    title: 'How to do advance yoga positions',
    date: 'Sept 15, 2026',
    description:
      'Master challenging poses with our step-by-step guide for experienced practitioners.',
    image: 'https://picsum.photos/seed/namastay-blog1/400/250',
  },
  {
    title: 'Benefits of daily meditation',
    date: 'Sept 12, 2026',
    description:
      'Discover how just 10 minutes of daily meditation can transform your mental health.',
    image: 'https://picsum.photos/seed/namastay-blog2/400/250',
  },
  {
    title: 'Yoga for stress relief',
    date: 'Sept 8, 2026',
    description: 'Simple sequences to melt away stress and find calm in your busy day.',
    image: 'https://picsum.photos/seed/namastay-blog3/400/250',
  },
]

export function BlogPosts() {
  return (
    <section className="py-16" id="blog">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="font-display mb-8 text-center text-3xl font-bold text-ink">Our Blog</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="overflow-hidden rounded-lg bg-white shadow-md">
              <img
                src={post.image}
                alt={post.title}
                className="h-40 w-full object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <time className="text-xs text-mist">{post.date}</time>
                <h3 className="mt-1 font-display text-lg font-bold text-ink">
                  <a href="#" className="transition hover:text-brand">
                    {post.title}
                  </a>
                </h3>
                <p className="mt-2 text-sm text-mist">{post.description}</p>
                <a
                  href="#"
                  className="mt-3 inline-block text-sm font-medium text-brand transition hover:text-brand-dark"
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
