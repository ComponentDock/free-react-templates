const posts = [
  {
    src: 'https://picsum.photos/seed/massive-blog-1/640/400',
    category: 'Design',
    title: 'Experience And Resources By Your Side',
    blurb:
      'Rapidiously monetize market-driven web services. Completely synthesize end-to-end models and emerging niches.',
  },
  {
    src: 'https://picsum.photos/seed/massive-blog-2/640/400',
    category: 'Development',
    title: 'The Most Effective App For mobile',
    blurb:
      'Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing procedures.',
  },
  {
    src: 'https://picsum.photos/seed/massive-blog-3/640/400',
    category: 'Business',
    title: 'We Help Your Time Work For Your Company',
    blurb:
      'Credibly streamline mission-critical value with multifunctional functionalities. Useful content for the app store experience.',
  },
] as const

export function Blog() {
  return (
    <section aria-label="Blog" className="bg-white py-16 sm:py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal dark:text-cyan">
            News
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl dark:text-white">
            From Blog
          </h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-950"
            >
              <img
                src={post.src}
                alt={post.title}
                loading="lazy"
                className="aspect-video w-full object-cover"
              />
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-teal dark:text-cyan">
                  {post.category}
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-ink dark:text-white">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {post.blurb}
                </p>
                <a
                  href="#home"
                  className="mt-4 inline-block text-sm font-semibold text-teal transition-colors hover:text-ocean dark:text-cyan"
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
