import { useState, useEffect } from 'react'

interface TimeLeft {
  days: number
  hrs: number
  mins: number
  secs: number
}

function tick(time: TimeLeft): TimeLeft {
  let { days, hrs, mins, secs } = time
  secs -= 1
  if (secs < 0) {
    secs = 59
    mins -= 1
  }
  if (mins < 0) {
    mins = 59
    hrs -= 1
  }
  if (hrs < 0) {
    hrs = 23
    days -= 1
  }
  if (days < 0) return { days: 0, hrs: 0, mins: 0, secs: 0 }
  return { days, hrs, mins, secs }
}

function pad(n: number) {
  return String(n).padStart(2, '0')
}

export function DealOfTheWeek() {
  const [time, setTime] = useState<TimeLeft>({ days: 2, hrs: 14, mins: 36, secs: 52 })

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => tick(prev))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-section-bg">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-extrabold text-text-dark text-center mb-8">
          Deal Of The Week
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <img
              src="https://picsum.photos/seed/deal-week/600/400"
              alt="Deal of the week"
              className="rounded-lg w-full object-cover h-80"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl font-bold text-text-dark mb-2">Premium Leather Boots</h3>
            <p className="text-text-secondary text-sm mb-4">
              Handcrafted from genuine leather with superior comfort and timeless style.
            </p>
            <div className="flex gap-4 justify-center md:justify-start mb-6">
              {[
                { label: 'Days', value: time.days },
                { label: 'Hrs', value: time.hrs },
                { label: 'Mins', value: time.mins },
                { label: 'Secs', value: time.secs },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-dark text-white rounded-lg px-4 py-3 min-w-[70px]"
                >
                  <div className="text-xl font-bold">{pad(item.value)}</div>
                  <div className="text-[10px] uppercase tracking-wide text-text-secondary">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
            <a
              href="#"
              className="inline-block bg-brand hover:bg-brand-light text-dark-deep font-bold px-8 py-3 rounded transition-colors"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export { tick, pad }
