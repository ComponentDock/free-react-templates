import { ArrowRight } from 'lucide-react'
import { Layers, PenTool, PlayCircle, GitBranch, Trophy, DollarSign } from 'lucide-react'

const achievements = [
  { icon: Layers, label: 'Portfolio Pieces', count: '250+' },
  { icon: PenTool, label: 'Design Shots', count: '180+' },
  { icon: PlayCircle, label: 'Video Subscribers', count: '12K+' },
  { icon: GitBranch, label: 'Code Commits', count: '5K+' },
  { icon: Trophy, label: 'Awards Won', count: '30+' },
  { icon: DollarSign, label: 'Revenue Generated', count: '$2M+' },
] as const

export function Achievements() {
  return (
    <section id="achievements" className="bg-white py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-semibold text-ink">Our Achievements</h2>
          <p className="mt-4 text-sm leading-relaxed text-smoke">
            Few would argue that, despite the advancements of feminism over the past three decades,
            women still face a double standard when it comes to their behavior. While men's
            borderline-inappropriate behavior is often laughed off as "boys will be boys," women
            face higher conduct standards.
          </p>
          <a
            href="#skills"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary-400 px-8 py-3 text-sm font-medium uppercase text-ink transition-colors hover:bg-primary-400 hover:text-white"
          >
            View More
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
          {achievements.map((item) => (
            <div key={item.label} className="text-center">
              <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary-50 text-primary-400 transition-colors group-hover:bg-primary-400 group-hover:text-white">
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h6 className="text-sm font-semibold text-ink">{item.label}</h6>
              <p className="mt-1 text-xs text-smoke">{item.count}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
