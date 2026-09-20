import { useState, useEffect } from 'react'

export function getTimeLeft(target: Date) {
  const now = new Date()
  const diff = Math.max(0, target.getTime() - now.getTime())
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

export interface AboutProps {
  className?: string
  targetDate?: string
}

export function About({ className, targetDate = '2030-01-01T09:00:00' }: AboutProps) {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(new Date(targetDate)))

  useEffect(() => {
    const id = setInterval(() => {
      setTimeLeft(getTimeLeft(new Date(targetDate)))
    }, 1000)
    return () => clearInterval(id)
  }, [targetDate])

  const blocks = [
    { value: timeLeft.days, label: 'Days' },
    { value: timeLeft.hours, label: 'Hours' },
    { value: timeLeft.minutes, label: 'Minutes' },
    { value: timeLeft.seconds, label: 'Seconds' },
  ]

  return (
    <section id="about" className={`py-16 md:py-24 ${className ?? ''}`}>
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="mb-8 text-3xl font-bold uppercase tracking-wider text-gray-900 md:text-4xl">
          About The Conference
        </h2>
        <p className="mb-6 text-sm font-semibold uppercase tracking-widest text-gray-500">
          Conference Begins In
        </p>
        <div className="mb-8 flex justify-center gap-4">
          {blocks.map((b) => (
            <div key={b.label} className="flex flex-col items-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-lg bg-gray-100 text-2xl font-bold text-gray-900">
                {String(b.value).padStart(2, '0')}
              </span>
              <span className="mt-2 text-xs font-medium uppercase tracking-wider text-gray-500">
                {b.label}
              </span>
            </div>
          ))}
        </div>
        <p className="mb-6 leading-relaxed text-body">
          Join industry leaders and innovators for three days of inspiring talks, hands-on
          workshops, and unparalleled networking opportunities. Discover the latest trends shaping
          the future of technology and business.
        </p>
        <a
          href="#contact"
          className="inline-block rounded-lg bg-brand px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-brand-hover hover:shadow-lg"
        >
          Register Now
        </a>
      </div>
    </section>
  )
}
