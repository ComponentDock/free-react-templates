const team = [
  {
    name: 'Bob Miller',
    role: 'CEO and Co-Founder',
    bio: 'Even the all-powerful Pointing has no control about the blind texts.',
    seed: 'talentflow-team-1',
  },
  {
    name: 'Jean Smith',
    role: 'CEO and Co-Founder',
    bio: 'Even the all-powerful Pointing has no control about the blind texts.',
    seed: 'talentflow-team-2',
  },
  {
    name: 'David Wilson',
    role: 'CEO and Co-Founder',
    bio: 'Even the all-powerful Pointing has no control about the blind texts.',
    seed: 'talentflow-team-3',
  },
]

export function Team() {
  return (
    <section id="team" className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-10 text-center text-3xl font-bold">The Leadership</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div key={member.name} className="group relative overflow-hidden">
              <img
                src={`https://picsum.photos/seed/${member.seed}/400/400`}
                alt={member.name}
                className="h-[400px] w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 bg-white p-5 transition-all duration-300 group-hover:mb-0 group-hover:h-[210px]">
                <h3 className="text-lg font-bold uppercase">{member.name}</h3>
                <span className="mb-4 block text-sm uppercase text-gray-400">{member.role}</span>
                <p className="text-sm text-gray-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
