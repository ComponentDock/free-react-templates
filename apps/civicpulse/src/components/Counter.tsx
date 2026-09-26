import { useEffect, useState } from 'react'

interface CounterItemProps {
  target: number
  suffix: string
  label: string
}

function CounterItem({ target, suffix, label }: CounterItemProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = Math.ceil(duration / 16)
    const step = Math.ceil(target / steps)
    let current = 0
    const id = setInterval(() => {
      current += step
      if (current >= target) {
        setCount(target)
        clearInterval(id)
      } else {
        setCount(current)
      }
    }, 16)
    return () => clearInterval(id)
  }, [target])

  const progress = (count / target) * 339.3

  return (
    <div className="flex flex-col items-center text-white">
      <div className="relative flex h-28 w-28 items-center justify-center">
        <svg className="absolute inset-0 -rotate-90" viewBox="0 0 120 120">
          <circle
            cx="60"
            cy="60"
            r="54"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="6"
          />
          <circle
            cx="60"
            cy="60"
            r="54"
            fill="none"
            stroke="#3898f8"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={`${progress} 339.3`}
          />
        </svg>
        <span className="text-3xl font-bold">
          {count}
          {suffix}
        </span>
      </div>
      <span className="mt-3 text-sm font-medium uppercase tracking-wider text-gray-300">
        {label}
      </span>
    </div>
  )
}

const stats = [
  { target: 2000, suffix: '+', label: 'Projects' },
  { target: 5500, suffix: '+', label: 'Employees' },
  { target: 959, suffix: '', label: 'Clients' },
  { target: 367, suffix: '', label: 'Tickets' },
] as const

export function Counter() {
  return (
    <section
      id="counter"
      className="relative bg-ink py-20 lg:py-[120px]"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/civicpulse-counter-bg/1600/800)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-2 gap-10 px-4 sm:px-6 lg:grid-cols-4">
        {stats.map((stat) => (
          <CounterItem key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  )
}
