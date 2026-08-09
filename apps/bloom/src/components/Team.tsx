const members = [
  { name: 'Mellisa Smith', role: 'Stylist', seed: 'bloom-team-1' },
  { name: 'Marie Mush', role: 'Fashionist', seed: 'bloom-team-2' },
  { name: 'Ana Jacobson', role: 'Makeup Stylist', seed: 'bloom-team-3' },
  { name: 'Ivan Dorchsner', role: 'Nail Specialist', seed: 'bloom-team-4' },
] as const

export function Team() {
  return (
    <section
      id="experts"
      className="bg-paper py-20 transition-colors dark:bg-gray-900 lg:py-[120px]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            The People Behind The Glow
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold uppercase text-ink dark:text-white sm:text-4xl">
            Our Beauty Experts
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-mist dark:text-gray-400">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
          </p>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member) => (
            <div
              key={member.name}
              className="overflow-hidden rounded-2xl border border-gray-100 bg-white text-center shadow-sm transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-950"
            >
              <img
                src={`https://picsum.photos/seed/${member.seed}/400/400`}
                alt={`Portrait of ${member.name}`}
                loading="lazy"
                className="h-56 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-ink dark:text-white">
                  {member.name}
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
