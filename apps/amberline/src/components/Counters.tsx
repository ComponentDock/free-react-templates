import { useEffect, useRef, useState } from 'react'
import { stats } from '../data'
import type { Stat } from '../data'

const bandImage = 'https://picsum.photos/seed/amberline-counter/1920/600'

function format(value: number) {
  return value.toLocaleString('en-US')
}

function Counter({ stat }: { stat: Stat }) {
  const [display, setDisplay] = useState(0)
  const [started, setStarted] = useState(false)
  /* Without IntersectionObserver (jsdom included) nothing ever triggers the
     count-up, so the final figure is derived during render instead of being
     written back from an effect. */
  const shown = typeof IntersectionObserver === 'undefined' ? stat.value : display
  const startRef = useRef<number | null>(null)
  const frameRef = useRef<number>(0)

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
    observer.observe(document.getElementById(`stat-${stat.caption}`)!)
    return () => observer.disconnect()
  }, [stat.caption])

  useEffect(() => {
    if (!started) {
      return
    }
    const animate = (now: number) => {
      if (startRef.current === null) {
        startRef.current = now
      }
      const progress = Math.min((now - startRef.current) / 1200, 1)
      setDisplay(Math.round(stat.value * progress))
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate)
      }
    }
    frameRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frameRef.current)
  }, [started, stat.value])

  const Icon = stat.icon

  return (
    <li id={`stat-${stat.caption}`} className="flex items-center gap-4">
      <Icon aria-hidden="true" className="size-[60px] shrink-0 text-brand" />
      <div>
        <div className="text-[40px] leading-none font-bold text-brand">{format(shown)}</div>
        <div className="mt-2 text-[16px] uppercase tracking-[0.08em] text-white/90">
          {stat.caption}
        </div>
      </div>
    </li>
  )
}

export function Counters() {
  return (
    <section aria-label="Key numbers" className="relative overflow-hidden bg-ink/80 py-24">
      <img
        src={bandImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 size-full object-cover opacity-60"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-ink/80" />
      <ul className="relative mx-auto grid max-w-[1320px] gap-10 px-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Counter key={stat.caption} stat={stat} />
        ))}
      </ul>
    </section>
  )
}
