import { BrandIcon } from './BrandIcon'

const teamMembers = [
  {
    name: 'Sarah Mitchell',
    role: 'Creative Director',
    bio: 'Passionate about storytelling and audio production with over a decade of experience in the podcasting industry.',
    imageSeed: 'podwave-team1',
  },
  {
    name: 'James Rodriguez',
    role: 'Audio Engineer',
    bio: 'Award-winning sound designer who brings technical expertise and creative flair to every episode.',
    imageSeed: 'podwave-team2',
  },
  {
    name: 'Emily Chen',
    role: 'Content Strategist',
    bio: 'Data-driven content creator who helps podcasts grow their audience through smart distribution strategies.',
    imageSeed: 'podwave-team3',
  },
]

interface TeamMemberProps {
  member: (typeof teamMembers)[number]
}

function TeamMember({ member }: TeamMemberProps) {
  return (
    <div className="text-center">
      <img
        src={`https://picsum.photos/seed/${member.imageSeed}/400/400`}
        alt={`Photo of ${member.name}`}
        className="mx-auto mb-4 h-64 w-64 rounded object-cover"
        loading="lazy"
      />
      <h3 className="mb-1 text-base font-light text-white">{member.name}</h3>
      <span className="mb-2 block text-xs text-white/50">{member.role}</span>
      <p className="mb-4 text-sm text-white/70">{member.bio}</p>
      <div className="flex justify-center gap-4">
        <a
          href="#"
          aria-label={`${member.name} on Facebook`}
          className="text-white transition-colors hover:text-brand-red"
        >
          <BrandIcon name="facebook" size={16} />
        </a>
        <a
          href="#"
          aria-label={`${member.name} on Twitter`}
          className="text-white transition-colors hover:text-brand-red"
        >
          <BrandIcon name="twitter" size={16} />
        </a>
        <a
          href="#"
          aria-label={`${member.name} on LinkedIn`}
          className="text-white transition-colors hover:text-brand-red"
        >
          <BrandIcon name="linkedin" size={16} />
        </a>
      </div>
    </div>
  )
}

export function BehindTheMic() {
  return (
    <section className="bg-footer-bg py-16 md:py-20" id="team">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="mb-12 text-center text-2xl font-bold text-white">Behind The Mic</h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <TeamMember key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  )
}
