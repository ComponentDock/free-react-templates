import { useEffect, useRef, useState } from 'react'

interface CounterItemProps {
  end: number
  label: string
}

function CounterItem({ end, label }: CounterItemProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const counted = useRef(false)

  useEffect(() => {
    const el = ref.current!

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && !counted.current) {
          counted.current = true
          let current = 0
          const step = Math.max(1, Math.floor(end / 60))
          const timer = setInterval(() => {
            current += step
            if (current >= end) {
              setCount(end)
              clearInterval(timer)
            } else {
              setCount(current)
            }
          }, 20)
        }
      },
      { threshold: 0.3 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [end])

  return (
    <div ref={ref} className="text-center">
      <p className="text-5xl font-bold">{count.toLocaleString()}</p>
      <p className="mt-2 text-sm font-bold uppercase tracking-widest text-white/80">{label}</p>
    </div>
  )
}

const stats = [
  { end: 99399, label: 'Lines of Code' },
  { end: 99, label: 'Number of Projects' },
  { end: 124, label: 'Number of Clients' },
]

export { CounterItem, stats }

export function Counter() {
  return (
    <section className="bg-proton-500 py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 sm:grid-cols-3 sm:px-6">
        {stats.map((stat) => (
          <CounterItem key={stat.label} end={stat.end} label={stat.label} />
        ))}
      </div>
    </section>
  )
}
