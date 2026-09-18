import { useEffect, useState } from 'react'

const STATS = [
  { number: 4500, label: 'Happy Clients' },
  { number: 9200, label: 'Total Jobs' },
  { number: 3200, label: 'Job Seekers' },
  { number: 1500, label: 'Employers' },
]

function StatItem({ number, label }: { number: number; label: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const start = performance.now()
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      setCount(Math.floor(progress * number))
      if (progress < 1) requestAnimationFrame(animate)
    }
    const id = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(id)
  }, [number])

  return (
    <div className="text-center">
      <div className="mb-2 text-4xl font-semibold text-white">{count.toLocaleString()}</div>
      <div className="text-sm text-white/70">{label}</div>
    </div>
  )
}

export function StatsCounter() {
  return (
    <section className="relative py-20">
      <img
        src="https://picsum.photos/seed/talentgate-stats/1920/600"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-dark-overlay/80" />
      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS.map((stat) => (
            <StatItem key={stat.label} number={stat.number} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  )
}
