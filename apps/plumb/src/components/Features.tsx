const features = [
  {
    number: 1,
    text: 'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
  },
  {
    number: 2,
    text: 'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
  },
  {
    number: 3,
    text: 'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
  },
  {
    number: 4,
    text: 'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
  },
] as const

export function Features() {
  return (
    <section aria-label="Features" className="bg-cream py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item) => (
            <div key={item.number} className="text-left">
              <span className="inline-block font-display text-5xl font-bold text-primary-400">
                {item.number}
              </span>
              <p className="mt-4 text-sm leading-relaxed text-smoke">{item.text}</p>
              <a
                href="#"
                className="mt-4 inline-block text-sm font-semibold text-primary-400 transition-colors hover:text-primary-500"
              >
                Read more
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
