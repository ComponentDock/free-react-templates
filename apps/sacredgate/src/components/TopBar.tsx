import { useState, useEffect } from 'react'
import { Heart } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

function getTimeLeft(target: Date) {
  const diff = Math.max(0, target.getTime() - Date.now())
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

export function TopBar() {
  const [target] = useState(() => {
    const d = new Date()
    d.setDate(d.getDate() + 30)
    return d
  })
  const [time, setTime] = useState(() => getTimeLeft(target))

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft(target)), 1000)
    return () => clearInterval(id)
  }, [target])

  return (
    <div className="bg-black text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <div className="flex items-center gap-6 text-sm font-medium">
          <CountdownUnit value={time.days} label="Days" />
          <CountdownUnit value={time.hours} label="Hours" />
          <CountdownUnit value={time.minutes} label="Minutes" />
          <CountdownUnit value={time.seconds} label="Seconds" />
        </div>
        <ButtonLink
          href="#donate"
          className="inline-flex items-center gap-2 rounded-none bg-brand px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
        >
          <Heart className="h-4 w-4" aria-hidden="true" />
          Send Donations
        </ButtonLink>
      </div>
    </div>
  )
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="text-center">
      <span className="block text-lg font-bold" aria-label={`${value} ${label}`}>
        {String(value).padStart(2, '0')}
      </span>
      <span className="text-xs uppercase tracking-wider text-gray-400">{label}</span>
    </div>
  )
}
