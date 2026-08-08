const team = [
  {
    name: 'Dr. Sarah Mitchell',
    role: 'Lead Dentist, DDS',
    bio: 'With over 15 years of experience, Dr. Mitchell is passionate about helping families maintain healthy smiles through gentle, patient-centered care.',
    education: 'UCSF School of Dentistry',
    image: 'https://picsum.photos/seed/dentora-2/600/800',
  },
  {
    name: 'Dr. James Park',
    role: 'Cosmetic Dentist, DMD',
    bio: 'Dr. Park specializes in transformative cosmetic procedures, combining artistry with dental science to create stunning, natural-looking results.',
    education: 'Columbia University CDM',
    image: 'https://picsum.photos/seed/dentora-3/600/800',
  },
  {
    name: 'Dr. Maria Santos',
    role: 'Orthodontist, DDS, MS',
    bio: 'Dr. Santos brings a decade of orthodontic expertise, helping children and adults achieve perfectly aligned smiles with the latest techniques.',
    education: 'Columbia University CDM',
    image: 'https://picsum.photos/seed/dentora-4/600/800',
  },
] as const

export function Team() {
  return (
    <section id="team" className="bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
            Our Team
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Meet Our Dentists
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Our experienced dental professionals are committed to providing exceptional care with a
            gentle touch.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {team.map((member) => (
            <article
              key={member.name}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-800"
            >
              <img
                src={member.image}
                alt={`Portrait of ${member.name}`}
                className="h-72 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-primary-600 dark:text-primary-400">
                  {member.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {member.bio}
                </p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  {member.education}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
