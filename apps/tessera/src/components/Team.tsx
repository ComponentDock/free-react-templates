const members = [
  {
    name: 'John Wilson',
    role: 'Co-Founder / CEO',
    bio: 'I am an ambitious workaholic, but apart from that, pretty simple person.',
  },
  {
    name: 'David Smith',
    role: 'Architect',
    bio: 'I am an ambitious workaholic, but apart from that, pretty simple person.',
  },
  {
    name: 'David Smith',
    role: 'Architect',
    bio: 'I am an ambitious workaholic, but apart from that, pretty simple person.',
  },
] as const

export function Team() {
  return (
    <section
      id="team"
      aria-label="Architect team"
      className="bg-white py-20 dark:bg-gray-950 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[2px] text-brand">Expert Team</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink dark:text-white lg:text-4xl">
            Our Architect Team
          </h2>
          <p className="mt-4 leading-relaxed text-mist dark:text-white/60">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts. Separated they live in.
          </p>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {members.map((member, i) => (
            <article key={`${member.name}-${i}`} className="text-center">
              <img
                src={`https://picsum.photos/seed/tessera-team-${i + 1}/400/400`}
                alt={member.name}
                className="mx-auto h-48 w-48 rounded-full object-cover"
                loading="lazy"
              />
              <h3 className="mt-6 font-display text-xl font-bold text-ink dark:text-white">
                {member.name}
              </h3>
              <p className="mt-1 text-sm font-medium uppercase tracking-wide text-brand">
                {member.role}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-mist dark:text-white/60">
                {member.bio}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
