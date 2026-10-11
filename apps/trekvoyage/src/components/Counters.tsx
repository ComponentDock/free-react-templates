import { useEffect, useRef, useState } from 'react'

const STATS = [
  { value: 9313, label: '# of Travels' },
  { value: 8492, label: '# of Clients' },
  { value: 100, label: '# of Employees' },
  { value: 120, label: '# of Countries' },
] as const

const COUNT_DURATION = 1200

interface CounterProps {
  value: number
  label: string
}

/* One count-up statistic. It ticks from zero to its target when it scrolls
   into view and falls back to the final figure when IntersectionObserver is
   unavailable (jsdom, older browsers). */
function Counter({ value, label }: CounterProps) {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(false)
  const nodeRef = useRef<HTMLDivElement>(null)
  const canAnimate = typeof IntersectionObserver !== 'undefined'

  useEffect(() => {
    if (!canAnimate) {
      return
    }
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      }
    })
    observer.observe(nodeRef.current!)
    return () => observer.disconnect()
  }, [canAnimate])

  useEffect(() => {
    if (!visible) {
      return
    }
    let frame = 0
    const start = performance.now()
    const step = (now: number) => {
      const ratio = Math.min((now - start) / COUNT_DURATION, 1)
      setProgress(ratio)
      if (ratio < 1) {
        frame = requestAnimationFrame(step)
      }
    }
    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [visible])

  const shown = canAnimate ? Math.round(value * progress) : value

  return (
    <div ref={nodeRef} className="text-center">
      <div className="text-[3rem] text-white md:text-[3rem]">{shown.toLocaleString('en-US')}</div>
      <span className="text-white/80">{label}</span>
    </div>
  )
}

/* Full-width turquoise band with four white count-up statistics. */
export function Counters() {
  return (
    <section aria-label="Trekvoyage in numbers" className="bg-brand py-[70px]">
      <div className="mx-auto grid max-w-[1140px] grid-cols-2 gap-[30px] px-4 lg:grid-cols-4">
        {STATS.map((stat) => (
          <Counter key={stat.label} value={stat.value} label={stat.label} />
        ))}
      </div>
    </section>
  )
}
