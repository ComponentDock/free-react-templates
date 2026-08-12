interface Post {
  meta: string
  title: string
  excerpt: string
  image: string
}

const posts: Post[] = [
  {
    meta: 'By Admin - October 27, 2032',
    title: '16 Easy Ideas to Use in Everyday',
    excerpt:
      'Small, repeatable habits that keep strategy alive between big initiatives — and how to make them stick.',
    image: 'https://picsum.photos/seed/consilio-15/600/400',
  },
  {
    meta: 'By Admin - October 12, 2032',
    title: 'How to Measure What Really Matters',
    excerpt:
      'A practical guide to choosing the handful of metrics that predict growth instead of the ones that just decorate dashboards.',
    image: 'https://picsum.photos/seed/consilio-16/600/400',
  },
  {
    meta: 'By Admin - September 28, 2032',
    title: 'The Case for Slower, Smarter Hiring',
    excerpt:
      'Why the best teams hire for capability curves, not checklists — and how to run an interview that reveals both.',
    image: 'https://picsum.photos/seed/consilio-17/600/400',
  },
]

export function Blog() {
  return (
    <section aria-labelledby="blog-heading" className="bg-gray-50 py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12">
          <p className="mb-3 flex items-center gap-3 text-sm font-medium uppercase tracking-widest text-eyebrow">
            <span className="h-0.5 w-14 bg-eyebrow" aria-hidden="true" />
            Recent News of Us
          </p>
          <h2
            id="blog-heading"
            className="font-display text-3xl font-bold text-brand-deep dark:text-white"
          >
            Our Recent Blog
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded bg-white shadow-sm dark:bg-gray-800"
            >
              <img src={post.image} alt="" className="h-44 w-full object-cover" loading="lazy" />
              <div className="p-6">
                <p className="mb-3 text-xs text-gray-400">{post.meta}</p>
                <h3 className="mb-3 font-display text-base font-bold leading-snug text-brand-deep dark:text-white">
                  <a href="#blog" className="transition-colors hover:text-accent">
                    {post.title}
                  </a>
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-body dark:text-gray-400">
                  {post.excerpt}
                </p>
                <a
                  href="#blog"
                  className="text-sm font-semibold text-accent transition-colors hover:text-brand"
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
