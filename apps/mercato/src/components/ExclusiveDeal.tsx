import { useEffect, useState } from 'react'

interface ExclusiveDealProps {
  initialDays?: number
  initialHours?: number
  initialMinutes?: number
  initialSeconds?: number
}

function useCountdown(
  targetDays: number,
  targetHours: number,
  targetMinutes: number,
  targetSeconds: number,
) {
  const [time, setTime] = useState({
    days: targetDays,
    hours: targetHours,
    minutes: targetMinutes,
    seconds: targetSeconds,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        const total = prev.days * 86400 + prev.hours * 3600 + prev.minutes * 60 + prev.seconds - 1
        if (total <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
        return {
          days: Math.floor(total / 86400),
          hours: Math.floor((total % 86400) / 3600),
          minutes: Math.floor((total % 3600) / 60),
          seconds: total % 60,
        }
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return time
}

export function ExclusiveDeal({
  initialDays = 150,
  initialHours = 23,
  initialMinutes = 47,
  initialSeconds = 59,
}: ExclusiveDealProps) {
  const { days, hours, minutes, seconds } = useCountdown(
    initialDays,
    initialHours,
    initialMinutes,
    initialSeconds,
  )

  const blocks = [
    { value: days, label: 'Days' },
    { value: hours, label: 'Hours' },
    { value: minutes, label: 'Mins' },
    { value: seconds, label: 'Secs' },
  ]

  return (
    <section className="bg-white py-20 dark:bg-gray-900">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 md:grid-cols-2">
        <div className="space-y-6">
          <h2 className="font-heading text-3xl font-bold text-heading dark:text-white">
            Exclusive Hot Deal Ends Soon!
          </h2>
          <p className="text-ink dark:text-gray-400">
            Who are in extremely love with eco friendly system.
          </p>
          <div className="flex gap-4">
            {blocks.map((block) => (
              <div key={block.label} className="text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-bg-light font-heading text-2xl font-bold text-heading dark:bg-gray-800 dark:text-white">
                  {String(block.value).padStart(2, '0')}
                </div>
                <span className="mt-1 text-xs text-ink dark:text-gray-400">{block.label}</span>
              </div>
            ))}
          </div>
          <button className="rounded-full bg-gradient-to-r from-brand to-brand-dark px-8 py-3 text-sm font-semibold text-white uppercase tracking-wider transition-opacity hover:opacity-90">
            Shop Now
          </button>
        </div>
        <div className="flex justify-center">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="https://picsum.photos/seed/mercato-deal/500/500"
              alt="Exclusive deal product"
              className="w-full max-w-md object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/90 p-4 backdrop-blur-sm dark:bg-gray-800/90">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-lg font-bold text-heading dark:text-white">$150.00</span>
                  <span className="ml-2 text-sm text-ink line-through dark:text-gray-400">
                    $210.00
                  </span>
                </div>
                <button
                  aria-label="Add to bag"
                  className="rounded-full bg-gradient-to-r from-brand to-brand-dark px-4 py-2 text-xs font-medium text-white"
                >
                  Add to Bag
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
