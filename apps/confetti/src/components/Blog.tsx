const posts = [
  {
    category: 'Physics',
    title: 'Footprints in Time is Perfect House in Kurashiki',
    date: 24,
    month: 'Nov',
    seed: 'confetti-blog1',
  },
  {
    category: 'Design',
    title: 'How Technology is Shaping the Future of Events',
    date: 18,
    month: 'Nov',
    seed: 'confetti-blog2',
  },
]

export function Blog() {
  return (
    <section id="blog" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-16 text-center">
          <h2 className="font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
            News From Blog
          </h2>
          <p className="mt-4 text-mist">
            Stay updated with the latest from the conference and the industry.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.seed}
              className="group overflow-hidden rounded bg-white shadow-md transition-shadow hover:shadow-lg dark:bg-gray-950"
            >
              <div className="relative">
                <img
                  src={`https://picsum.photos/seed/${post.seed}/800/400`}
                  alt={post.title}
                  className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute left-4 top-4 flex flex-col items-center rounded bg-brand px-4 py-2 text-white">
                  <span className="font-display text-2xl font-bold leading-none">{post.date}</span>
                  <span className="text-xs uppercase">{post.month}</span>
                </div>
              </div>
              <div className="p-6">
                <span className="text-sm font-medium text-brand">| {post.category}</span>
                <h3 className="mt-2 font-display text-xl font-bold text-ink dark:text-white">
                  {post.title}
                </h3>
                <a
                  href="#"
                  className="mt-4 inline-block font-display text-sm font-semibold text-brand hover:text-brand-dark"
                >
                  Read more &raquo;
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
