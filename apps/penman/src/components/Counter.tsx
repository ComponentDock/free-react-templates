import { useEffect, useRef, useState } from 'react'

interface StatProps {
  target: number
  label: string
}

function useCountUp(target: number, enabled: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!enabled) return
    const duration = 2000
    const start = performance.now()
    const animate = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [target, enabled])

  return count
}

function Stat({ target, label }: StatProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true)
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(el!)
    return () => observer.disconnect()
  }, [])

  const count = useCountUp(target, visible)

  return (
    <div ref={ref} className="flex-1 px-4 py-6 text-center">
      <div className="rounded-lg bg-white p-6 shadow-sm">
        <span className="block text-4xl font-bold text-primary-400">{count.toLocaleString()}</span>
        <span className="mt-2 block text-sm text-smoke">{label}</span>
      </div>
    </div>
  )
}

const stats = [
  { target: 1100, label: 'Copies Sold' },
  { target: 1200, label: 'Copies Released' },
  { target: 340, label: 'Cup Of Coffee' },
  { target: 12000, label: 'Happy Readers' },
]

export function Counter() {
  return (
    <section className="bg-mist py-12">
      <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-4 px-4 md:px-8">
        {stats.map((stat) => (
          <Stat key={stat.label} target={stat.target} label={stat.label} />
        ))}
      </div>
    </section>
  )
}
