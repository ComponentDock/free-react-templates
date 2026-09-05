const cases = [
  {
    image: 'https://picsum.photos/seed/counsel-case-1/600/400',
    alt: 'Corporate litigation case',
    title: 'Corporate Litigation Victory',
    category: 'Business Law',
  },
  {
    image: 'https://picsum.photos/seed/counsel-case-2/600/400',
    alt: 'Family law case',
    title: 'Family Law Resolution',
    category: 'Family Law',
  },
  {
    image: 'https://picsum.photos/seed/counsel-case-3/600/400',
    alt: 'Criminal defense case',
    title: 'Criminal Defense Success',
    category: 'Criminal Law',
  },
]

export function CaseStudies() {
  return (
    <section className="bg-section-bg py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
            Recent Case Study
          </h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((item) => (
            <div
              key={item.title}
              className="group relative cursor-pointer overflow-hidden rounded-xl"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-ink/0 p-6 text-center opacity-0 transition-all duration-300 group-hover:bg-ink/80 group-hover:opacity-100">
                <span className="text-sm font-semibold uppercase tracking-wider text-brand-light">
                  {item.category}
                </span>
                <h3 className="mt-2 font-display text-xl font-bold text-white">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
