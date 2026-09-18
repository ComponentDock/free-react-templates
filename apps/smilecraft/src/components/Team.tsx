const team = [
  {
    name: 'Tom Smith',
    specialty: 'General Dentistry',
    image: 'https://picsum.photos/seed/smilecraft-3/400/400',
  },
  {
    name: 'Mark Wilson',
    specialty: 'Orthodontics',
    image: 'https://picsum.photos/seed/smilecraft-4/400/400',
  },
  {
    name: 'Patrick Jacobson',
    specialty: 'Oral Surgery',
    image: 'https://picsum.photos/seed/smilecraft-5/400/400',
  },
  {
    name: 'Ivan Dorchsner',
    specialty: 'Cosmetic Dentistry',
    image: 'https://picsum.photos/seed/smilecraft-6/400/400',
  },
] as const

export function Team() {
  return (
    <section id="team" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">Meet Our Experienced Dentist</h2>
          <p className="mx-auto mt-3 max-w-xl text-body">
            Our skilled dental professionals are dedicated to providing exceptional care.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <article key={member.name} className="text-center">
              <img
                src={member.image}
                alt={`Portrait of ${member.name}`}
                className="mx-auto h-48 w-48 rounded-full object-cover"
                loading="lazy"
              />
              <h3 className="mt-4 text-lg font-bold text-ink">{member.name}</h3>
              <p className="mt-1 text-sm text-primary-300">{member.specialty}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
