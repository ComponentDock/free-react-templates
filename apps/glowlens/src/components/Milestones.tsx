import { Monitor, Trophy, Camera, Video } from 'lucide-react'
import { milestones } from '../data'

const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  Monitor,
  Trophy,
  Camera,
  Video,
}

export function Milestones() {
  return (
    <section className="py-[130px] bg-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {milestones.map((stat) => {
            const Icon = iconMap[stat.iconName]
            return (
              <div key={stat.label} className="text-center text-white">
                {Icon && (
                  <Icon className="mx-auto mb-4 h-10 w-10 text-white/80" aria-hidden="true" />
                )}
                <p className="mb-2 text-4xl font-bold">{stat.value}</p>
                <p className="text-sm uppercase tracking-wider text-white/70">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
