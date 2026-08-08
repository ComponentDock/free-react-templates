const sermons = [
  {
    series: 'Faith Over Fear',
    title: 'Finding Peace in Uncertain Times',
    speaker: 'Pastor James Thompson',
    date: 'March 3, 2025',
  },
  {
    series: 'Better Together',
    title: 'The Power of Community',
    speaker: 'Pastor Rachel Kim',
    date: 'February 24, 2025',
  },
  {
    series: 'Created for More',
    title: 'Living with Purpose',
    speaker: 'Pastor James Thompson',
    date: 'February 17, 2025',
  },
  {
    series: 'Grace That Changes Everything',
    title: 'Grace That Changes Everything',
    speaker: 'Pastor James Thompson',
    date: 'February 10, 2025',
  },
] as const

export function Sermons() {
  return (
    <section id="sermons" className="py-20 lg:py-28 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
            Recent Sermons
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Missed a Sunday? Catch up on our latest messages
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {sermons.map((sermon, index) => (
            <article
              key={sermon.title}
              className="overflow-hidden rounded-2xl bg-white dark:bg-gray-800"
            >
              <img
                src={`https://picsum.photos/seed/sanctuary-${index + 3}/800/600`}
                alt={`Sermon artwork for ${sermon.series}`}
                loading="lazy"
                className="h-40 w-full object-cover"
              />
              <div className="p-6">
                <span className="inline-flex rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold text-primary-700 dark:bg-primary-900 dark:text-primary-100">
                  {sermon.series}
                </span>
                <h3 className="mt-3 font-serif text-lg font-semibold text-gray-900 dark:text-white">
                  {sermon.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{sermon.speaker}</p>
                <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">{sermon.date}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#sermons"
            className="inline-flex items-center gap-1 font-medium text-primary-600 transition-colors hover:text-primary-700 dark:text-primary-400"
          >
            View All Sermons
          </a>
        </div>
      </div>
    </section>
  )
}
