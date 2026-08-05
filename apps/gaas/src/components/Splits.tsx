const splits = [
  {
    title: 'Modern Daesign Trends',
    heading: 'We Believe that Inner beauty Lasts Long',
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://picsum.photos/seed/gaas-split-1/640/480',
    alt: 'Gaas split feature preview one',
  },
  {
    title: 'Modern Daesign Trends',
    heading: 'We Believe that Inner beauty Lasts Long',
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://picsum.photos/seed/gaas-split-2/640/480',
    alt: 'Gaas split feature preview two',
  },
  {
    title: 'Modern Daesign Trends',
    heading: 'We Believe that Inner beauty Lasts Long',
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://picsum.photos/seed/gaas-split-3/640/480',
    alt: 'Gaas split feature preview three',
  },
] as const

export function Splits() {
  return (
    <section aria-label="Split sections" className="bg-white py-16 sm:py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl space-y-20 px-4 sm:px-6">
        {splits.map((split, index) => (
          <div
            key={split.alt}
            className={`grid items-center gap-10 lg:grid-cols-2 ${
              index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
            }`}
          >
            <img
              src={split.image}
              alt={split.alt}
              className="w-full rounded-xl shadow-lg"
              loading="lazy"
            />
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary-600 dark:text-primary-400">
                {split.title}
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl dark:text-white">
                {split.heading}
              </h2>
              <p className="mt-4 leading-relaxed text-body dark:text-gray-400">{split.blurb}</p>
              <a
                href="#features"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-primary-600 px-10 py-3.5 font-semibold text-white transition-colors hover:bg-primary-700"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
