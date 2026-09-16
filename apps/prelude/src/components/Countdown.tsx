import { useState, useEffect, useCallback } from 'react'

interface TimeUnit {
  label: string
  value: number
}

function calculateTimeLeft(targetDate: string): TimeUnit[] {
  const diff = Math.max(0, new Date(targetDate).getTime() - Date.now())
  return [
    { label: 'Days', value: Math.floor(diff / 86400000) },
    { label: 'Hours', value: Math.floor((diff % 86400000) / 3600000) },
    { label: 'Minutes', value: Math.floor((diff % 3600000) / 60000) },
    { label: 'Seconds', value: Math.floor((diff % 60000) / 1000) },
  ]
}

export function Countdown({ targetDate }: { targetDate: string }) {
  const [units, setUnits] = useState(() => calculateTimeLeft(targetDate))

  const tick = useCallback(() => {
    setUnits(calculateTimeLeft(targetDate))
  }, [targetDate])

  useEffect(() => {
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [tick])

  return (
    <div className="flex gap-4 justify-center">
      {units.map((u) => (
        <div key={u.label} className="flex flex-col items-center">
          <span
            data-testid="countdown-value"
            className="text-3xl font-bold text-white tabular-nums"
          >
            {u.value}
          </span>
          <span className="text-xs text-gray-400 uppercase tracking-wider mt-1">{u.label}</span>
        </div>
      ))}
    </div>
  )
}
