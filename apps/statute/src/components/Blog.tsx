const posts = [
  {
    image: 'https://picsum.photos/seed/statute-blog1/600/400',
    date: 'Sep 10, 2026',
    title: 'Understanding Your Rights in Criminal Defense',
    excerpt:
      'Learn about the fundamental rights you have when facing criminal charges and how an experienced attorney can protect them.',
  },
  {
    image: 'https://picsum.photos/seed/statute-blog2/600/400',
    date: 'Sep 5, 2026',
    title: 'Family Law: Navigating Custody Arrangements',
    excerpt:
      'A comprehensive guide to understanding child custody laws and how to work toward the best arrangement for your family.',
  },
  {
    image: 'https://picsum.photos/seed/statute-blog3/600/400',
    date: 'Aug 28, 2026',
    title: 'Business Law Essentials for Startups',
    excerpt:
      'Key legal considerations every startup founder should address early, from incorporation to intellectual property protection.',
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="bg-light-bg py-20 lg:py-[120px]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Latest News</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <img src={post.image} alt={post.title} className="h-48 w-full object-cover" />
              <div className="p-6">
                <p className="mb-2 text-xs font-medium uppercase tracking-wide text-brand">
                  {post.date}
                </p>
                <h3 className="mb-3 text-lg font-bold text-gray-800">
                  <a href="#" className="transition-colors hover:text-brand">
                    {post.title}
                  </a>
                </h3>
                <p className="text-sm leading-relaxed text-gray-500">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
