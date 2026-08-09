const posts = [
  {
    title: 'There Our You Divide Itseld..',
    category: 'ART, ILLUSTRATION',
    seed: 'stylely-blog-1',
    alt: 'Barber sketching a new style',
  },
  {
    title: 'One Which Won Two Divide..',
    category: 'ART, ILLUSTRATION',
    seed: 'stylely-blog-2',
    alt: 'Styled haircut on display',
  },
  {
    title: 'There Our You Divide Itseld..',
    category: 'ART, ILLUSTRATION',
    seed: 'stylely-blog-3',
    alt: 'Barber tools on a wooden table',
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="bg-paper py-20 transition-colors dark:bg-gray-900 lg:py-[120px]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold uppercase text-ink dark:text-white sm:text-4xl">
            Latest Style News
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-mist dark:text-gray-400">
            Trends, tips, and stories from behind the chair.
          </p>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <article
              key={`${post.title}-${index}`}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-950"
            >
              <img
                src={`https://picsum.photos/seed/${post.seed}/600/400`}
                alt={post.alt}
                loading="lazy"
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-6">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
                  {post.category}
                </span>
                <h3 className="mt-3 font-display text-xl font-semibold text-ink dark:text-white">
                  {post.title}
                </h3>
                <a
                  href="#blog"
                  className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brand transition-colors hover:text-brand-dark"
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
