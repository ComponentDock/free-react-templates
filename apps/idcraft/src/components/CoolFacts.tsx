import { FolderOpen, Users, Award, Coffee } from 'lucide-react'

const FACTS = [
  { icon: FolderOpen, number: '10+', label: 'Projects Completed' },
  { icon: Users, number: '87+', label: 'Happy Clients' },
  { icon: Award, number: '10+', label: 'Awards Won' },
  { icon: Coffee, number: '7+', label: 'Coffee per day' },
]

export function CoolFacts() {
  return (
    <section className="py-20 bg-dark-heading">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {FACTS.map((fact) => {
            const Icon = fact.icon
            return (
              <div key={fact.label}>
                <Icon size={40} className="text-amber-brand mx-auto mb-4" />
                <h2 className="text-4xl font-bold text-white mb-2">{fact.number}</h2>
                <p className="text-white/70 text-sm">{fact.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
