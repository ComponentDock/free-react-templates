import { useState, useEffect } from 'react'

export interface CountdownProps {
  targetDate?: Date
  className?: string
}

function pad(n: number) {
  return String(n).padStart(2, '0')
}

export function Countdown({ targetDate, className }: CountdownProps) {
  const [target] = useState(() => targetDate ?? new Date(Date.now() + 3 * 24 * 60 * 60 * 1000))
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [])

  const diff = Math.max(0, target.getTime() - now)
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)

  const units = [
    { value: days, label: 'Days' },
    { value: hours, label: 'Hours' },
    { value: minutes, label: 'Minutes' },
    { value: seconds, label: 'Seconds' },
  ]

  return (
    <section className={`relative overflow-hidden bg-navy py-16 ${className ?? ''}`}>
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/timer/1920/400)' }}
      />
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <ul className="flex items-center justify-center gap-8 md:gap-16">
          {units.map((u) => (
            <li key={u.label} className="text-center">
              <div
                className="text-4xl font-black text-white md:text-6xl"
                data-testid={u.label.toLowerCase()}
              >
                {pad(u.value)}
              </div>
              <div className="mt-1 text-xs font-medium uppercase tracking-widest text-primary-400">
                {u.label}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
