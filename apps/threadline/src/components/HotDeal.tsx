import { useState, useEffect } from 'react'
import { Button } from '@free-react-templates/ui'
import { ArrowRight } from 'lucide-react'

const dealCategories = [
  { label: 'Clothings Hot', count: 25 },
  { label: 'Shoe Collection', count: 18 },
  { label: 'Accessories', count: 42 },
]

function CountdownTimer() {
  const [time, setTime] = useState({ days: 3, hours: 1, minutes: 50, seconds: 18 })

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
        if (days < 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
        return { days, hours, minutes, seconds }
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const units = [
    { value: time.days, label: 'Days' },
    { value: time.hours, label: 'Hours' },
    { value: time.minutes, label: 'Minutes' },
    { value: time.seconds, label: 'Seconds' },
  ]

  return (
    <div className="flex gap-4">
      {units.map((unit) => (
        <div key={unit.label} className="text-center">
          <div className="bg-brand-500 text-white text-2xl font-bold w-16 h-16 rounded flex items-center justify-center">
            {String(unit.value).padStart(2, '0')}
          </div>
          <span className="text-xs text-gray-400 mt-1 block uppercase">{unit.label}</span>
        </div>
      ))}
    </div>
  )
}

export function HotDeal() {
  return (
    <section className="py-16 bg-surface-dark text-white" aria-label="Deal of the week">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: categories + sale price */}
          <div>
            <p className="text-brand-400 font-bold uppercase text-sm tracking-widest mb-2">
              Sale Of
            </p>
            <p className="text-5xl font-bold mb-6">$29.99</p>
            <div className="space-y-3">
              {dealCategories.map((cat) => (
                <div
                  key={cat.label}
                  className="flex items-center justify-between border-b border-gray-700 pb-2"
                >
                  <span className="text-sm font-semibold">{cat.label}</span>
                  <span className="text-xs text-gray-400">({cat.count})</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: countdown + featured product */}
          <div className="text-center md:text-right">
            <h3 className="text-2xl font-bold mb-2">Deal Of The Week</h3>
            <p className="text-gray-400 mb-1">Multi-pocket Chest Bag Black</p>
            <div className="flex justify-center md:justify-end mb-6">
              <CountdownTimer />
            </div>
            <Button className="bg-brand-500 hover:bg-brand-600 text-white px-8 py-3 rounded text-sm font-semibold uppercase tracking-wide inline-flex items-center gap-2 transition-colors">
              Shop now <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
