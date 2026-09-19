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

// Default target: 7 days from now
const defaultTarget = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)

export function DealOfWeek({ targetDate = defaultTarget }: { targetDate?: Date }) {
  const { days, hours, minutes, seconds } = useCountdown(targetDate)

  return (
    <section className="bg-mist py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:grid-cols-2 sm:px-6 lg:px-8">
        {/* Product image */}
        <div>
          <img
            src="https://picsum.photos/seed/merch-deal/800/600"
            alt="Deal of the week product"
            className="w-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Deal info */}
        <div className="text-center sm:text-left">
          <p className="text-xs font-bold uppercase tracking-widest text-primary-400">Week Deal</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink">Hodina Watch</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/60">
            Premium craftsmanship meets modern design. This limited-time offer won't last forever.
          </p>

          {/* Countdown */}
          <div className="mt-8 flex justify-center gap-4 sm:justify-start">
            {[
              { value: days, label: 'Days' },
              { value: hours, label: 'Hours' },
              { value: minutes, label: 'Mins' },
              { value: seconds, label: 'Secs' },
            ].map((unit) => (
              <div key={unit.label} className="text-center">
                <span className="flex h-16 w-16 items-center justify-center bg-ink font-display text-2xl font-bold text-white">
                  {String(unit.value).padStart(2, '0')}
                </span>
                <span className="mt-2 block text-[10px] font-semibold uppercase tracking-wider text-ink/50">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>

          <a
            href="#shop"
            className="mt-8 inline-block bg-ink px-8 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-primary-400"
          >
            Shop Now
          </a>
        </div>
      </div>
    </section>
  )
}
