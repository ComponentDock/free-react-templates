const members = [
  { name: 'Tom Smith', role: 'Hair Specialist', initials: 'TS' },
  { name: 'Mark Wilson', role: 'Beard Specialist', initials: 'MW' },
  { name: 'Patrick Jacobson', role: 'Hair Stylist', initials: 'PJ' },
  { name: 'Ivan Dorchsner', role: 'Barber', initials: 'ID' },
] as const

export function Team() {
  return (
    <section id="team" className="bg-white py-24 transition-colors dark:bg-gray-950 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-ink dark:text-white sm:text-4xl">
          Our Hair <span className="text-brand">Stylist</span>
        </h2>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member) => (
            <div
              key={member.name}
              className="rounded-2xl border border-gray-100 p-8 text-center transition-shadow hover:shadow-lg dark:border-gray-800"
            >
              <span
                aria-hidden="true"
                className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-brand font-display text-3xl text-white"
              >
                {member.initials}
              </span>
              <h3 className="mt-6 text-lg font-semibold text-ink dark:text-white">{member.name}</h3>
              <p className="mt-1 text-sm font-medium uppercase tracking-wide text-brand">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
