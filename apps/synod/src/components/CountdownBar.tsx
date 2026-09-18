import { useEffect, useState } from 'react'
import { topBarText, countdownOffsetMs } from '../data'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function getTimeLeft(offsetMs: number): TimeLeft {
  const diff = Math.max(0, offsetMs)
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

export function CountdownBar() {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(countdownOffsetMs))

  useEffect(() => {
    const start = Date.now()
    const id = setInterval(() => {
      const elapsed = Date.now() - start
      setTimeLeft(getTimeLeft(countdownOffsetMs - elapsed))
    }, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="bg-dark py-2.5 text-center text-sm text-white">
      <span className="font-semibold uppercase tracking-wide">{topBarText} </span>
      <span className="font-bold">{timeLeft.days} DAYS</span>{' '}
      <span className="font-bold">{timeLeft.hours} HOURS</span>{' '}
      <span className="font-bold">{timeLeft.minutes} MINUTES</span>{' '}
      <span className="font-bold">{timeLeft.seconds} SECONDS</span>{' '}
      <a href="#events" className="ml-2 font-semibold text-brand transition-colors hover:underline">
        Read More
      </a>
    </div>
  )
}
