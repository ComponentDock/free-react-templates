import { ClipboardCheck, Smile, Users, Trophy } from 'lucide-react'

const stats = [
  { icon: ClipboardCheck, value: '1,172', label: 'Project Complete' },
  { icon: Smile, value: '1,000', label: 'Happy Clients' },
  { icon: Users, value: '1,200', label: 'Total Clients' },
  { icon: Trophy, value: '1,172', label: 'Winning Awards' },
] as const

export function Counter() {
  return (
    <section className="bg-ink py-16 dark:bg-ink-dark">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="text-center">
              <Icon className="mx-auto h-8 w-8 text-brand" aria-hidden="true" />
              <p className="mt-4 font-display text-3xl font-bold text-white">{value}</p>
              <p className="mt-2 text-sm text-white/60">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
