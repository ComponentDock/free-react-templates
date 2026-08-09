const members = [
  { name: 'Ethel Davis', role: 'Managing Director (Sales)', seed: 'crewcut-team-1' },
  { name: 'Rodney Cooper', role: 'Creative Art Director (Project)', seed: 'crewcut-team-2' },
  { name: 'Dora Walker', role: 'Senior Core Developer', seed: 'crewcut-team-3' },
  { name: 'Lena Keller', role: 'Creative Content Developer', seed: 'crewcut-team-4' },
] as const

export function Team() {
  return (
    <section id="team" className="bg-paper py-20 transition-colors dark:bg-gray-900 lg:py-[120px]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-black text-ink dark:text-white lg:text-4xl">
            Experienced Mentor Team
          </h2>
          <p className="mt-4 text-mist dark:text-gray-400">
            Who are in extremely love with eco friendly system.
          </p>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member) => (
            <div key={member.name} className="group text-center">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={`https://picsum.photos/seed/${member.seed}/400/400`}
                  alt={member.name}
                  className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-ink dark:text-white">
                {member.name}
              </h3>
              <p className="mt-1 text-sm text-mist dark:text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
