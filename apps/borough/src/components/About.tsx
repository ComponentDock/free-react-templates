import { useEffect, useRef, useState } from 'react'
import { aboutParagraphs, aboutSubheading, aboutTitle, counters } from '../data'

function Counter({ target, label }: { target: number; label: string }) {
  const [value, setValue] = useState(0)
  const nodeRef = useRef<HTMLSpanElement>(null)
  const frameRef = useRef<number>(0)

  useEffect(() => {
    // jsdom has no IntersectionObserver — fall back to the final value so
    // the static render still shows correct numbers.
    if (typeof IntersectionObserver === 'undefined') {
      setValue(target)
      return
    }

    const start = (): void => {
      let startTime: number | null = null
      const step = (timestamp: number): void => {
        if (startTime === null) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / 1500, 1)
        setValue(Math.round(progress * target))
        if (progress < 1) {
          frameRef.current = requestAnimationFrame(step)
        }
      }
      frameRef.current = requestAnimationFrame(step)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          start()
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )
    // The counter node is always rendered before this effect runs.
    observer.observe(nodeRef.current!)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frameRef.current)
    }
  }, [target])

  return (
    <div className="rounded-[4px] bg-black/5 px-5 py-[30px] text-center">
      <span ref={nodeRef} className="text-[40px] font-semibold text-black">
        {value}
      </span>
      <p className="mt-2 text-[15px] text-neutral-600">{label}</p>
    </div>
  )
}

export function About() {
  return (
    <section aria-label="About Borough" className="px-4 py-28 sm:px-6" id="about">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
        <div>
          <p className="text-[13px] font-bold uppercase text-brand">{aboutSubheading}</p>
          <h2 className="mt-1 text-[28px] font-bold leading-tight text-neutral-900 lg:text-[50px]">
            {aboutTitle}
          </h2>
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="mt-6 leading-relaxed text-neutral-600">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-6">
          {counters.map((counter) => (
            <Counter key={counter.label} target={counter.value} label={counter.label} />
          ))}
        </div>
      </div>
    </section>
  )
}
