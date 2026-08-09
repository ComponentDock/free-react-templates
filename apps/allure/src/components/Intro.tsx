import { useEffect, useRef, useState } from 'react'

interface Milestone {
  value: number
  label: string
}

const milestones: Milestone[] = [
  { value: 173, label: 'Models @ The Agency' },
  { value: 2190, label: 'Modeling Contracts' },
  { value: 25, label: 'Model Recruitors' },
]

/* Animated counter: counts up from 0 when it scrolls into view. Falls back
   to the final value instantly when IntersectionObserver is unavailable
   (jsdom). */
function Counter({ value, label }: Milestone) {
  const [display, setDisplay] = useState(0)
  const [started, setStarted] = useState(false)
  const startRef = useRef<number | null>(null)
  const frameRef = useRef<number>(0)

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
    <div id={`counter-${label}`} className="text-center lg:text-left">
      <div className="font-display text-7xl font-bold text-brand">{display}</div>
      <div className="mt-3 text-lg font-medium text-ink">{label}</div>
    </div>
  )
}

export function Intro() {
  return (
    <section id="about" className="bg-white py-24 transition-colors lg:py-32 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <h2 className="font-display text-4xl font-bold text-ink sm:text-5xl dark:text-white">
            Model Management<span className="text-brand">.</span>
          </h2>
          <p className="mt-6 leading-relaxed text-mist">
            Allure is a full-service modeling agency representing established faces and rising
            talent across fashion, editorial, and runway. Our bookers pair every model with the
            right casting, campaign, and show — from first test shoot to front row.
          </p>
          <p className="mt-4 leading-relaxed text-mist">
            With offices in Milan, Paris, New York, and London, we scout worldwide and develop long
            careers built on trust, craft, and a sharp eye for the next look.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {milestones.map((milestone) => (
            <Counter key={milestone.label} {...milestone} />
          ))}
        </div>
      </div>
    </section>
  )
}
