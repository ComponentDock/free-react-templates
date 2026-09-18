import { cn } from '@free-react-templates/ui'

interface TeamProps {
  className?: string
}

const members = [
  {
    name: 'Sarah Johnson',
    role: 'Founder & Director',
    image: 'https://picsum.photos/seed/givecause-team1/400/500',
  },
  {
    name: 'Michael Chen',
    role: 'Program Manager',
    image: 'https://picsum.photos/seed/givecause-team2/400/500',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Volunteer Coordinator',
    image: 'https://picsum.photos/seed/givecause-team3/400/500',
  },
  {
    name: 'David Kim',
    role: 'Outreach Lead',
    image: 'https://picsum.photos/seed/givecause-team4/400/500',
  },
]

export function Team({ className }: TeamProps) {
  return (
    <section id="team" className={cn('py-32 md:py-40 bg-white', className)}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-medium text-heading mb-4">
            Meet Our Team
          </h2>
          <p className="font-body text-lg text-body max-w-xl mx-auto">
            The passionate people behind our mission
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {members.map((member) => (
            <div key={member.name} className="group relative overflow-hidden rounded-lg">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="font-heading text-lg font-medium">{member.name}</h3>
                <p className="font-body text-white/80 text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
