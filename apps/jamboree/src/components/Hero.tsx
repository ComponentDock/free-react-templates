import { useState, useEffect } from 'react'

export function getTimeRemaining() {
  const target = new Date()
  target.setDate(target.getDate() + 30)
  target.setHours(0, 0, 0, 0)
  const now = new Date()
  const diff = Math.max(0, target.getTime() - now.getTime())
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

export function Hero() {
  const [time, setTime] = useState(getTimeRemaining)

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeRemaining()), 1000)
    return () => clearInterval(id)
  }, [])

  const units = [
    { label: 'Days', value: time.days },
    { label: 'Hours', value: time.hours },
    { label: 'Minutes', value: time.minutes },
    { label: 'Seconds', value: time.seconds },
  ] as const

  return (
    <section
      id="home"
      className="relative flex min-h-[500px] items-center justify-center bg-cover bg-center bg-no-repeat py-32"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/jamboree-hero/1920/915)' }}
    >
      <div className="absolute inset-0 bg-[#7f3f3b]/30" />
      <div className="relative z-10 px-4 text-center">
        <h1 className="mb-8 text-4xl font-light leading-tight text-white md:text-5xl lg:text-6xl">
          Our Next Event Starts in
        </h1>
        <div className="mx-auto mb-10 flex max-w-lg justify-center rounded-2xl bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end p-1">
          <div className="flex w-full justify-between rounded-xl bg-white/10 px-8 py-6 backdrop-blur-sm">
            {units.map((unit) => (
              <div key={unit.label} className="text-center">
                <span className="block text-3xl font-semibold text-white md:text-4xl">
                  {String(unit.value).padStart(2, '0')}
                </span>
                <span className="mt-1 block text-xs font-light uppercase tracking-wider text-white/80">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>
        </div>
        <a
          href="#upcoming-event"
          className="inline-block rounded-full bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-lg transition-transform hover:scale-105"
        >
          Buy Ticket
        </a>
      </div>
    </section>
  )
}
