import { useCallback, useRef, useState } from 'react'

const stats = [
  { value: 25000, suffix: '+', label: 'Successful Moves' },
  { value: 98, suffix: '%', label: 'On-Time Rate' },
  { value: 120, suffix: '+', label: 'Trucks & Vehicles' },
  { value: 15, suffix: '+', label: 'Years Experience' },
] as const

/* Count-up stat: animates from 0 to the target when the element scrolls
   into view (IntersectionObserver + requestAnimationFrame). Falls back to
   the final value immediately when IntersectionObserver is unavailable
   (jsdom). */
function CounterStat({ stat }: { stat: (typeof stats)[number] }) {
  const [value, setValue] = useState(0)
  const startedRef = useRef(false)
  const observerRef = useRef<IntersectionObserver | null>(null)

  const setNode = useCallback(
    (node: HTMLDivElement | null) => {
      if (!node) {
        observerRef.current?.disconnect()
        return
      }
      if (typeof IntersectionObserver === 'undefined') {
        setValue(stat.value)
        return
      }
      const observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true
            const duration = 1200
            const start = performance.now()
            const tick = (now: number) => {
              const progress = Math.min((now - start) / duration, 1)
              setValue(Math.round(stat.value * progress))
              if (progress < 1) {
                requestAnimationFrame(tick)
              }
            }
            requestAnimationFrame(tick)
            observer.disconnect()
          }
        }
      })
      observer.observe(node)
      observerRef.current = observer
    },
    [stat.value],
  )

  return (
    <div ref={setNode}>
      <p className="text-4xl font-extrabold text-primary-600 dark:text-primary-400 lg:text-5xl">
        {value}
        {stat.suffix}
      </p>
      <p className="mt-1 text-sm font-medium text-gray-500 dark:text-gray-400">{stat.label}</p>
    </div>
  )
}

export function StatsBand() {
  return (
    <section
      id="about"
      className="border-y border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-4 py-16 text-center lg:grid-cols-4 lg:px-8 lg:py-20">
        {stats.map((stat) => (
          <CounterStat key={stat.label} stat={stat} />
        ))}
      </div>
    </section>
  )
}
