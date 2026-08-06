const cases = [
  {
    title: 'Inspire Design Studio',
    blurb: 'A complete digital experience for a leading creative studio.',
    image: 'https://picsum.photos/seed/itkol-case-1/640/420',
  },
  {
    title: 'Inspire Design Studio',
    blurb: 'Scalable platform architecture for a fast-growing agency.',
    image: 'https://picsum.photos/seed/itkol-case-2/640/420',
  },
  {
    title: 'Inspire Design Studio',
    blurb: 'Cloud migration and security hardening for enterprise teams.',
    image: 'https://picsum.photos/seed/itkol-case-3/640/420',
  },
] as const

export function CaseStudies() {
  return (
    <section aria-label="Case studies" className="bg-white py-16 sm:py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl dark:text-white">
            Some of Our Great Stuffs
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-body dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {cases.map((item, index) => (
            <article
              key={item.image}
              className="overflow-hidden rounded-2xl border border-gray-100 bg-paper transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
            >
              <img
                src={item.image}
                alt={`Case study ${index + 1} preview`}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold text-navy dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-body dark:text-gray-400">
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
