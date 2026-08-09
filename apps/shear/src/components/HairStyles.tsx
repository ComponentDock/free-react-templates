const styles = [
  { name: 'Beard Shaving', seed: 'shear-style-1' },
  { name: 'Crew Cut', seed: 'shear-style-2' },
  { name: 'Beard Trim', seed: 'shear-style-3' },
] as const

export function HairStyles() {
  return (
    <section
      id="styles"
      className="bg-white py-20 transition-colors dark:bg-gray-950 lg:py-[120px]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold uppercase text-ink dark:text-white sm:text-4xl">
            More Hair Styles
          </h2>
          <p className="mt-4 text-mist dark:text-gray-400">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
          </p>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {styles.map((style) => (
            <article
              key={style.name}
              className="group overflow-hidden rounded-xl shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="relative">
                <img
                  src={`https://picsum.photos/seed/${style.seed}/600/700`}
                  alt={style.name}
                  className="aspect-[6/7] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-brand px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
                  $50.00 only
                </span>
              </div>
              <div className="bg-paper p-5 text-center dark:bg-gray-900">
                <h3 className="font-display text-lg font-bold uppercase text-ink dark:text-white">
                  {style.name}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
