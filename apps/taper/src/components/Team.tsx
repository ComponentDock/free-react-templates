const barbers = [
  { name: 'Guy C. Pulido', role: 'Master Barber', initials: 'GP' },
  { name: 'Steve L. Nolan', role: 'Master Barber', initials: 'SN' },
  { name: 'Edgar P. Mathis', role: 'Color Expart', initials: 'EM' },
  { name: 'Edgar P. Mathis', role: 'Color Expart', initials: 'EM' },
] as const

export function Team() {
  return (
    <section id="team" className="bg-white py-20 transition-colors dark:bg-gray-950 lg:py-[120px]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold uppercase text-ink dark:text-white sm:text-4xl">
            Professional Teams
          </h2>
          <p className="mt-4 text-sm font-medium uppercase tracking-[0.25em] text-brand">
            Our award winner hair cut exparts for you
          </p>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {barbers.map((barber, index) => (
            <article
              key={`${barber.name}-${index}`}
              className="bg-paper p-8 text-center shadow-sm transition-shadow hover:shadow-lg dark:bg-gray-900"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-light font-display text-xl font-semibold text-white">
                {barber.initials}
              </div>
              <h3 className="mt-6 font-display text-lg font-semibold uppercase text-ink dark:text-white">
                {barber.name}
              </h3>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                {barber.role}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
