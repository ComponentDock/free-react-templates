import { useEffect, useState } from 'react'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function calculateTimeLeft(): TimeLeft {
  const target = new Date('2025-02-12T08:00:00')
  const now = new Date()
  const diff = Math.max(0, target.getTime() - now.getTime())
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

function CountdownBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="inline-block bg-[var(--color-brand)] text-white px-6 py-5 min-w-[100px] text-center rounded">
      <div className="text-4xl font-semibold leading-tight">{value}</div>
      <div className="text-xs mt-1 uppercase">{label}</div>
    </div>
  )
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft)

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      className="relative py-16 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://picsum.photos/seed/soiree-countdown/1600/400')" }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center px-4 font-[family-name:var(--font-montserrat)]">
        <h4 className="text-white text-xl mb-6 font-bold">Counter until the big event</h4>
        <div className="flex justify-center gap-4 flex-wrap">
          <CountdownBox value={timeLeft.days} label="Days" />
          <CountdownBox value={timeLeft.hours} label="Hours" />
          <CountdownBox value={timeLeft.minutes} label="Minutes" />
          <CountdownBox value={timeLeft.seconds} label="Seconds" />
        </div>
      </div>
    </section>
  )
}
