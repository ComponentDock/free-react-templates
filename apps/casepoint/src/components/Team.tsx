import { cn } from '@free-react-templates/ui'

const members = [
  {
    name: 'Ethan Welch',
    role: 'Chief Lawyer',
    image: 'https://picsum.photos/seed/casepoint-team1/400/500',
  },
  {
    name: 'Trevor Stanley',
    role: 'Junior Lawyer',
    image: 'https://picsum.photos/seed/casepoint-team2/400/500',
  },
  {
    name: 'Allen Guzman',
    role: 'Senior Lawyer',
    image: 'https://picsum.photos/seed/casepoint-team3/400/500',
  },
]

interface TeamProps {
  className?: string
}

export function Team({ className }: TeamProps) {
  return (
    <section className={cn('bg-white py-20', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="w-14 h-0.5 bg-brand" />
            <span className="text-brand text-sm font-heading font-semibold uppercase tracking-wider">
              Our lawyers
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-heading leading-tight">
            Meet Our Dedicated Team Members.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {members.map((m) => (
            <div key={m.name} className="text-center">
              <div className="overflow-hidden mb-6">
                <img
                  src={m.image}
                  alt={m.name}
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-heading font-bold text-text-heading mb-1">{m.name}</h3>
              <span className="text-text-muted text-sm">{m.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
