import { useEffect, useState } from 'react'
import { nextMatch } from '../data'

function pad(value: number) {
  return String(value).padStart(2, '0')
}

interface Remaining {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function splitRemaining(ms: number): Remaining {
  const total = Math.max(0, Math.floor(ms / 1000))
  return {
    days: Math.floor(total / 86400),
    hours: Math.floor((total % 86400) / 3600),
    minutes: Math.floor((total % 3600) / 60),
    seconds: total % 60,
  }
}

/** NextMatch panel: countdown to the upcoming fixture plus home/away
 *  thumbnails, league line, score and date. */
export function NextMatch() {
  const [remaining, setRemaining] = useState<Remaining>(() =>
    splitRemaining(new Date(nextMatch.kickoff).getTime() - Date.now()),
  )

  useEffect(() => {
    const target = new Date(nextMatch.kickoff).getTime()
    const timer = setInterval(() => {
      setRemaining(splitRemaining(target - Date.now()))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="border border-gray-200 bg-white p-6">
      <h3 className="text-lg font-bold uppercase tracking-wide text-black">Next match</h3>
      <div className="mt-4 grid grid-cols-4 gap-2 text-center">
        {[
          { label: 'Days', value: remaining.days },
          { label: 'Hours', value: remaining.hours },
          { label: 'Minutes', value: remaining.minutes },
          { label: 'Seconds', value: remaining.seconds },
        ].map((unit) => (
          <div key={unit.label} className="bg-mist py-3">
            <div className="text-2xl font-bold text-brand">{pad(unit.value)}</div>
            <div className="text-xs uppercase tracking-widest text-muted">{unit.label}</div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex items-center justify-between gap-3">
        <div className="flex flex-1 flex-col items-center gap-2 text-center">
          <img src={nextMatch.homeImage} alt="" className="h-16 w-16 object-cover" />
          <h3 className="text-sm font-bold uppercase text-black">{nextMatch.home}</h3>
        </div>
        <span className="text-sm uppercase text-muted">vs</span>
        <div className="flex flex-1 flex-col items-center gap-2 text-center">
          <img src={nextMatch.awayImage} alt="" className="h-16 w-16 object-cover" />
          <h3 className="text-sm font-bold uppercase text-black">{nextMatch.away}</h3>
        </div>
      </div>
      <p className="mt-4 text-center text-sm text-muted">{nextMatch.league}</p>
      <p className="mt-1 text-center text-2xl font-bold text-black">{nextMatch.score}</p>
      <p className="mt-1 text-center text-sm text-muted">
        {nextMatch.date} / {nextMatch.time}
      </p>
    </div>
  )
}
