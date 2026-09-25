import { useEffect, useRef, useState } from 'react'

interface StatItemProps {
  target: number
  label: string
}

function StatItem({ target, label }: StatItemProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const counted = useRef(false)

  useEffect(() => {
    const el = ref.current!

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && !counted.current) {
          counted.current = true
          const duration = 2000
          const step = Math.max(1, Math.floor(target / (duration / 16)))
          let current = 0
          const timer = setInterval(() => {
            current += step
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(current)
            }
          }, 16)
        }
      },
      { threshold: 0.3 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return (
    <div ref={ref} className="flex-1 rounded-lg bg-white/90 px-6 py-8 text-center shadow-md">
      <span className="font-display text-4xl font-bold text-navy">{count.toLocaleString()}</span>
      <span className="mt-2 block font-display text-sm font-medium text-gray-500">{label}</span>
    </div>
  )
}

const stats = [
  { target: 1100, label: 'Copies Sold' },
  { target: 1200, label: 'Copies Released' },
  { target: 340, label: 'Cups Of Coffee' },
  { target: 12000, label: 'Happy Readers' },
]

export function Stats() {
  return (
    <section aria-label="Statistics" className="bg-gradient-to-r from-navy to-navy-dark py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((s) => (
            <StatItem key={s.label} target={s.target} label={s.label} />
          ))}
        </div>
      </div>
    </section>
  )
}
