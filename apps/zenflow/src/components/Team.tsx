import { useState } from 'react'

const members = [
  {
    name: 'John Doe',
    role: 'CEO & Founder',
    image: 'https://picsum.photos/seed/zenflow-team1/400/500',
  },
  {
    name: 'Jane Smith',
    role: 'Creative Director',
    image: 'https://picsum.photos/seed/zenflow-team2/400/500',
  },
  {
    name: 'Mike Johnson',
    role: 'Lead Developer',
    image: 'https://picsum.photos/seed/zenflow-team3/400/500',
  },
  {
    name: 'Sarah Williams',
    role: 'Marketing Manager',
    image: 'https://picsum.photos/seed/zenflow-team4/400/500',
  },
] as const

export function Team() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="team" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-display text-3xl font-bold uppercase tracking-wider text-ink sm:text-4xl">
          Meet Our Team
        </h2>
        <div className="mx-auto mt-4 h-1 w-16 bg-primary-400" />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member, index) => (
            <article
              key={member.name}
              className="group relative overflow-hidden"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img src={member.image} alt={member.name} className="h-[400px] w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="font-display text-lg font-bold uppercase text-white">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-300">{member.role}</p>
              </div>
              {hoveredIndex === index && (
                <div className="absolute inset-0 flex items-center justify-center gap-4 bg-primary-400/80">
                  {['Facebook', 'Twitter', 'LinkedIn', 'Dribbble'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      aria-label={`${member.name} ${social}`}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink transition-colors hover:bg-primary-500 hover:text-white"
                    >
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="12" cy="12" r="4" />
                      </svg>
                    </a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
