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

const eventDate = new Date('2026-12-15T09:00:00')

export function Events() {
  const { days, hours, minutes, seconds } = useCountdown(eventDate)

  return (
    <section id="events" aria-label="Events" className="parallax-bg relative bg-brand-dark py-24">
      <img
        src="https://picsum.photos/seed/tadpole-event/1920/800"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-30"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
        <p className="font-display text-lg font-semibold text-brand-yellow">Upcoming Event</p>
        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Annual Winter Festival</h2>
        <p className="mx-auto mt-4 max-w-xl text-white/80">
          Join us for a magical day of performances, crafts, and fun activities for the whole
          family.
        </p>

        <div className="mt-8 flex justify-center gap-4 sm:gap-6">
          {[
            { value: days, label: 'Days' },
            { value: hours, label: 'Hours' },
            { value: minutes, label: 'Minutes' },
            { value: seconds, label: 'Seconds' },
          ].map(({ value, label }) => (
            <div key={label} className="rounded-lg bg-white/10 px-4 py-3 sm:px-6 sm:py-4">
              <p className="text-3xl font-bold text-brand-yellow sm:text-4xl">
                {String(value).padStart(2, '0')}
              </p>
              <p className="mt-1 text-xs text-white/70 uppercase tracking-wider">{label}</p>
            </div>
          ))}
        </div>

        <a
          href="#contact"
          className="btn-pill mt-8 inline-block bg-brand-orange px-8 py-3 text-sm font-bold text-white hover:bg-orange-600 transition-colors"
        >
          RSVP Now
        </a>
      </div>
    </section>
  )
}
