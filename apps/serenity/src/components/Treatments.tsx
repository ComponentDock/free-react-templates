const treatments = [
  { name: 'Salt & Aroma', image: 'https://picsum.photos/seed/serenity-treatment-1/800/600' },
  { name: 'Hydro', image: 'https://picsum.photos/seed/serenity-treatment-2/800/600' },
  { name: 'Hot Stone', image: 'https://picsum.photos/seed/serenity-treatment-3/800/600' },
  { name: 'Aroma', image: 'https://picsum.photos/seed/serenity-treatment-4/800/600' },
] as const

export function Treatments() {
  return (
    <section id="treatments" className="bg-white transition-colors dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
            Treatments
          </span>
          <h2 className="mt-3 text-3xl font-light text-ink dark:text-white sm:text-4xl">
            Signature Treatments
          </h2>
          <p className="mt-4 text-sm font-light leading-relaxed text-mist dark:text-white/60">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {treatments.map((treatment) => (
            <figure key={treatment.name} className="group relative overflow-hidden">
              <img
                src={treatment.image}
                alt=""
                className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <figcaption className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-5">
                <h3 className="text-lg font-semibold text-white">{treatment.name}</h3>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
