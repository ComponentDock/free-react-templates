import { useState, useEffect } from 'react'
import { Send } from 'lucide-react'

export function useCountdown(targetDays: number, initHours = 23, initMins = 47, initSecs = 59) {
  const [time, setTime] = useState({
    days: targetDays,
    hours: initHours,
    minutes: initMins,
    seconds: initSecs,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { days, hours, minutes, seconds } = prev
        seconds -= 1
        if (seconds < 0) {
          seconds = 59
          minutes -= 1
        }
        if (minutes < 0) {
          minutes = 59
          hours -= 1
        }
        if (hours < 0) {
          hours = 23
          days -= 1
        }
        if (days < 0) days = 0
        return { days, hours, minutes, seconds }
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return time
}

export function Registration() {
  const time = useCountdown(150)

  const timeBlocks = [
    { value: time.days, label: 'Days' },
    { value: time.hours, label: 'Hours' },
    { value: time.minutes, label: 'Mins' },
    { value: time.seconds, label: 'Secs' },
  ]

  return (
    <section className="py-24 bg-gradient-to-r from-brand to-brand-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-7/12 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Register Now</h1>
            <p className="text-white/90 mb-8 max-w-lg">
              Don&apos;t miss out on our special enrollment period. Sign up today and get access to
              premium courses at discounted rates. Limited time offer!
            </p>
            <div className="flex gap-4">
              {timeBlocks.map((block) => (
                <div key={block.label} className="text-center">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center mb-2">
                    <span className="text-3xl font-bold">{block.value}</span>
                  </div>
                  <span className="text-xs uppercase tracking-wider text-white/80">
                    {block.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-4/12 bg-white rounded-lg p-8 shadow-xl">
            <h3 className="text-xl font-bold text-heading mb-2">Courses for Free</h3>
            <p className="text-body text-sm mb-6">It is high time for learning</p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 border border-gray-200 rounded text-sm text-heading outline-none focus:border-brand transition-colors"
              />
              <input
                type="tel"
                placeholder="Your Phone Number"
                required
                className="w-full px-4 py-3 border border-gray-200 rounded text-sm text-heading outline-none focus:border-brand transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email Address"
                required
                className="w-full px-4 py-3 border border-gray-200 rounded text-sm text-heading outline-none focus:border-brand transition-colors"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-brand to-brand-light text-white py-3 rounded font-semibold text-sm uppercase hover:from-brand-dark hover:to-brand transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" /> Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
