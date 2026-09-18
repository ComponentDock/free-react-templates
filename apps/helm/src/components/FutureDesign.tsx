const items = [
  {
    title: 'Creative Technology',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores assumenda sequi magnam totam alias minima.',
  },
  {
    title: 'World-class Quality',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores assumenda sequi magnam totam alias minima.',
  },
  {
    title: 'Deep Resources',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores assumenda sequi magnam totam alias minima.',
  },
  {
    title: 'World-class Quality',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores assumenda sequi magnam totam alias minima.',
  },
] as const

export function FutureDesign() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary-400">
            Design for the future
          </span>
          <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
            The technology for the future generation
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis provident eius
            ratione velit, voluptas laborum nemo quas ad necessitatibus placeat?
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-8">
          <div className="grid gap-8 md:grid-cols-2">
            {items.slice(0, 2).map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="text-xl font-bold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {items.slice(2, 4).map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="text-xl font-bold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
