const barbers = [
  { name: 'Peter Baker', role: 'Head Hair Cut Specialist', initials: 'PB' },
  { name: 'Nancy Holmes', role: 'Spa & Makeup Specialist', initials: 'NH' },
  { name: 'Gavin Hansen', role: 'Hair Styling Expert', initials: 'GH' },
] as const

export function Team() {
  return (
    <section
      id="barbers"
      className="bg-paper py-20 transition-colors dark:bg-gray-900 lg:py-[120px]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold uppercase text-ink dark:text-white sm:text-4xl">
            We Have All Famous Barbers
          </h2>
          <p className="mt-4 text-mist dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua ad minim veniam.
          </p>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {barbers.map((barber) => (
            <article
              key={barber.name}
              className="rounded-xl bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-lg dark:bg-gray-950"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-light font-display text-xl font-bold text-white">
                {barber.initials}
              </div>
              <h3 className="mt-6 font-display text-xl font-bold uppercase text-ink dark:text-white">
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
