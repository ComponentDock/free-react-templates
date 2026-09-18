const teamMembers = [
  {
    name: 'Kaiara Spencer',
    role: 'Product Manager',
    image: 'https://picsum.photos/seed/turbo-team1/400/400',
  },
  {
    name: 'Dave Simpson',
    role: 'Product Manager',
    image: 'https://picsum.photos/seed/turbo-team2/400/400',
  },
  {
    name: 'Ben Thompson',
    role: 'Product Manager',
    image: 'https://picsum.photos/seed/turbo-team3/400/400',
  },
  {
    name: 'Kyla Stewart',
    role: 'Product Manager',
    image: 'https://picsum.photos/seed/turbo-team4/400/400',
  },
] as const

export function Team() {
  return (
    <section id="team" className="border-b border-silver bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold">Our Team</h2>
          <p className="mx-auto max-w-md text-smoke">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima neque tempora
            reiciendis.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="mx-auto mb-4 h-48 w-48 rounded-full object-cover"
              />
              <h3 className="text-lg font-bold">{member.name}</h3>
              <p className="text-sm text-smoke">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
