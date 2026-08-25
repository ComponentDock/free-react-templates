import { useEffect, useState } from 'react'
import { Users, Activity, Calendar } from 'lucide-react'

const stats = [
  { icon: Users, value: 3000, label: 'Happy Patients', suffix: '+' },
  { icon: Activity, value: 2200, label: 'Performed Treatments', suffix: '+' },
  { icon: Calendar, value: 24, label: 'Years of Experience', suffix: '' },
]

const STEP_MS = 50

function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const steps = duration / STEP_MS
    let step = 0
    const timer = setInterval(() => {
      step += 1
      const progress = Math.min(step / steps, 1)
      setCount(Math.floor(progress * target))
      if (progress >= 1) clearInterval(timer)
    }, STEP_MS)
    return () => clearInterval(timer)
  }, [target, duration])

  return count
}

function StatItem({
  icon: Icon,
  value,
  label,
  suffix,
}: {
  icon: typeof Users
  value: number
  label: string
  suffix: string
}) {
  const count = useCountUp(value)
  return (
    <div className="flex items-center gap-4 p-6">
      <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center shrink-0">
        <Icon className="w-7 h-7 text-teal-500" />
      </div>
      <div>
        <span className="text-3xl font-bold text-gray-900">
          {count.toLocaleString()}
          {suffix}
        </span>
        <p className="text-gray-600">{label}</p>
      </div>
    </div>
  )
}

export function Counter() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((s) => (
            <StatItem key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}
