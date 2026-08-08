const posts = [
  {
    title: 'Architecture is ready to take the world to the next level',
    date: 'May 02 2019',
    alt: 'Modern architecture with clean lines',
  },
  {
    title: 'Architecture is ready to take the world to the next level',
    date: 'May 02 2019',
    alt: 'Interior staircase with natural light',
  },
  {
    title: 'Architecture is ready to take the world to the next level',
    date: 'May 02 2019',
    alt: 'Minimalist facade detail',
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="bg-white py-20 dark:bg-gray-950 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-sm font-bold uppercase tracking-[3px] text-brand-dark">
          Latest news
        </p>
        <h2 className="mt-3 text-center font-display text-4xl font-black uppercase text-ink dark:text-white">
          Our Blog Posts
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <article
              key={`${post.title}-${index}`}
              className="overflow-hidden rounded-2xl border border-black/5 bg-paper dark:border-white/10 dark:bg-gray-900"
            >
              <img
                src={`https://picsum.photos/seed/mint-blog-${index + 1}/700/420`}
                alt={post.alt}
                className="w-full object-cover"
              />
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-dark">
                  {post.date}
                </p>
                <h3 className="mt-3 font-display text-base font-bold leading-snug text-ink dark:text-white">
                  {post.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
