interface Model {
  name: string
  image: string
  stats: { label: string; value: string }[]
}

const models: Model[] = [
  {
    name: 'Andrea Smith',
    image: 'https://picsum.photos/seed/pose-featured-1/400/520',
    stats: [
      { label: 'Height', value: '185' },
      { label: 'Bust', value: '79' },
      { label: 'Waist', value: '40' },
      { label: 'Hips', value: '87' },
      { label: 'Shoe', value: '40' },
    ],
  },
  {
    name: 'Nicole Wall',
    image: 'https://picsum.photos/seed/pose-featured-2/400/520',
    stats: [
      { label: 'Height', value: '185' },
      { label: 'Bust', value: '79' },
      { label: 'Waist', value: '40' },
      { label: 'Hips', value: '87' },
      { label: 'Shoe', value: '40' },
    ],
  },
  {
    name: 'Cindy Smith',
    image: 'https://picsum.photos/seed/pose-featured-3/400/520',
    stats: [
      { label: 'Height', value: '185' },
      { label: 'Bust', value: '79' },
      { label: 'Waist', value: '40' },
      { label: 'Hips', value: '87' },
      { label: 'Shoe', value: '40' },
    ],
  },
  {
    name: 'Jannah Doe',
    image: 'https://picsum.photos/seed/pose-featured-4/400/520',
    stats: [
      { label: 'Height', value: '185' },
      { label: 'Bust', value: '79' },
      { label: 'Waist', value: '40' },
      { label: 'Hips', value: '87' },
      { label: 'Shoe', value: '40' },
    ],
  },
] as const

export function FeaturedModels() {
  return (
    <section id="models" className="bg-white py-20 transition-colors dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-bold text-ink dark:text-white">
            A Professional Model Agency
          </h2>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {models.map((model) => (
            <article
              key={model.name}
              className="overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-lg dark:bg-gray-900"
            >
              <img src={model.image} alt={model.name} className="h-72 w-full object-cover" />
              <div className="p-5 text-center">
                <h3 className="font-display text-lg font-bold text-ink dark:text-white">
                  {model.name}
                </h3>
                <dl className="mt-3 grid grid-cols-2 gap-x-2 gap-y-1 text-xs text-mist dark:text-gray-400">
                  {model.stats.map((stat) => (
                    <div key={stat.label} className="flex items-center justify-between">
                      <dt className="uppercase tracking-wide">{stat.label}</dt>
                      <dd className="font-semibold text-ink dark:text-white">{stat.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
