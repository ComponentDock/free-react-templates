import { useEffect, useState } from 'react'
import { Flower2 } from 'lucide-react'
import {
  countdownImage,
  countdownKicker,
  countdownTitle,
  countdownUnits,
  getCountdownParts,
  getCountdownTarget,
} from '../data'

export function Countdown({ target = getCountdownTarget() }: { target?: Date }) {
  const [targetDate] = useState(target)
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 1000)
    return () => window.clearInterval(id)
  }, [])

  const parts = getCountdownParts(targetDate, now)
  const digits = {
    days: String(parts.days).padStart(2, '0'),
    hours: String(parts.hours).padStart(2, '0'),
    minutes: String(parts.minutes).padStart(2, '0'),
    seconds: String(parts.seconds).padStart(2, '0'),
  }

  return (
    <section id="countdown-section" className="py-20">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <Flower2 aria-hidden="true" className="mx-auto h-6 w-6 text-brand" />
        <span className="mb-2 mt-5 block text-lg text-brand">{countdownKicker}</span>
        <h2 className="mt-5 text-4xl font-normal uppercase text-ink">{countdownTitle}</h2>
      </div>
      <div className="relative mt-12 h-[420px] w-full overflow-hidden max-md:h-[560px]">
        <img
          src={countdownImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-bottom"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-white/10 px-4">
          <div className="flex w-full max-w-4xl justify-evenly bg-white px-6 py-8 shadow-lg max-md:flex-col max-md:items-center max-md:gap-6">
            {countdownUnits.map((unit) => (
              <div key={unit.key} className="text-center">
                <h3 className="mb-4 font-script text-6xl text-brand">{digits[unit.key]}</h3>
                <span className="text-sm uppercase tracking-wide text-body">{unit.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
