const models = [
  'Andrea',
  'Cassy',
  'Angela',
  'May',
  'Nicole',
  'Jannah',
  'Mariel',
  'Maria',
  'Ozawa',
  'Maine',
] as const

export function TopModels() {
  return (
    <section id="top-models" className="bg-white py-20 transition-colors dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-brand">
            Our Talents
          </p>
          <h2 className="font-display text-4xl font-bold text-ink dark:text-white">
            Our Tops Model's
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {models.map((model, index) => (
            <figure
              key={model}
              className="overflow-hidden rounded-lg bg-cloud transition-shadow hover:shadow-lg dark:bg-gray-900"
            >
              <img
                src={`https://picsum.photos/seed/pose-top-${index + 1}/300/360`}
                alt={model}
                className="h-56 w-full object-cover"
              />
              <figcaption className="p-4 text-center">
                <h3 className="font-display text-base font-bold text-ink dark:text-white">
                  {model}
                </h3>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
