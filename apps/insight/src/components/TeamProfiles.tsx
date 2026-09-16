const members = [
  {
    name: 'Adam Smith',
    role: 'CEO & Founder',
    image: 'https://picsum.photos/seed/insight-team1/200/200',
  },
  {
    name: 'Jessica Brown',
    role: 'Marketing Director',
    image: 'https://picsum.photos/seed/insight-team2/200/200',
  },
  {
    name: 'Mike Johnson',
    role: 'Senior Consultant',
    image: 'https://picsum.photos/seed/insight-team3/200/200',
  },
]

export function TeamProfiles() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-8">
          {members.map((m) => (
            <div key={m.name} className="flex flex-col items-center text-center">
              <img
                src={m.image}
                alt={m.name}
                className="mb-4 h-32 w-32 rounded-full object-cover shadow-md"
              />
              <h3 className="text-base font-semibold text-navy-dark">{m.name}</h3>
              <p className="text-sm text-muted">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
