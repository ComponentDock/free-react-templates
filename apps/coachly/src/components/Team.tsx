const TEAM = [
  { name: 'Kaiara Spencer', role: 'Life Coach', seed: 'coachly-team1' },
  { name: 'Dave Simpson', role: 'Career Advisor', seed: 'coachly-team2' },
  { name: 'Ben Thompson', role: 'Mindfulness Expert', seed: 'coachly-team3' },
  { name: 'Kyla Stewart', role: 'Wellness Coach', seed: 'coachly-team4' },
]

export function Team() {
  return (
    <section id="team" className="border-b py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-center text-3xl font-bold text-gray-900">Meet Our Team</h2>
        <p className="mx-auto mb-12 max-w-xl text-center text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima neque tempora
          reiciendis.
        </p>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((member) => (
            <div key={member.name} className="text-center">
              <img
                src={`https://picsum.photos/seed/${member.seed}/300/300`}
                alt={member.name}
                className="mx-auto mb-4 h-48 w-48 rounded-full object-cover"
              />
              <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
              <p className="text-sm text-[#3a4971]">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
