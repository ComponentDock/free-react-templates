import { useEffect, useRef, useState } from 'react'
import { STATS, COUNTER_BG } from '../data'

function useCountUp(target: number, duration = 2000) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    /* v8 ignore next -- defensive guard, ref always attached in jsdom */
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry && entry.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const tick = (now: number) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setValue(Math.floor(eased * target))
            if (progress < 1) requestAnimationFrame(tick)
            else setValue(target)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.3 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return { value, ref }
}

function CounterCard({ stat }: { stat: (typeof STATS)[number] }) {
  const { value, ref } = useCountUp(stat.value)
  const Icon = stat.icon

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <Icon className="mb-3 h-10 w-10 text-[#2f89fc]" />
      <span className="text-3xl font-bold text-white md:text-4xl">{value.toLocaleString()}</span>
      <span className="mt-1 text-sm text-white/70">{stat.label}</span>
    </div>
  )
}

export function StatsCounter() {
  return (
    <section id="stats" className="relative py-20">
      {/* Parallax background */}
      <div
        className="absolute inset-0 bg-cover bg-fixed bg-center"
        style={{ backgroundImage: `url(${COUNTER_BG})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 md:grid-cols-4">
        {STATS.map((stat) => (
          <CounterCard key={stat.label} stat={stat} />
        ))}
      </div>
    </section>
  )
}
