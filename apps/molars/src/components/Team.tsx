const team = [
  {
    name: 'Dr. Sarah Mitchell',
    specialty: 'Dental Surgery',
    image: 'https://picsum.photos/seed/molars-team1/400/400',
    bio: 'With over 15 years of experience in oral surgery, Dr. Mitchell brings precision and care to every procedure.',
    socials: ['Facebook', 'Twitter', 'Instagram', 'LinkedIn'],
  },
  {
    name: 'Dr. James Parker',
    specialty: 'Orthodontics',
    image: 'https://picsum.photos/seed/molars-team2/400/400',
    bio: 'Specializing in modern orthodontic solutions, Dr. Parker creates beautiful, healthy smiles for patients of all ages.',
    socials: ['Facebook', 'Twitter', 'Instagram', 'LinkedIn'],
  },
  {
    name: 'Dr. Emily Chen',
    specialty: 'Periodontics',
    image: 'https://picsum.photos/seed/molars-team3/400/400',
    bio: 'Dr. Chen is dedicated to gum health and preventative care, helping patients maintain healthy smiles for life.',
    socials: ['Facebook', 'Twitter', 'Instagram', 'LinkedIn'],
  },
] as const

export function Team() {
  return (
    <section id="team" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-3 font-display text-2xl font-bold text-gray-900 sm:text-3xl">
            Our <span className="font-extrabold">Team</span>
          </h2>
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-ink">
            Meet the experienced professionals dedicated to providing you with exceptional dental
            care and a comfortable experience.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="mx-auto mb-4 h-48 w-48 rounded-full object-cover"
                loading="lazy"
              />
              <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
              <span className="mb-3 block text-sm text-primary-400">{member.specialty}</span>
              <div className="mb-4 flex justify-center gap-3">
                {member.socials.map((s) => (
                  <a
                    key={s}
                    href="#"
                    aria-label={s}
                    className="text-gray-400 transition-colors hover:text-primary-400"
                  >
                    {s.charAt(0)}
                  </a>
                ))}
              </div>
              <p className="text-sm leading-relaxed text-ink">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
