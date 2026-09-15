import { Coffee, Trophy, Users, Zap } from 'lucide-react'

const milestones = [
  { value: '150+', label: 'Projects Completed', icon: Zap },
  { value: '120+', label: 'Happy Clients', icon: Users },
  { value: '15+', label: 'Awards Won', icon: Trophy },
  { value: '1000+', label: 'Coffee Cups', icon: Coffee },
] as const

export function Milestones() {
  return (
    <section aria-label="Milestones" className="bg-primary-400 py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 sm:grid-cols-4 sm:px-6">
        {milestones.map((milestone) => (
          <div key={milestone.label} className="text-center">
            <milestone.icon className="mx-auto h-8 w-8 text-white/80" aria-hidden="true" />
            <p className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
              {milestone.value}
            </p>
            <p className="mt-1 text-sm font-medium text-white/80">{milestone.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
