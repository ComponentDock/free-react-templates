import { useEffect, useState } from 'react'

const counters = [
  { label: 'CMS Installation', target: 12000 },
  { label: 'Awards Won', target: 100 },
  { label: 'Registered Domains', target: 10000 },
  { label: 'Satisfied Customers', target: 9000 },
]

/** Ease-out cubic count-up from 0 to the target, driven by an interval. */
function useCountUp(target: number): number {
  const [value, setValue] = useState(0)

  useEffect(() => {
    const duration = 1600
    const step = 16
    const totalSteps = duration / step
    let stepCount = 0

    const timer = window.setInterval(() => {
      stepCount += 1
      const progress = Math.min(stepCount / totalSteps, 1)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(target * eased))
      if (progress >= 1) window.clearInterval(timer)
    }, step)

    return () => window.clearInterval(timer)
  }, [target])

  return value
}

function StatCounter({ label, target }: { label: string; target: number }) {
  const value = useCountUp(target)
  return (
    <div className="text-center">
      <p className="text-[40px] font-light text-primary-600">{value.toLocaleString('en-US')}</p>
      <p className="mt-2 text-lg text-black/70 uppercase">{label}</p>
    </div>
  )
}

/** Counter section: heading + four animated stat counters. */
export function Stats() {
  return (
    <section aria-label="Website statistics" className="bg-mist-50 py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="mx-auto max-w-2xl text-center text-3xl font-medium text-gray-900">
          More than 12,000 websites trusted hosted
        </h2>
        <div className="mt-16 grid grid-cols-2 gap-10 md:grid-cols-4">
          {counters.map((counter) => (
            <StatCounter key={counter.label} {...counter} />
          ))}
        </div>
      </div>
    </section>
  )
}
