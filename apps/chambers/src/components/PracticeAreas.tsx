import { Briefcase, Users, Shield, FileText } from 'lucide-react'

const areas = [
  {
    icon: Briefcase,
    title: 'Business Law',
    desc: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    icon: Users,
    title: 'Family Law',
    desc: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    icon: Shield,
    title: 'Criminal Law',
    desc: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    icon: FileText,
    title: 'Insurance Law',
    desc: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
]

export function PracticeAreas() {
  return (
    <section id="practice-areas" className="py-16 bg-bg-light" data-testid="practice-areas">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Practice Area
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mt-2">What We Cover</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {areas.map((a) => {
            const Icon = a.icon
            return (
              <div
                key={a.title}
                className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Icon
                    size={28}
                    className="text-primary group-hover:text-white transition-colors"
                  />
                </div>
                <h3 className="font-bold text-lg mb-2">{a.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{a.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
