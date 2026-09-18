import { SocialIcon } from './SocialIcon'

interface TeamMember {
  name: string
  role: string
  image: string
}

const members: TeamMember[] = [
  {
    name: 'Milani Mou',
    role: 'Lead Consultant',
    image: 'https://picsum.photos/seed/stratagem-team1/400/400',
  },
  {
    name: 'Jasmine Pinky',
    role: 'Strategy Director',
    image: 'https://picsum.photos/seed/stratagem-team2/400/400',
  },
  {
    name: 'Piya Zosoldos',
    role: 'Business Analyst',
    image: 'https://picsum.photos/seed/stratagem-team3/400/400',
  },
]

const socials = [
  { name: 'facebook' as const, label: 'Facebook' },
  { name: 'twitter' as const, label: 'Twitter' },
  { name: 'instagram' as const, label: 'Instagram' },
] as const

export function Team() {
  return (
    <section id="team" className="border-b border-gray-100 bg-white py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-light text-navy md:text-4xl">Expert Team</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-mist">
          Meet the professionals behind our consulting success
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member) => (
            <div key={member.name} className="text-center">
              <div className="mx-auto overflow-hidden rounded-[10px]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-72 w-full object-cover transition-transform hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-6 text-xl font-light text-[#2C2C2C]">{member.name}</h3>
              <p className="mt-1 text-xs text-[#2C2C2C]">{member.role}</p>
              <div className="mt-4 flex justify-center gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href="#"
                    aria-label={s.label}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-colors hover:border-brand hover:text-brand"
                  >
                    <SocialIcon name={s.name} className="h-3.5 w-3.5" />
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
