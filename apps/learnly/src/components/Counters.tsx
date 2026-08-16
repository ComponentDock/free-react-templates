import { BookOpen, CalendarDays, GraduationCap, Users } from 'lucide-react'
import { counters } from '../data'

const icons = {
  graduation: GraduationCap,
  users: Users,
  calendar: CalendarDays,
  book: BookOpen,
} as const

export function Counters() {
  return (
    <section
      id="team"
      aria-label="Statistics"
      className="relative bg-cover bg-center py-24"
      style={{ backgroundImage: 'url(https://picsum.photos/id/8/1920/800)' }}
    >
      <div data-counter-overlay className="absolute inset-0 bg-ink/30" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
          {counters.map((counter) => {
            const Icon = icons[counter.icon]
            return (
              <div key={counter.caption} className="text-center text-white">
                <Icon className="mx-auto h-10 w-10" aria-hidden="true" />
                <p className="mt-4 text-[40px] font-bold leading-none">{counter.value}</p>
                <span className="mt-3 inline-block text-sm text-white/90">{counter.caption}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
