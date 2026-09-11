import { Globe } from 'lucide-react'

interface TeamMember {
  name: string
  role: string
  image: string
}

const coreTeam: TeamMember[] = [
  { name: 'William Delisle', role: 'Founder & CEO', image: 'coinforge-team-1' },
  { name: 'Julius Book', role: 'Software Engineer', image: 'coinforge-team-2' },
  { name: 'Jessica Blair', role: 'Marketing Analyst', image: 'coinforge-team-3' },
  { name: 'Nancy Burns', role: 'Head of Design', image: 'coinforge-team-4' },
]

const advisors: TeamMember[] = [
  { name: 'Tricia Morgan', role: 'Advisor', image: 'coinforge-advisor-1' },
  { name: 'Kent Ransom', role: 'Advisor', image: 'coinforge-advisor-2' },
  { name: 'Edward Schultz', role: 'Advisor', image: 'coinforge-advisor-3' },
  { name: 'Betty Cyr', role: 'Advisor', image: 'coinforge-advisor-4' },
]

function SocialLinks() {
  return (
    <div className="mt-3 flex justify-center gap-3">
      <a href="#" aria-label="LinkedIn" className="text-light/50 hover:text-white">
        <Globe className="h-4 w-4" aria-hidden="true" />
      </a>
      <a href="#" aria-label="Twitter" className="text-light/50 hover:text-white">
        <Globe className="h-4 w-4" aria-hidden="true" />
      </a>
      <a href="#" aria-label="Telegram" className="text-light/50 hover:text-white">
        <Globe className="h-4 w-4" aria-hidden="true" />
      </a>
    </div>
  )
}

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="text-center">
      <img
        src={`https://picsum.photos/seed/${member.image}/200/200`}
        alt={member.name}
        className="mx-auto h-32 w-32 rounded-full object-cover"
        loading="lazy"
      />
      <h3 className="mt-4 text-lg font-bold text-white">{member.name}</h3>
      <p className="text-sm text-muted">{member.role}</p>
      <SocialLinks />
    </div>
  )
}

export function Team() {
  return (
    <section id="team" className="bg-navy py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm uppercase tracking-wider text-coral">Core Team</p>
          <h2 className="text-3xl font-bold text-white md:text-4xl">Our Team</h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {coreTeam.map((m) => (
            <TeamCard key={m.name} member={m} />
          ))}
        </div>

        <div className="mt-16 mb-12 text-center">
          <p className="mb-2 text-sm uppercase tracking-wider text-coral">Advisory Team</p>
          <h2 className="text-3xl font-bold text-white md:text-4xl">Advisory Board</h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {advisors.map((m) => (
            <TeamCard key={m.name} member={m} />
          ))}
        </div>
      </div>
    </section>
  )
}
