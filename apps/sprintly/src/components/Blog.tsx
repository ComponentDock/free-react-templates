const posts = [
  {
    title: '5 Tips for Your First Crossfit Class',
    excerpt:
      'Starting something new can be intimidating. Here are five tips to help you crush your first crossfit session.',
    image: 'https://picsum.photos/seed/sprintly-blog1/600/400',
    date: 'Sep 15, 2026',
  },
  {
    title: 'The Ultimate Pre-Workout Nutrition Guide',
    excerpt:
      'What you eat before training matters. Learn how to fuel your body for peak performance.',
    image: 'https://picsum.photos/seed/sprintly-blog2/600/400',
    date: 'Sep 10, 2026',
  },
  {
    title: 'Why Group Classes Keep You Motivated',
    excerpt:
      'There is power in numbers. Discover how group fitness can transform your workout routine.',
    image: 'https://picsum.photos/seed/sprintly-blog3/600/400',
    date: 'Sep 5, 2026',
  },
]

export function Blog() {
  return (
    <section id="blog" className="bg-dark-800 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <span className="font-heading text-sm font-semibold uppercase tracking-widest text-brand-500">
            Blog
          </span>
          <h2 className="mt-2 font-heading text-4xl font-bold uppercase text-white">
            From Our Blog
          </h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {posts.map(({ title, excerpt, image, date }) => (
            <article
              key={title}
              className="group overflow-hidden rounded-lg bg-dark-700 transition-transform hover:-translate-y-1"
            >
              <div
                className="h-48 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                style={{ backgroundImage: `url('${image}')` }}
              />
              <div className="p-5">
                <span className="text-xs text-dark-400">{date}</span>
                <h3 className="mt-1 font-heading text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm text-dark-300">{excerpt}</p>
                <a
                  href="#blog"
                  className="mt-4 inline-block text-sm font-semibold text-brand-500 transition-colors hover:text-brand-400"
                >
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
