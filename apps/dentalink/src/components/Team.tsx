import { cn } from '@free-react-templates/ui'

interface TeamProps {
  className?: string
}

const team = [
  {
    name: 'Dr. James Wilson',
    role: 'Lead Dentist',
    photo: 'https://picsum.photos/seed/dentalink-team1/300/400',
  },
  {
    name: 'Dr. Lisa Anderson',
    role: 'Orthodontist',
    photo: 'https://picsum.photos/seed/dentalink-team2/300/400',
  },
  {
    name: 'Dr. Robert Kim',
    role: 'Oral Surgeon',
    photo: 'https://picsum.photos/seed/dentalink-team3/300/400',
  },
  {
    name: 'Dr. Maria Santos',
    role: 'Dental Hygienist',
    photo: 'https://picsum.photos/seed/dentalink-team4/300/400',
  },
]

export function Team({ className }: TeamProps) {
  return (
    <section className={cn('py-16 px-4 bg-paper', className)} data-testid="team">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-ink text-center mb-12">Our Consultants</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div key={member.name} className="relative group rounded-lg overflow-hidden shadow-md">
              <img src={member.photo} alt={member.name} className="w-full h-72 object-cover" />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-ink/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-end p-4 text-white">
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm text-white/80">{member.role}</p>
              </div>
              {/* Always visible bottom info */}
              <div className="absolute bottom-0 left-0 right-0 bg-white/90 p-3 text-center group-hover:opacity-0 transition-opacity">
                <h3 className="font-semibold text-ink text-sm">{member.name}</h3>
                <p className="text-mist text-xs">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
