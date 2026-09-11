const teamMembers = [
  {
    name: 'John Rooster',
    role: 'CEO & Founder',
    image: 'https://picsum.photos/seed/dictum-team1/200/200',
  },
  {
    name: 'Mark Red',
    role: 'Marketing',
    image: 'https://picsum.photos/seed/dictum-team2/200/200',
  },
  {
    name: 'Peter Grey',
    role: 'Design & Creative',
    image: 'https://picsum.photos/seed/dictum-team3/200/200',
  },
]

export function Team() {
  return (
    <section id="team-section" className="py-20 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary-300 font-semibold text-sm uppercase tracking-wider">
            Team
          </span>
          <h2 className="text-3xl font-bold text-ink mt-2">Our Team</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-ink">{member.name}</h3>
              <p className="text-smoke text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
