import { useState, useEffect, useCallback } from 'react'

const events = [
  {
    image: 'https://picsum.photos/seed/gastro-event1/1920/800',
    date: 'Dec 25, 2026',
    title: 'Christmas Special Dinner',
    description:
      'Join us for a magical Christmas evening with a specially curated five-course dinner menu and live entertainment.',
    days: 120,
    hours: 8,
    minutes: 45,
    seconds: 30,
  },
  {
    image: 'https://picsum.photos/seed/gastro-event2/1920/800',
    date: 'Jan 1, 2027',
    title: 'New Year Celebration',
    description:
      'Ring in the New Year with an extravagant dinner, champagne toast, and a spectacular fireworks display.',
    days: 137,
    hours: 12,
    minutes: 0,
    seconds: 0,
  },
]

export function Countdown({
  initialDays,
  initialHours,
  initialMinutes,
  initialSeconds,
}: {
  initialDays: number
  initialHours: number
  initialMinutes: number
  initialSeconds: number
}) {
  const [d, setD] = useState(initialDays)
  const [h, setH] = useState(initialHours)
  const [m, setM] = useState(initialMinutes)
  const [s, setS] = useState(initialSeconds)

  useEffect(() => {
    const total = d * 86400 + h * 3600 + m * 60 + s
    if (total <= 0) return
    const timer = setInterval(() => {
      setS((prev) => {
        if (prev <= 0) {
          setM((prevM) => {
            if (prevM <= 0) {
              setH((prevH) => {
                if (prevH <= 0) {
                  setD((prevD) => (prevD > 0 ? prevD - 1 : 0))
                  return 23
                }
                return prevH - 1
              })
              return 59
            }
            return prevM - 1
          })
          return 59
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [d, h, m, s])

  const pad = (n: number) => String(n).padStart(2, '0')

  return (
    <div className="mt-6 flex gap-4 text-center text-white">
      <div>
        <div className="text-2xl font-bold">{pad(d)}</div>
        <div className="text-xs text-white/60">Days</div>
      </div>
      <div>
        <div className="text-2xl font-bold">{pad(h)}</div>
        <div className="text-xs text-white/60">Hours</div>
      </div>
      <div>
        <div className="text-2xl font-bold">{pad(m)}</div>
        <div className="text-xs text-white/60">Minutes</div>
      </div>
      <div>
        <div className="text-2xl font-bold">{pad(s)}</div>
        <div className="text-xs text-white/60">Seconds</div>
      </div>
    </div>
  )
}

export function Events() {
  const [active, setActive] = useState(0)
  const event = events[active]!

  const next = useCallback(() => setActive((c) => (c + 1) % events.length), [])

  useEffect(() => {
    const timer = setInterval(next, 8000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section id="events" className="relative py-0">
      <div className="relative h-[500px]">
        {events.map((e, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-700"
            aria-hidden={i !== active}
            style={{ opacity: i === active ? 1 : 0 }}
          >
            <img
              src={e.image}
              alt={e.title}
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-lg text-center text-white">
            <div className="mb-4 inline-block rounded-full bg-brand px-4 py-1 text-xs font-semibold">
              {event.date}
            </div>
            <h2 className="text-3xl font-bold">{event.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/70">{event.description}</p>
            <Countdown
              initialDays={event.days}
              initialHours={event.hours}
              initialMinutes={event.minutes}
              initialSeconds={event.seconds}
            />
            <a
              href="#events"
              className="mt-6 inline-block rounded-[10px] border border-white px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-text-dark"
            >
              View Details
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
