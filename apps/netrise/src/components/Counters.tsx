import { useEffect, useRef, useState } from 'react'
import { counters } from '../data'

export function Counters() {
  const sectionRef = useRef<HTMLElement>(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setStarted(true)
            observer.disconnect()
          }
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(sectionRef.current as HTMLElement)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      aria-label="Website counters"
      className="bg-fixed bg-cover bg-center"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/netrise-counter/1920/700)' }}
    >
      <div className="bg-navy/80">
        <div className="mx-auto max-w-[1200px] px-4 py-24 text-center">
          <p className="text-sm font-semibold uppercase tracking-[1px] text-white/90">
            More than 100,000 websites hosted
          </p>
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {counters.map((counter) => (
              <div key={counter.label}>
                <p className="text-5xl font-bold text-white">
                  {started ? counter.value.toLocaleString('en-US') : '0'}
                </p>
                <p className="mt-3 text-base font-light text-white/90">{counter.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
