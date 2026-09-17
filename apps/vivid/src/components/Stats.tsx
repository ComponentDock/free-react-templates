import { Users, Trophy, Coffee, FileText } from 'lucide-react'

const stats = [
  { icon: Users, value: 451, label: 'Happy clients' },
  { icon: Trophy, value: 12, label: 'Awards won' },
  { icon: Coffee, value: '154', suffix: 'K', label: 'Cups of Coffee' },
  { icon: FileText, value: 45, label: 'Projects completed' },
]

export function Stats() {
  return (
    <section className="relative py-20">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/vivid-stats/1920/600)' }}
      />
      <div className="absolute inset-0 bg-dark-bg opacity-80" />

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="mx-auto mb-3 text-3xl text-white" size={32} />
              <h3 className="mb-2 text-4xl font-bold text-white">
                {stat.value}
                {stat.suffix && <span>{stat.suffix}</span>}
              </h3>
              <span className="text-sm text-white/80">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
