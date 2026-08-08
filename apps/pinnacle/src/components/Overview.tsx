import { Building2, Coffee, Smile, Users } from 'lucide-react'

const stats = [
  { value: '286+', label: 'Projects done', Icon: Building2 },
  { value: '942+', label: 'Happy Clients', Icon: Smile },
  { value: '263+', label: 'Real professionals', Icon: Users },
  { value: '2000+', label: 'Cups of Coffee', Icon: Coffee },
] as const

export function Overview() {
  return (
    <section aria-label="Company stats" className="bg-night py-16 dark:bg-gray-900 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <li
              key={stat.label}
              className="flex items-center gap-5 bg-white/10 px-6 py-5 transition-colors hover:bg-brand hover:text-ink"
            >
              <stat.Icon
                className="h-10 w-10 shrink-0 text-brand transition-colors hover:text-ink"
                aria-hidden="true"
              />
              <div>
                <p className="font-display text-3xl font-medium text-white">{stat.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[2px] text-white/60">{stat.label}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
