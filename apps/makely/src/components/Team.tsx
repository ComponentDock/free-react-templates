import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from './social-icons'

const teamMembers = [
  {
    name: 'John Rooster',
    role: 'Co-Founder President',
    description:
      'Visionary leader with over 15 years of experience in digital innovation and business strategy.',
    seed: 'makely-team-1',
  },
  {
    name: 'Tom Sharp',
    role: 'Co-Founder COO',
    description:
      'Operations expert who ensures every project is delivered on time and exceeds expectations.',
    seed: 'makely-team-2',
  },
  {
    name: 'Winston Hodson',
    role: 'Marketing Director',
    description:
      'Creative strategist who crafts compelling campaigns that drive brand awareness and growth.',
    seed: 'makely-team-3',
  },
]

const socialIcons = [
  { icon: FacebookIcon, label: 'Facebook' },
  { icon: TwitterIcon, label: 'Twitter' },
  { icon: LinkedinIcon, label: 'LinkedIn' },
  { icon: InstagramIcon, label: 'Instagram' },
]

export function Team() {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-lg p-8 text-center shadow-sm border border-makely-border"
            >
              <img
                src={`https://picsum.photos/seed/${member.seed}/200/200`}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-primary font-medium mb-3">{member.role}</p>
              <p className="text-makely-body mb-4 text-sm">{member.description}</p>
              <div className="flex justify-center gap-3">
                {socialIcons.map((s) => (
                  <a
                    key={s.label}
                    href="#"
                    aria-label={`${member.name} ${s.label}`}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    <s.icon width={18} height={18} />
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
