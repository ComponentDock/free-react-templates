const team = [
  {
    name: 'John Rooster',
    role: 'Co-Founder, President',
    description:
      'Visionary leader with a passion for creating innovative digital solutions that make a real impact.',
    image: 'forgehub-team1',
  },
  {
    name: 'Tom Sharp',
    role: 'Co-Founder, COO',
    description:
      'Operations expert who ensures every project runs smoothly from concept to delivery.',
    image: 'forgehub-team2',
  },
  {
    name: 'Winston Hodson',
    role: 'Marketing',
    description:
      'Strategic marketer who helps brands connect with their audiences through compelling campaigns.',
    image: 'forgehub-team3',
  },
]

const socialLinks = [
  { label: 'Facebook', path: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
  {
    label: 'Twitter',
    path: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z',
  },
  {
    label: 'LinkedIn',
    path: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 110 4 2 2 0 010-4z',
  },
  { label: 'Instagram', path: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01' },
]

export function Team() {
  return (
    <section id="team-section" className="border-b py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Team</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {team.map((m) => (
            <div key={m.name} className="text-center">
              <img
                src={`https://picsum.photos/seed/${m.image}/400/400`}
                alt={m.name}
                className="mx-auto mb-5 h-32 w-32 rounded-full object-cover"
                loading="lazy"
              />
              <h3 className="text-xl font-bold">{m.name}</h3>
              <p className="mb-4 text-gray-500">{m.role}</p>
              <p className="mb-4 text-gray-600">{m.description}</p>
              <div className="flex justify-center gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href="#"
                    aria-label={s.label}
                    className="text-gray-400 hover:text-primary"
                  >
                    <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                      <path d={s.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
