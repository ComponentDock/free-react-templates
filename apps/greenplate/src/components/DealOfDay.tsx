import { useEffect, useState } from 'react'

function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(targetDate))

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate))
    }, 1000)
    return () => clearInterval(timer)
  }, [targetDate])

  return timeLeft
}

function calculateTimeLeft(target: Date) {
  const diff = Math.max(0, target.getTime() - Date.now())
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

export function DealOfDay() {
  // Set deal end to 7 days from now
  const [targetDate] = useState(() => {
    const d = new Date()
    d.setDate(d.getDate() + 7)
    return d
  })
  const { days, hours, minutes, seconds } = useCountdown(targetDate)

  return (
    <section
      className="relative py-20 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('https://picsum.photos/seed/greenplate-deal/1200/500')" }}
      data-testid="deal-of-day"
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative container mx-auto px-4 text-center text-white">
        <h2 className="text-4xl font-bold font-serif mb-2">Deal of the day</h2>
        <p className="text-lg opacity-90 mb-8">Save 30% on select organic produce this week</p>
        <div className="flex justify-center gap-4 flex-wrap">
          {[
            { value: days, label: 'Days' },
            { value: hours, label: 'Hours' },
            { value: minutes, label: 'Min' },
            { value: seconds, label: 'Sec' },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="bg-white/10 backdrop-blur rounded-lg px-6 py-4 min-w-[90px]"
            >
              <div className="text-3xl font-bold">{String(value).padStart(2, '0')}</div>
              <div className="text-sm opacity-80 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
