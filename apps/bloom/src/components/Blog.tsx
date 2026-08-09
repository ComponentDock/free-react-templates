const posts = [
  {
    title: 'Skin Care for Teen Skin',
    category: 'BEAUTY, TIPS',
    seed: 'bloom-blog-1',
    alt: 'Teen skincare products on a shelf',
  },
  {
    title: 'Daily Skincare Routine',
    category: 'BEAUTY, TIPS',
    seed: 'bloom-blog-2',
    alt: 'Woman applying moisturizer',
  },
  {
    title: 'Winter Skin Survival',
    category: 'BEAUTY, TIPS',
    seed: 'bloom-blog-3',
    alt: 'Cozy spa towels and candles',
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="bg-white py-20 transition-colors dark:bg-gray-950 lg:py-[120px]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            From Our Journal
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold uppercase text-ink dark:text-white sm:text-4xl">
            Recent From Blog
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-mist dark:text-gray-400">
            A small river named Duden flows by their place and supplies it with the necessary
            regelialia.
          </p>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
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
                <h3 className="mt-3 font-display text-xl font-bold text-ink dark:text-white">
                  {post.title}
                </h3>
                <p className="mt-2 text-xs uppercase tracking-wide text-mist dark:text-gray-500">
                  Sept 10, 2026 · Admin
                </p>
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
