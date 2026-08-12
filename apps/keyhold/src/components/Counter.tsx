import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 305, label: 'Area Population' },
  { value: 1090, label: 'Total Properties' },
  { value: 209, label: 'Average House' },
  { value: 67, label: 'Total Branches' },
] as const

const DURATION_MS = 1500
const STEP_MS = 20

/**
 * Counter — photo-backdrop statistics band (source `.ftco-counter.img`): a
 * gold overlay panel on the left and four large gold numbers (50px, weight
 * 300) that count up from 0 when the section scrolls into view.
 */
export function Counter() {
  const sectionRef = useRef<HTMLElement>(null)
  const [display, setDisplay] = useState<number[]>(() => stats.map(() => 0))

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      // No observer support (e.g. very old browsers): show final values.
      setDisplay(stats.map((stat) => stat.value))
      return
    }

    const animate = () => {
      const targets = stats.map((stat) => stat.value)
      let elapsed = 0
      const timer = window.setInterval(() => {
        elapsed += STEP_MS
        const progress = Math.min(elapsed / DURATION_MS, 1)
        setDisplay(targets.map((target) => Math.round(target * progress)))
        if (progress >= 1) {
          window.clearInterval(timer)
        }
      }, STEP_MS)
    }

    const observer = new IntersectionObserver((entries) => {
      if (entries[0]?.isIntersecting) {
        animate()
        observer.disconnect()
      }
    })
    observer.observe(sectionRef.current as HTMLElement)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      aria-label="Real estate statistics"
      className="relative overflow-hidden py-20 lg:py-28"
    >
      <img
        src="https://picsum.photos/seed/keyhold-6/1920/600"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Gold overlay panel on the left */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-1/4 bg-brand opacity-30 lg:w-[27%]"
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-10 px-4 text-center lg:grid-cols-4 lg:px-8">
        {stats.map((stat, index) => (
          <div key={stat.label}>
            <p className="text-5xl font-light text-brand">{display[index]}</p>
            <p className="mt-2 text-lg text-soft">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
