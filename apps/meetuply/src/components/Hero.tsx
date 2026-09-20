import { useState, useEffect } from 'react'

function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(targetDate))

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate))
    }, 1000)
    return () => clearInterval(timer)
  }, [targetDate])

  return timeLeft
}

function calculateTimeLeft(target: Date) {
  const diff = Math.max(0, target.getTime() - Date.now())
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

const TARGET_DATE = new Date('2025-12-31T00:00:00')

export function Hero() {
  const { days, hours, minutes, seconds } = useCountdown(TARGET_DATE)

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-charcoal"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://picsum.photos/seed/meetuply-hero/1920/1080)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-brand/70 to-brand-light/50" />

      <div className="relative z-10 px-4 text-center text-white">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest">
          Dec 31, 2025 &mdash; Convention Center, Manila
        </p>
        <h1 className="mb-8 text-5xl font-extrabold uppercase leading-tight md:text-7xl">
          Developer Conference 2025
        </h1>

        <div className="mb-10 flex justify-center gap-4">
          {[
            { value: days, label: 'Days' },
            { value: hours, label: 'Hours' },
            { value: minutes, label: 'Minutes' },
            { value: seconds, label: 'Seconds' },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center rounded-sm bg-white/10 px-4 py-3 backdrop-blur-sm md:px-6 md:py-4"
            >
              <span className="text-3xl font-bold md:text-5xl">
                {String(item.value).padStart(2, '0')}
              </span>
              <span className="mt-1 text-xs font-medium uppercase tracking-wider">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <a
          href="#pricing"
          className="inline-block rounded-sm bg-brand px-10 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-opacity hover:opacity-90"
        >
          Buy Ticket
        </a>
      </div>
    </section>
  )
}
