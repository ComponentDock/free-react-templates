const posts = [
  {
    title: 'Benjamin Franklin Method Of Habit Formation',
    date: '10 April, 2018',
    seed: 'bulkapp-news-1',
    blurb:
      'There are many kinds of narratives and organizing principles. Science is driven by evidence gathered in experiments, and by the falsification of extant theories.',
  },
  {
    title: 'Designing For Mobile-First Audiences',
    date: '22 May, 2018',
    seed: 'bulkapp-news-2',
    blurb:
      'Every screen is a chance to delight. Learn how thoughtful spacing, clear hierarchy, and fast interactions keep mobile users coming back.',
  },
  {
    title: 'The Art Of Reliable Software Releases',
    date: '3 June, 2018',
    seed: 'bulkapp-news-3',
    blurb:
      'Shipping with confidence means testing early, automating the boring parts, and keeping a calm rollback plan for the moments that matter.',
  },
] as const

export function News() {
  return (
    <section id="news" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-display text-3xl font-semibold text-gray-900 dark:text-white">
          Latest News
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center leading-relaxed text-muted">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-lg bg-paper shadow-sm transition-shadow hover:shadow-md dark:bg-gray-900"
            >
              <img
                src={`https://picsum.photos/seed/${post.seed}/400/240`}
                alt=""
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary-500">
                  {post.date}
                </p>
                <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-gray-900 dark:text-white">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{post.blurb}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
