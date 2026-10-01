import { useEffect, useState } from 'react'
import { COUNTERS } from '../data/content'

const DURATION_MS = 1200

/** Count-up on mount; the static fallback text is the final value (SSR-safe). */
function useCountUp(target: number) {
  const [display, setDisplay] = useState(target)
  useEffect(() => {
    let frame = 0
    const start = performance.now()
    function tick(now: number) {
      const progress = Math.min((now - start) / DURATION_MS, 1)
      setDisplay(Math.round(target * progress))
      if (progress < 1) {
        frame = requestAnimationFrame(tick)
      }
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [target])
  return display
}

function CounterItem({ value, suffix, label, blurb, Icon }: (typeof COUNTERS)[number]) {
  const display = useCountUp(value)
  return (
    <div className="text-center">
      <Icon aria-hidden="true" className="mx-auto mb-4 h-10 w-10 text-brand" />
      <p className="font-display text-5xl font-semibold uppercase text-brand">
        {display}
        {suffix !== '' && <strong className="ml-1 text-4xl font-bold">{suffix}</strong>}
      </p>
      <h3 className="mt-2 font-display text-lg uppercase text-navy">{label}</h3>
      <p className="mx-auto mt-2 max-w-xs font-body text-sm leading-6 text-body">{blurb}</p>
    </div>
  )
}

export function Counters() {
  return (
    <section id="about" className="bg-white px-4 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="font-display text-sm font-bold uppercase tracking-[4px] text-brand">
            About us
          </span>
          <h2 className="mt-2.5 font-display text-3xl font-bold uppercase leading-[48px] text-navy md:text-4xl">
            Our clients &amp; counters
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-10 lg:grid-cols-4">
          {COUNTERS.map((counter) => (
            <CounterItem key={counter.label} {...counter} />
          ))}
        </div>
        <ul
          aria-label="Partner companies"
          className="mt-14 flex flex-wrap items-center justify-center gap-10 border-t border-divider pt-10"
        >
          {['Nexus', 'Orbital', 'Ironline', 'Portside', 'Vanguard'].map((partner) => (
            <li
              key={partner}
              className="font-display text-xl font-medium uppercase tracking-[3px] text-meta grayscale"
            >
              {partner}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
