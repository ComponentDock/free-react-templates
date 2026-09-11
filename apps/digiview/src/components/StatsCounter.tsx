import { useEffect, useRef, useState } from 'react'
import { cn } from '@free-react-templates/ui'

const counters = [
  { target: 1500, suffix: '+', label: 'Happy Clients' },
  { target: 350, suffix: '+', label: 'Projects Completed' },
  { target: 25, suffix: '+', label: 'Team Members' },
  { target: 10, suffix: '+', label: 'Years Experience' },
]

export function useCountUp(target: number, start: boolean) {
  const [count, setCount] = useState(0)
  const rafRef = useRef<number>(0)
  const startTimeRef = useRef(0)

  useEffect(() => {
    if (!start) return
    startTimeRef.current = performance.now()
    const duration = 2000

    function frame(now: number) {
      const elapsed = now - startTimeRef.current
      const progress = Math.min(elapsed / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(frame)
      } else {
        setCount(target)
      }
    }
    rafRef.current = requestAnimationFrame(frame)

    return () => {
      cancelAnimationFrame(rafRef.current)
    }
  }, [start, target])

  return count
}

function Counter({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    /* v8 ignore next -- defensive guard, ref is always set after mount */
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const count = useCountUp(target, visible)

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl font-bold text-brand md:text-5xl">
        {count}
        {suffix}
      </div>
      <div className="mt-2 text-sm text-gray-400">{label}</div>
    </div>
  )
}

interface StatsCounterProps {
  className?: string
}

export function StatsCounter({ className }: StatsCounterProps) {
  return (
    <section className={cn('bg-darker py-16', className)}>
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 md:grid-cols-4 md:px-8">
        {counters.map((c) => (
          <Counter key={c.label} {...c} />
        ))}
      </div>
    </section>
  )
}
