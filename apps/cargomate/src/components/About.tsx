import { useEffect, useRef, useState } from 'react'
import { Globe, PackageCheck, Scale, Users } from 'lucide-react'
import { about } from '../data'

const counterIcons = {
  package: PackageCheck,
  users: Users,
  globe: Globe,
  scale: Scale,
} as const

interface CounterProps {
  value: number
  prefix: string
  suffix: string
  icon: keyof typeof counterIcons
  label: string
}

/* Animated counter (reference `.activity_box`): counts up from 0 over 1.2s
   when it scrolls into view. Falls back to the final value instantly when
   IntersectionObserver is unavailable (jsdom). */
function Counter({ value, prefix, suffix, icon, label }: CounterProps) {
  const [display, setDisplay] = useState(0)
  const [started, setStarted] = useState(false)
  const startRef = useRef<number | null>(null)
  const frameRef = useRef(0)
  const Icon = counterIcons[icon]

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      setDisplay(value)
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
    observer.observe(document.getElementById(`counter-${label}`)!)
    return () => observer.disconnect()
  }, [value, label])

  useEffect(() => {
    if (!started) {
      return
    }
    const animate = (now: number) => {
      if (startRef.current === null) {
        startRef.current = now
      }
      const progress = Math.min((now - startRef.current) / 1200, 1)
      setDisplay(Math.round(value * progress))
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate)
      }
    }
    frameRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frameRef.current)
  }, [started, value])

  return (
    <div
      id={`counter-${label}`}
      className="group border-b-[3px] border-line pb-4 transition-colors hover:border-brand"
    >
      <Icon className="h-10 w-10 text-brand" aria-hidden="true" />
      <div className="mt-3 font-heading text-[42px] leading-none font-bold text-navy">
        {prefix}
        {display}
        {suffix}
      </div>
      <p className="mt-3 text-sm text-muted">{label}</p>
    </div>
  )
}

/** About area (reference `.about-area`): the "About Our Company" title row,
 *  a 3×2 grid of grayscale brand wordmarks, and four animated counters with
 *  red hover borders. */
export function About() {
  return (
    <section id={about.id} aria-label="About" className="pb-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-xs font-normal tracking-[1px] text-brand uppercase">
              {about.eyebrow}
            </p>
            <h2 className="mt-3 font-heading text-[32px] leading-tight font-bold text-navy uppercase lg:text-[42px]">
              {about.heading}
            </h2>
            <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-3">
              {about.brands.map((brand) => (
                <div
                  key={brand}
                  className="flex items-center justify-center border border-line py-6 opacity-30 grayscale transition-all duration-300 hover:bg-white hover:opacity-100 hover:shadow-[0px_10px_40px_-14px_#e72727] hover:grayscale-0"
                >
                  <span className="font-heading text-sm font-bold tracking-widest text-navy">
                    {brand}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-x-8 gap-y-10">
              {about.counters.map((counter) => (
                <Counter key={counter.label} {...counter} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
