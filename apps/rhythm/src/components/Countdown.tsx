import { useEffect, useState } from 'react'
import { ButtonLink } from '@free-react-templates/ui'
import { countdownImage, festivalDate, festivalSubtitle, festivalTitle, ticketsUrl } from '../data'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

// Split of the remaining time matching the original design: the day counter
// starts after the first 24 hours and hours are displayed unmodded (the
// source shows e.g. "20 days 45 hours" for 21 days + 21 hours).
function getRemaining(target: Date): TimeLeft {
  const totalSeconds = Math.max(0, Math.floor((target.getTime() - Date.now()) / 1000))
  const totalHours = Math.floor(totalSeconds / 3600)
  return {
    days: totalHours < 24 ? 0 : Math.floor(totalHours / 24) - 1,
    hours: totalHours < 24 ? totalHours : (totalHours % 24) + 24,
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  }
}

const units = [
  { key: 'days', label: 'Days' },
  { key: 'hours', label: 'Hours' },
  { key: 'minutes', label: 'Minutes' },
  { key: 'seconds', label: 'Seconds' },
] as const

// Dark countdown band over a background image: festival title, subtitle, a
// live day/hour/minute/second timer and a "Buy tickets" button.
export function Countdown() {
  const [time, setTime] = useState<TimeLeft>(() => getRemaining(festivalDate))

  useEffect(() => {
    const id = setInterval(() => setTime(getRemaining(festivalDate)), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section
      id="tours"
      className="relative bg-cover bg-center py-[100px]"
      style={{ backgroundImage: `url(${countdownImage})` }}
    >
      <div aria-hidden="true" className="absolute inset-0 bg-brand-dark/70" />
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
        <h1 className="font-display text-[64px] font-bold uppercase leading-none text-white md:text-[90px]">
          {festivalTitle}
        </h1>
        <h4 className="mt-5 text-[20px] font-semibold uppercase tracking-wide text-white md:text-[26px]">
          {festivalSubtitle}
        </h4>
        <div role="timer" className="mt-14 flex flex-wrap justify-center gap-x-20 gap-y-10">
          {units.map((unit) => (
            <div key={unit.key} className="text-center">
              <span className="block font-display text-[70px] font-bold leading-[100px] text-white md:text-[90px]">
                {unit.key === 'minutes' || unit.key === 'seconds'
                  ? String(time[unit.key]).padStart(2, '0')
                  : time[unit.key]}
              </span>
              <p className="text-sm uppercase tracking-[4px] text-white">{unit.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <ButtonLink
            href={ticketsUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-none bg-brand px-[30px] py-[14px] text-[15px] font-semibold uppercase tracking-[2px] text-white hover:bg-brand-alt"
          >
            Buy tickets
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
