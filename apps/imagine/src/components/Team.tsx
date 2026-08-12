import { FacebookIcon, LinkedInIcon, TwitterIcon } from './SocialIcons'

interface TeamMember {
  name: string
  role: string
  image: string
}

const TEAM: TeamMember[] = [
  {
    name: 'Ethel Davis',
    role: 'Managing Director (Sales)',
    image: 'https://picsum.photos/seed/imagine-team-1/400/500',
  },
  {
    name: 'Rodney Cooper',
    role: 'Creative Art Director (Project)',
    image: 'https://picsum.photos/seed/imagine-team-2/400/500',
  },
  {
    name: 'Dora Walker',
    role: 'Senior Core Developer',
    image: 'https://picsum.photos/seed/imagine-team-3/400/500',
  },
  {
    name: 'Lena Keller',
    role: 'Creative Content Developer',
    image: 'https://picsum.photos/seed/imagine-team-4/400/500',
  },
]

const SOCIALS = [
  { label: 'Facebook', icon: FacebookIcon },
  { label: 'Twitter', icon: TwitterIcon },
  { label: 'LinkedIn', icon: LinkedInIcon },
] as const

/* Team grid recreated from the source's four-card row: portrait photos with
   a hover social overlay and name/role captions below. */

export function Team() {
  return (
    <section id="team" aria-label="Team" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-ink lg:text-4xl">
            About Creative Agency Team
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-icon">
            Who are in extremely love with eco friendly system.
          </p>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((member) => (
            <article key={member.name} className="group">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="aspect-[4/5] w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {SOCIALS.map((social) => (
                    <a
                      key={social.label}
                      href="#team"
                      aria-label={social.label}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink transition-colors hover:bg-gradient-to-r hover:from-brand-start hover:to-brand-end hover:text-white"
                    >
                      <social.icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
              <div className="mt-5 text-center">
                <h3 className="text-base font-semibold text-ink">{member.name}</h3>
                <p className="mt-1 text-sm text-icon">{member.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
