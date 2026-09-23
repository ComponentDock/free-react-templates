const teamMembers = [
  {
    name: 'Jhon Smith',
    title: 'Senior Lawyer',
    image: 'https://picsum.photos/seed/justlaw-team1/400/400',
  },
  {
    name: 'Emma Bunton',
    title: 'Professional Lawyer',
    image: 'https://picsum.photos/seed/justlaw-team2/400/400',
  },
  {
    name: 'Bunton Jonathon',
    title: 'Top Rated Lawyer',
    image: 'https://picsum.photos/seed/justlaw-team3/400/400',
  },
] as const

export function Team() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="mb-16 text-center font-display text-4xl font-bold text-navy md:text-5xl">
          Team Members
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="mx-auto mb-4 h-64 w-64 rounded-full object-cover shadow-md"
                loading="lazy"
              />
              <h3 className="font-display text-xl font-bold text-navy-dark">{member.name}</h3>
              <p className="mt-1 text-sm text-primary-500">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
