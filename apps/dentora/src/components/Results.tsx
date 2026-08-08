const treatments = [
  {
    title: 'Teeth Whitening',
    before: 'https://picsum.photos/seed/dentora-5/800/600',
    after: 'https://picsum.photos/seed/dentora-6/800/600',
  },
  {
    title: 'Cosmetic Veneers',
    before: 'https://picsum.photos/seed/dentora-7/800/600',
    after: 'https://picsum.photos/seed/dentora-8/800/600',
  },
] as const

export function Results() {
  return (
    <section id="results" className="bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
            Results
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            See the Difference
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Real patient transformations that showcase the quality of our dental care.
          </p>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {treatments.map((treatment) => (
            <figure key={treatment.title}>
              <figcaption className="mb-4 text-center text-lg font-semibold text-gray-900 dark:text-white">
                {treatment.title}
              </figcaption>
              <div className="grid grid-cols-2 gap-3">
                <div className="relative">
                  <img
                    src={treatment.before}
                    alt={`${treatment.title} before`}
                    className="h-56 w-full rounded-2xl object-cover"
                    loading="lazy"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-gray-900/70 px-3 py-1 text-xs font-semibold text-white">
                    Before
                  </span>
                </div>
                <div className="relative">
                  <img
                    src={treatment.after}
                    alt={`${treatment.title} after`}
                    className="h-56 w-full rounded-2xl object-cover"
                    loading="lazy"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-primary-600 px-3 py-1 text-xs font-semibold text-white">
                    After
                  </span>
                </div>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
