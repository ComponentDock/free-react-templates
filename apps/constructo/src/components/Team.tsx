const members = [
  {
    name: 'Michael Ross',
    role: 'Founder & CEO',
    img: 'https://picsum.photos/seed/constructo-team-1/300/400',
  },
  {
    name: 'Sarah Johnson',
    role: 'Project Manager',
    img: 'https://picsum.photos/seed/constructo-team-2/300/400',
  },
  {
    name: 'David Chen',
    role: 'Lead Architect',
    img: 'https://picsum.photos/seed/constructo-team-3/300/400',
  },
  {
    name: 'Emma Wilson',
    role: 'Site Supervisor',
    img: 'https://picsum.photos/seed/constructo-team-4/300/400',
  },
]

export function Team() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-2xl font-bold uppercase text-heading">Our Team</h2>
          <div className="mx-auto mt-2 h-1 w-16 bg-accent" />
          <p className="mt-6 text-sm text-body">Meet the professionals behind our success</p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((m) => (
            <div key={m.name} className="group text-center">
              <div className="relative mb-4 overflow-hidden rounded">
                <img
                  src={m.img}
                  alt={m.name}
                  className="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-brand/80 to-transparent pb-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <ul className="flex gap-3">
                    {['Facebook', 'Twitter', 'LinkedIn'].map((s) => (
                      <li key={s}>
                        <a
                          href="#"
                          aria-label={s}
                          className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-white"
                        >
                          <span className="sr-only">{s}</span>
                          <svg className="h-3 w-3 fill-current" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="4" />
                          </svg>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <h3 className="font-sans text-sm font-bold text-heading">{m.name}</h3>
              <p className="text-xs text-body">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
