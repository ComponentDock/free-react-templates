import { useEffect, useRef, useState } from 'react'

interface CounterItemProps {
  target: number
  label: string
}

function CounterItem({ target, label }: CounterItemProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const counted = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && !counted.current) {
          counted.current = true
          const duration = 2000
          const start = performance.now()
          const animate = (now: number) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * target))
            if (progress < 1) {
              requestAnimationFrame(animate)
            }
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.3 },
    )

    observer.observe(ref.current!)
    return () => observer.disconnect()
  }, [target])

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">{count.toLocaleString()}</div>
      <div className="text-white/70 text-sm uppercase tracking-wider font-semibold">{label}</div>
    </div>
  )
}

const stats = [
  { target: 4382, label: 'Candidates' },
  { target: 43167, label: 'Jobs Posted' },
  { target: 31472, label: 'Jobs Filled' },
  { target: 985, label: 'Companies' },
]

export function StatsCounter() {
  return (
    <section
      className="relative py-16 bg-cover bg-center"
      style={{ backgroundImage: "url('https://picsum.photos/seed/jobboard-stats/1920/400')" }}
    >
      <div className="absolute inset-0 bg-lime-400/90" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          JobBoard Site Stats
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <CounterItem key={s.label} target={s.target} label={s.label} />
          ))}
        </div>
      </div>
    </section>
  )
}
