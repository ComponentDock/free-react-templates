import { useEffect, useRef, useState } from 'react'
import { Globe, HardDrive, Settings, Users } from 'lucide-react'

interface CounterProps {
  icon: typeof Users
  value: number
  label: string
  duration: number
}

const COUNTERS = [
  { icon: Users, value: 2468, label: 'Clients', duration: 4 },
  { icon: Globe, value: 1850, label: 'Domains', duration: 4 },
  { icon: HardDrive, value: 640, label: 'Servers', duration: 4 },
  { icon: Settings, value: 9420, label: 'Installs', duration: 4 },
]

/**
 * Photo band with four counters. Each number counts up once the band scrolls
 * into view; when IntersectionObserver is unavailable (jsdom, older browsers)
 * the final value is shown straight away.
 */
function Counter({ icon: Icon, value, label, duration }: CounterProps) {
  // Without IntersectionObserver (jsdom, older browsers) the final value is
  // shown straight away instead of animating.
  const [display, setDisplay] = useState<number>(() =>
    typeof IntersectionObserver === 'undefined' ? value : 0,
  )
  const [started, setStarted] = useState(false)
  const startRef = useRef<number | null>(null)
  const frameRef = useRef(0)
  const itemRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      return
    }
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      }
    })
    observer.observe(itemRef.current as HTMLDivElement)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) {
      return
    }
    const animate = (now: number) => {
      if (startRef.current === null) {
        startRef.current = now
      }
      const progress = Math.min((now - startRef.current) / (duration * 1000), 1)
      setDisplay(Math.round(value * progress))
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate)
      }
    }
    frameRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frameRef.current)
  }, [started, value, duration])

  return (
    <div ref={itemRef} className="text-center">
      <Icon className="mx-auto h-10 w-10 text-brand" aria-hidden="true" />
      <p className="mt-4 text-4xl font-bold text-white">{display}</p>
      <p className="mt-1 text-base font-bold uppercase tracking-wide text-white">{label}</p>
    </div>
  )
}

export function Achievement() {
  return (
    <section
      id="achievements"
      aria-label="Harbor by the numbers"
      className="relative bg-navy bg-cover bg-top pb-[450px] pt-24"
      style={{ backgroundImage: "url('https://picsum.photos/seed/harbor-achievement/1920/900')" }}
    >
      <div className="absolute inset-0 bg-navy/70" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
          {COUNTERS.map((counter) => (
            <Counter key={counter.label} {...counter} />
          ))}
        </div>
      </div>
    </section>
  )
}
