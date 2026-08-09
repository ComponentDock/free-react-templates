const panels = [
  {
    label: 'For Hair',
    seed: 'slick-cat-hair',
    services: ['Trim your Hair', 'Special Hair Cut', 'Color your Hair', 'Style your Hair'],
  },
  {
    label: 'For Beard',
    seed: 'slick-cat-beard',
    services: ['Trim your Hair', 'Special Beard Treatment', 'Color your Beard', 'Wax your Beard'],
  },
] as const

export function Categories() {
  return (
    <section className="bg-paper py-20 transition-colors dark:bg-gray-900 lg:py-[120px]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-brand">
            Everything Under One Roof
          </span>
          <h2 className="mt-4 font-display text-3xl font-black uppercase text-ink dark:text-white sm:text-4xl">
            All We Do for You
          </h2>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {panels.map((panel) => (
            <div
              key={panel.label}
              className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950"
            >
              <img
                src={`https://picsum.photos/seed/${panel.seed}/800/400`}
                alt={`${panel.label} services`}
                loading="lazy"
                className="h-48 w-full object-cover"
              />
              <div className="p-8">
                <h3 className="font-display text-2xl font-black uppercase text-ink dark:text-white">
                  {panel.label}
                </h3>
                <ul className="mt-5 space-y-3">
                  {panel.services.map((service) => (
                    <li key={service} className="flex items-center justify-between gap-4">
                      <span className="text-sm font-medium text-mist dark:text-gray-400">
                        {service}
                      </span>
                      <span className="text-sm font-bold text-brand">From $10.00</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
