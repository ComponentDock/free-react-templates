import { useState, useEffect } from 'react'
import { MapPin, Clock } from 'lucide-react'

export interface HeroProps {
  className?: string
}

function padZero(n: number): string {
  return n.toString().padStart(2, '0')
}

export function Hero({ className }: HeroProps) {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    // Target date: Feb 1, 2026
    const target = new Date('2026-02-01T00:00:00').getTime()

    function update() {
      const now = Date.now()
      const diff = Math.max(0, target - now)
      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((diff / (1000 * 60)) % 60)
      const seconds = Math.floor((diff / 1000) % 60)
      setCountdown({ days, hours, minutes, seconds })
    }

    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section
      id="home"
      className={`relative flex min-h-[700px] items-center justify-center bg-cover bg-center bg-no-repeat ${className ?? ''}`}
      style={{
        backgroundImage:
          'linear-gradient(rgba(26,26,46,0.85), rgba(26,26,46,0.85)), url(https://picsum.photos/seed/convention-hero/1920/1080)',
      }}
    >
      <div className="px-6 text-center">
        <p
          className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#ff2d9b]"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Hurry Up! Don&#39;t Waste Time
        </p>
        <h1
          className="mb-6 text-5xl font-bold text-white md:text-7xl"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Biggest Developer Conference 2025
        </h1>

        {/* Countdown */}
        <div className="mb-8 flex items-center justify-center gap-6" data-testid="countdown">
          <div className="text-center">
            <span
              className="block text-4xl font-bold text-white"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {padZero(countdown.days)}
            </span>
            <span className="text-xs uppercase tracking-wider text-gray-400">Days</span>
          </div>
          <div className="text-center">
            <span
              className="block text-4xl font-bold text-white"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {padZero(countdown.hours)}
            </span>
            <span className="text-xs uppercase tracking-wider text-gray-400">Hours</span>
          </div>
          <div className="text-center">
            <span
              className="block text-4xl font-bold text-white"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {padZero(countdown.minutes)}
            </span>
            <span className="text-xs uppercase tracking-wider text-gray-400">Minutes</span>
          </div>
          <div className="text-center">
            <span
              className="block text-4xl font-bold text-white"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {padZero(countdown.seconds)}
            </span>
            <span className="text-xs uppercase tracking-wider text-gray-400">Seconds</span>
          </div>
        </div>

        {/* Location + date */}
        <div className="flex flex-col items-center gap-3 text-white/70">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-[#ff2d9b]" />
            <span>New York Convention Center</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-[#ff2d9b]" />
            <span>01st - 05th February, 2025</span>
          </div>
        </div>
      </div>
    </section>
  )
}
