import { useState, useEffect } from 'react'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function calcTimeLeft(target: Date): TimeLeft {
  const diff = target.getTime() - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

export function Countdown({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState(() => calcTimeLeft(targetDate))

  useEffect(() => {
    const id = setInterval(() => {
      setTimeLeft(calcTimeLeft(targetDate))
    }, 1000)
    return () => clearInterval(id)
  }, [targetDate])

  const items = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ]

  return (
    <div className="flex items-center gap-6 sm:gap-10">
      {items.map(({ label, value }) => (
        <div key={label} className="text-center">
          <span className="block text-4xl font-bold text-white sm:text-5xl">
            {String(value).padStart(2, '0')}
          </span>
          <span className="mt-1 block text-xs tracking-widest text-white/60 uppercase">
            {label}
          </span>
        </div>
      ))}
    </div>
  )
}

export function Hero() {
  const [targetDate] = useState(() => {
    const d = new Date()
    d.setDate(d.getDate() + 90)
    return d
  })

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          'linear-gradient(rgba(5,5,5,0.6), rgba(5,5,5,0.6)), url(https://picsum.photos/seed/encoremix-hero/1920/1080)',
      }}
    >
      <div className="flex flex-col items-center gap-8 px-4 text-center">
        <span className="text-sm font-medium tracking-widest text-white/70 uppercase">
          June 15–17, 2026 • Miami, FL
        </span>

        <h1 className="font-accent text-5xl gradient-text sm:text-7xl md:text-8xl">Hello world!</h1>

        <Countdown targetDate={targetDate} />

        <div className="mt-4 flex flex-col gap-4 sm:flex-row">
          <a
            href="#tickets"
            className="border-2 border-white bg-white px-8 py-3 text-sm font-semibold text-brand-dark transition-colors hover:bg-transparent hover:text-white"
          >
            Buy Tickets
          </a>
          <a
            href="#lineup"
            className="gradient-bg border-2 border-brand-cyan px-8 py-3 text-sm font-semibold text-brand-dark transition-opacity hover:opacity-90"
          >
            See Lineup
          </a>
        </div>
      </div>
    </section>
  )
}
