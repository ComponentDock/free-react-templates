import { useState, useEffect } from 'react'

interface CounterProps {
  target: number
  label: string
}

function CounterDisplay({ target, label, enabled }: CounterProps & { enabled: boolean }) {
  return (
    <div className="text-center">
      <span className="font-mono text-4xl font-bold text-brand">{enabled ? target : 0}</span>
      <span className="mt-2 block font-mono text-sm uppercase tracking-wider text-mist">
        {label}
      </span>
    </div>
  )
}

const counters = [
  { target: 456, label: 'Coffee' },
  { target: 899, label: 'Done Projects' },
  { target: 2000, label: 'Subscribers' },
] as const

export function Counters() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )

    const section = document.getElementById('about')
    if (section) observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="bg-paper py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-mono text-3xl font-normal text-ink sm:text-4xl">Fun Facts</h2>
          <p className="mx-auto mt-4 max-w-2xl font-mono text-sm text-mist">
            A small river named Duden flows by their place and supplies it with the necessary
            regelialia. It is a paradisematic country, in which roasted parts of sentences fly into
            your mouth.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {counters.map((c) => (
            <CounterDisplay key={c.label} target={c.target} label={c.label} enabled={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}
