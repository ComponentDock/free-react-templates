import { useEffect, useState } from 'react'
import { Button } from '@free-react-templates/ui'

const events = [
  { date: 'APR 14', name: 'Child Dedication' },
  { date: 'MAY 03', name: 'Church Fellowship' },
  { date: 'JUN 21', name: 'Mass Baptism' },
  { date: 'JUL 15', name: 'School of the Prophets' },
] as const

function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(targetDate))

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate))
    }, 1000)
    return () => clearInterval(timer)
  }, [targetDate])

  return timeLeft
}

function getTimeLeft(target: Date) {
  const diff = Math.max(0, target.getTime() - Date.now())
  return {
    weeks: Math.floor(diff / (1000 * 60 * 60 * 24 * 7)),
    days: Math.floor((diff / (1000 * 60 * 60 * 24)) % 7),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

export function WorshipTime() {
  const [targetDate] = useState(() => new Date(Date.now() + 4 * 7 * 24 * 60 * 60 * 1000))
  const { weeks, days, hours, minutes, seconds } = useCountdown(targetDate)

  return (
    <section className="flex flex-col md:flex-row">
      {/* Left — Camp Meeting */}
      <div
        className="relative flex min-h-[400px] items-center justify-center bg-cover bg-center md:w-1/2"
        style={{
          backgroundImage: "url('https://picsum.photos/seed/compassion-camp/800/600')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">Camp Meeting Will Start Soon</h2>
          <div className="mb-6 flex justify-center gap-4">
            {[
              { label: 'Weeks', value: weeks },
              { label: 'Days', value: days },
              { label: 'Hours', value: hours },
              { label: 'Min', value: minutes },
              { label: 'Sec', value: seconds },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <span className="block text-2xl font-bold text-white">
                  {String(item.value).padStart(2, '0')}
                </span>
                <span className="text-xs uppercase tracking-wider text-gray-300">{item.label}</span>
              </div>
            ))}
          </div>
          <Button className="border-2 border-white bg-transparent px-6 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-black">
            Join Now
          </Button>
        </div>
      </div>

      {/* Right — Upcoming Events */}
      <div className="flex w-full flex-col justify-center bg-white px-8 py-12 md:w-1/2">
        <h2 className="mb-6 text-2xl font-bold text-black">Upcoming Events</h2>
        <div className="space-y-4">
          {events.map((event) => (
            <div key={event.name} className="flex items-center border-b border-gray-200 pb-4">
              <span className="mr-4 w-16 shrink-0 text-sm font-bold uppercase text-brand">
                {event.date}
              </span>
              <span className="flex-1 text-sm font-semibold text-black">{event.name}</span>
              <a
                href="#events"
                className="text-xs font-semibold uppercase tracking-wider text-brand hover:text-brand-hover"
              >
                More Info
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
