import { useEffect, useRef, useState, useCallback } from 'react'

const stats = [
  { target: 30, label: 'Years Experienced' },
  { target: 1500, label: 'Project Successful' },
  { target: 100, label: 'Professional Expert' },
  { target: 300, label: 'Happy Customers' },
]

function useCountUp(target: number, isVisible: boolean, duration = 2000) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return
    let start = 0
    const startTime = performance.now()
    const step = (timestamp: number) => {
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // ease-out cubic
      setCount(Math.floor(eased * target))
      if (progress < 1) {
        start = requestAnimationFrame(step)
      }
    }
    start = requestAnimationFrame(step)
    return () => cancelAnimationFrame(start)
  }, [isVisible, target, duration])

  return count
}

function StatBlock({
  target,
  label,
  isVisible,
}: {
  target: number
  label: string
  isVisible: boolean
}) {
  const count = useCountUp(target, isVisible)

  return (
    <div className="text-center">
      <span className="font-heading text-4xl font-bold text-white md:text-5xl">{count}</span>
      <p className="mt-2 text-sm text-white/80">{label}</p>
    </div>
  )
}

export function CounterStats() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    if (entries[0]?.isIntersecting) {
      setIsVisible(true)
    }
  }, [])

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- ref is always attached
    const el = sectionRef.current!
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.3,
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [handleIntersection])

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-brand py-16">
      <img
        src="https://picsum.photos/seed/nectar-stats/1600/400"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-20"
        aria-hidden="true"
      />
      <div className="relative z-10 container mx-auto grid grid-cols-2 gap-8 px-4 md:grid-cols-4">
        {stats.map((stat) => (
          <StatBlock
            key={stat.label}
            target={stat.target}
            label={stat.label}
            isVisible={isVisible}
          />
        ))}
      </div>
    </section>
  )
}
