import { useCallback, useEffect, useRef, useState } from 'react'
import { Briefcase, Users, Award, Clock } from 'lucide-react'

const stats = [
  { icon: Briefcase, value: 705, label: 'Projects Completed' },
  { icon: Users, value: 809, label: 'Satisfied Customers' },
  { icon: Award, value: 335, label: 'Awards Received' },
  { icon: Clock, value: 35, label: 'Years of Experience' },
] as const

function useCountUp(target: number, active: boolean) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!active) return
    let frame = 0
    const started = performance.now()
    const duration = 2000
    const tick = (now: number) => {
      const progress = Math.min((now - started) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(target * eased))
      if (progress < 1) {
        frame = requestAnimationFrame(tick)
      }
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [active, target])
  return value
}

interface StatItemProps {
  icon: React.ElementType
  value: number
  label: string
}

function StatItem({ icon: Icon, value, label }: StatItemProps) {
  const [inView, setInView] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)

  const setNode = useCallback((node: HTMLDivElement | null) => {
    if (node) {
      const observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true)
          }
        }
      })
      observer.observe(node)
      observerRef.current = observer
    } else {
      observerRef.current?.disconnect()
    }
  }, [])

  const count = useCountUp(value, inView)

  return (
    <div ref={setNode} className="flex flex-col items-center px-6 py-4 text-center">
      <Icon className="mb-2 h-8 w-8 text-brand" aria-hidden={true} />
      <span className="mb-1 font-heading text-3xl font-bold text-white">{count}</span>
      <span className="text-sm text-white/70">{label}</span>
    </div>
  )
}

export function Stats() {
  return (
    <section className="bg-navy py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s) => (
            <StatItem key={s.label} icon={s.icon} value={s.value} label={s.label} />
          ))}
        </div>
      </div>
    </section>
  )
}
