interface Transformation {
  title: string
  before: string
  after: string
}

const transformations: Transformation[] = [
  {
    title: 'Ceremony Setup',
    before: 'https://picsum.photos/seed/vows-before-1/800/600',
    after: 'https://picsum.photos/seed/vows-after-1/800/600',
  },
  {
    title: 'Reception Design',
    before: 'https://picsum.photos/seed/vows-before-2/800/600',
    after: 'https://picsum.photos/seed/vows-after-2/800/600',
  },
]

export function Transformations() {
  return (
    <section id="results" className="bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700 dark:bg-primary-900/50 dark:text-primary-300">
            Venue Styling
          </div>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Venue Transformations
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            See how we turn beautiful spaces into breathtaking wedding venues.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-12 lg:grid-cols-2">
          {transformations.map((transformation) => (
            <div
              key={transformation.title}
              className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-gray-100 dark:ring-gray-800"
            >
              <div className="bg-gray-50 px-6 py-3 text-center text-sm font-semibold text-gray-900 dark:bg-gray-800 dark:text-white">
                {transformation.title}
              </div>
              <div className="relative aspect-[4/3] select-none overflow-hidden">
                <img
                  src={transformation.after}
                  alt="After"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 overflow-hidden" style={{ width: '50%' }}>
                  <img
                    src={transformation.before}
                    alt="Before"
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <span className="absolute left-3 top-3 z-10 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white">
                  Before
                </span>
                <span className="absolute right-3 top-3 z-10 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white">
                  After
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
