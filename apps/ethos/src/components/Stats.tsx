import { cn } from '@free-react-templates/ui'

const stats = [
  { label: 'Students', value: 1250 },
  { label: 'Schools', value: 45 },
  { label: 'Books', value: 3200 },
  { label: 'Graduates', value: 890 },
]

function StatItem({ value, label }: { value: number; label: string }) {
  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-white">{value}</div>
      <div className="mt-1 text-sm uppercase tracking-wide text-white/80">{label}</div>
    </div>
  )
}

export function Stats() {
  return (
    <section className={cn('bg-brand-400 py-16')}>
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-bold uppercase tracking-wide text-white">Education is Life</h2>
        <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s) => (
            <StatItem key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </div>
    </section>
  )
}
