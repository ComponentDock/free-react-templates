const posts = [
  {
    title: 'Footprints in Time is perfect House in Kurashiki',
    meta: '24 Now | Physics',
    seed: 'taper-blog-1',
  },
  {
    title: '5 Beard Styles That Never Go Out of Fashion',
    meta: '12 Now | Grooming',
    seed: 'taper-blog-2',
  },
] as const

export function BlogSection() {
  return (
    <section id="blog" className="bg-paper py-20 transition-colors dark:bg-gray-900 lg:py-[120px]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold uppercase text-ink dark:text-white sm:text-4xl">
            our recent news
          </h2>
          <p className="mt-4 text-sm font-medium uppercase tracking-[0.25em] text-brand">
            Hipos and tricks from recent blog
          </p>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden bg-white shadow-sm transition-shadow hover:shadow-lg dark:bg-gray-950"
            >
              <img
                src={`https://picsum.photos/seed/${post.seed}/800/500`}
                alt=""
                loading="lazy"
                className="aspect-[8/5] w-full object-cover"
              />
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mist">
                  {post.meta}
                </p>
                <h3 className="mt-3 font-display text-xl font-semibold uppercase leading-snug text-ink dark:text-white">
                  {post.title}
                </h3>
                <a
                  href="#blog"
                  className="mt-4 inline-block font-display text-sm font-medium uppercase tracking-[0.2em] text-ink transition-colors hover:text-brand dark:text-white dark:hover:text-brand"
                >
                  became a member »
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
