const transformations = [
  {
    title: 'Classic Fade Transformation',
    blurb: 'High-skin fade with a textured crop — clean, sharp, and ready for anything.',
    image: 'https://picsum.photos/seed/fade-result-1/800/500',
  },
  {
    title: 'Beard Grooming & Shaping',
    blurb: 'Full beard sculpting with a razor-sharp line-up and hot towel finish.',
    image: 'https://picsum.photos/seed/fade-result-2/800/500',
  },
] as const

export function Results() {
  return (
    <section id="results" className="bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-600 dark:text-accent-400">
            Transformations
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            See the Difference
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Real client transformations that showcase the skill of our barbers.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {transformations.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-800"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-gray-700">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {item.blurb}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
