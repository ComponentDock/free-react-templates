import { useEffect, useState } from 'react'
import { counterBackground, counters } from '../data'

/** Counts from 0 to the target over ~1.5s once mounted. */
function CountUp({ target }: { target: number }) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    const steps = 50
    const stepSize = target / steps
    let current = 0
    const id = window.setInterval(() => {
      current += stepSize
      if (current >= target) {
        setValue(target)
        window.clearInterval(id)
      } else {
        setValue(current)
      }
    }, 30)
    return () => window.clearInterval(id)
  }, [target])

  return <span className="text-[34px] font-normal text-white">{Math.round(value)}</span>
}

export function Counters() {
  return (
    <section
      id="about"
      aria-label="Company counters"
      className="bg-cover bg-center py-20"
      style={{ backgroundImage: `url(${counterBackground})` }}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 px-4 text-center md:grid-cols-4">
        {counters.map((counter) => (
          <div key={counter.label}>
            <CountUp target={counter.value} />
            <span className="mt-2 block text-base text-white-70">{counter.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
