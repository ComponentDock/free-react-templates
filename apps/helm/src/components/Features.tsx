const features = [
  {
    number: '01.',
    title: 'Featured title name here',
    paragraphs: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus eaque laborum animi fugiat, suscipit in.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est vitae magni impedit cum laudantium, voluptas.',
    ],
    image: 'https://picsum.photos/seed/helm-split1/900/600',
    imageAlt: 'Feature showcase one',
    reversed: false,
  },
  {
    number: '02.',
    title: 'Featured title name here',
    paragraphs: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus eaque laborum animi fugiat, suscipit in.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est vitae magni impedit cum laudantium, voluptas.',
    ],
    image: 'https://picsum.photos/seed/helm-split2/900/600',
    imageAlt: 'Feature showcase two',
    reversed: true,
  },
] as const

export function Features() {
  return (
    <section className="bg-mist py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary-400">
            Our Features
          </span>
          <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
            The technology for the future generation
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis provident eius
            ratione velit, voluptas laborum nemo quas ad necessitatibus placeat?
          </p>
        </div>

        <div className="space-y-16">
          {features.map((feature) => (
            <div key={feature.number} className="flex flex-col items-center gap-8 lg:flex-row">
              <div className={`w-full lg:w-3/4 ${feature.reversed ? 'lg:order-2' : ''}`}>
                <img
                  src={feature.image}
                  alt={feature.imageAlt}
                  className="h-auto w-full rounded-lg object-cover"
                  loading="lazy"
                />
              </div>
              <div className={`w-full lg:w-1/4 ${feature.reversed ? 'lg:order-1' : ''}`}>
                <span className="text-sm font-bold text-primary-400">{feature.number}</span>
                <h3 className="mt-4 text-xl font-bold text-ink">{feature.title}</h3>
                {feature.paragraphs.map((p, i) => (
                  <p key={i} className="mt-4 text-sm text-gray-500">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
