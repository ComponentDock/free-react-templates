const posts = [
  {
    title: 'Portable latest Fashion for young women',
    meta: 'Travel, Lifestyle',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://picsum.photos/seed/horseclub-blog-1/600/400',
  },
  {
    title: 'Summer Riding Gear Essentials',
    meta: 'Training, Events',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://picsum.photos/seed/horseclub-blog-2/600/400',
  },
  {
    title: 'Equestrian Lifestyle & Care Tips',
    meta: 'Care, Lifestyle',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://picsum.photos/seed/horseclub-blog-3/600/400',
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="bg-paper py-20 dark:bg-gray-900 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-ink dark:text-white lg:text-4xl">
            Latest News from our Blog
          </h2>
          <p className="mt-4 text-sm font-light leading-relaxed text-muted dark:text-gray-400">
            Who are in extremely love with eco friendly system.
          </p>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-md dark:bg-gray-950"
            >
              <img src={post.image} alt="" className="h-52 w-full object-cover" />
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-brand">
                  {post.meta}
                </p>
                <h3 className="mt-3 text-lg font-semibold leading-snug text-ink dark:text-white">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-muted dark:text-gray-400">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
