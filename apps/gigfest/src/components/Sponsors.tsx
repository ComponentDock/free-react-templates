const sponsors = [
  'Sponsor Alpha',
  'Sponsor Beta',
  'Sponsor Gamma',
  'Sponsor Delta',
  'Sponsor Epsilon',
  'Sponsor Zeta',
  'Sponsor Eta',
]

export function Sponsors() {
  return (
    <section className="bg-dark-bg py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="mb-16 text-center font-heading text-4xl uppercase tracking-wider text-white">
          Sponsor Logos
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-12">
          {sponsors.map((name) => (
            <div
              key={name}
              className="flex h-20 w-32 items-center justify-center rounded bg-white/5 px-4"
            >
              <span className="font-sans text-sm text-light-gray">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
