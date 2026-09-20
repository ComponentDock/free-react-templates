import { useEffect, useState } from 'react'

const targetDate = new Date()
targetDate.setDate(targetDate.getDate() + 131)
targetDate.setHours(targetDate.getHours() + 1)

function useCountdown(target: Date) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    function calc() {
      const diff = Math.max(0, target.getTime() - Date.now())
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      })
    }
    calc()
    const id = setInterval(calc, 1000)
    return () => clearInterval(id)
  }, [target])

  return timeLeft
}

export function UpcomingEvents() {
  const { days, hours, minutes, seconds } = useCountdown(targetDate)

  return (
    <section className="border-b border-charcoal-700 bg-charcoal-800 py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="mb-4 inline-block bg-golden-400 px-4 py-0.5 text-[11px] uppercase tracking-[0.2em] text-white">
              Upcoming Events
            </span>
            <h2 className="mb-4 font-heading text-xl text-white">
              <a href="#" className="text-white transition-opacity hover:opacity-80">
                We must walk in the middle of the road.
              </a>
            </h2>
            <div className="flex flex-wrap gap-4 text-[10px] uppercase tracking-[0.1em] text-white/50">
              <span>Saturday 03/09/2018 09:30 AM</span>
              <span>St. Petersburg, US</span>
              <span>Pastor Luis Matthew</span>
            </div>
          </div>

          <div className="flex overflow-hidden rounded">
            {[
              { value: days, label: 'Days' },
              { value: hours, label: 'Hr' },
              { value: minutes, label: 'Min' },
              { value: seconds, label: 'Sec' },
            ].map((block, i) => (
              <div
                key={i}
                className="relative flex w-20 flex-col items-center justify-center bg-golden-400 px-4 py-5 text-white after:absolute after:right-0 after:top-0 after:h-full after:w-px after:bg-charcoal-800 last:after:hidden"
              >
                <span className="mb-1 text-2xl font-bold">
                  {String(block.value).padStart(2, '0')}
                </span>
                <span className="text-xs uppercase">{block.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
