import { Brush, CheckSquare, Ruler } from 'lucide-react'

const rows = [
  {
    icon: Brush,
    label: 'Set dry signs spirit a kind First shall them.',
  },
  {
    icon: CheckSquare,
    label: "He two face one moved dominion man you're likeness",
  },
  {
    icon: Ruler,
    label: 'Sea forth fill have divide be dominion from life',
  },
] as const

export function Stats() {
  return (
    <section aria-label="Stats" className="bg-white py-16 sm:py-24 dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <img
          src="https://picsum.photos/seed/favison-stats/640/560"
          alt="Favison growth stats dashboard"
          className="w-full rounded-xl shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-bold text-ink sm:text-4xl dark:text-white">
            Form Female From Cattle Evening.
          </h2>
          <p className="mt-4 text-lg font-semibold text-primary-600 dark:text-primary-400">
            And appear great open bearing evening dominion vodi
          </p>
          <p className="mt-4 leading-relaxed text-body dark:text-gray-400">
            There earth face earth behold. She'd stars made void two given do and also. Our own
            grass days. Greater male Shall There faced earth behold She star.
          </p>
          <ul className="mt-8 space-y-5">
            {rows.map((row) => (
              <li key={row.label} className="flex items-start gap-4">
                <row.icon className="h-7 w-7 shrink-0 text-sun" aria-hidden="true" />
                <span className="text-ink dark:text-gray-200">{row.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
