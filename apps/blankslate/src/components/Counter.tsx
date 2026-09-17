import { useEffect, useRef, useState } from 'react'

const stats = [
  { label: 'Projects Completed', value: 350 },
  { label: 'Happy Clients', value: 280 },
  { label: 'Awards Won', value: 45 },
  { label: 'Team Members', value: 60 },
] as const

function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = ref.current
    /* istanbul ignore next -- ref is always set after mount in jsdom */
    if (!node) return

    let frameId: number

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const start = performance.now()
            const animate = (now: number) => {
              const elapsed = now - start
              const progress = Math.min(elapsed / duration, 1)
              setCount(Math.floor(progress * target))
              if (progress < 1) {
                frameId = requestAnimationFrame(animate)
              }
            }
            frameId = requestAnimationFrame(animate)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.3 },
    )

    observer.observe(node)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frameId)
    }
  }, [target, duration])

  return { count, ref }
}

function StatItem({ label, value }: { label: string; value: number }) {
  const { count, ref } = useCountUp(value)
  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-4xl font-bold text-white">{count}+</p>
      <p className="mt-2 text-sm text-white/70">{label}</p>
    </div>
  )
}

export function Counter() {
  return (
    <section className="relative bg-dark py-20">
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/counter-bg/1920/400"
          alt=""
          className="h-full w-full object-cover opacity-20"
        />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-12 text-center font-display text-3xl font-bold text-white md:text-4xl">
          Interesting Facts
        </h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <StatItem key={stat.label} label={stat.label} value={stat.value} />
          ))}
        </div>
      </div>
    </section>
  )
}
