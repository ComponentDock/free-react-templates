const members = [
  { name: 'Danica Lewis', role: 'Hair Stylist', initials: 'DL' },
  { name: 'Nicole Simon', role: 'Makeup Artist', initials: 'NS' },
  { name: 'Cloe Meyer', role: 'Color Specialist', initials: 'CM' },
  { name: 'Rachel Clinton', role: 'Hair Stylist', initials: 'RC' },
  { name: 'Dave Buff', role: 'Makeup Artist', initials: 'DB' },
] as const

export function Team() {
  return (
    <section id="team" className="bg-white py-20 transition-colors dark:bg-gray-950 lg:py-[120px]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold uppercase text-ink dark:text-white sm:text-4xl">
            Makeup Artist
          </h2>
          <p className="mt-4 text-sm font-medium uppercase tracking-[0.25em] text-brand">
            Meet the talented team behind your best look
          </p>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {members.map((member) => (
            <article
              key={member.name}
              className="bg-paper p-8 text-center shadow-sm transition-shadow hover:shadow-lg dark:bg-gray-900"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-light font-display text-xl font-semibold text-white">
                {member.initials}
              </div>
              <h3 className="mt-6 font-display text-lg font-semibold uppercase text-ink dark:text-white">
                {member.name}
              </h3>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                {member.role}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
