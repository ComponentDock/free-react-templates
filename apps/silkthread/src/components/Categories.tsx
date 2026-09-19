import { useState, useEffect } from 'react'

function useCountdown(targetSeconds: number) {
  const [seconds, setSeconds] = useState(targetSeconds)
  const running = seconds > 0
  useEffect(() => {
    if (!running) return
    const id = setInterval(() => setSeconds((s) => s - 1), 1000)
    return () => clearInterval(id)
  }, [running])

  const d = Math.floor(seconds / 86400)
  const h = Math.floor((seconds % 86400) / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  const s = seconds % 60
  return { days: d, hours: h, minutes: m, seconds: s }
}

export function Categories() {
  const { days, hours, minutes, seconds } = useCountdown(3 * 86400 + 1 * 3600 + 50 * 60 + 18)

  return (
    <section className="bg-cream py-24" aria-label="Categories and deals">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-8 lg:grid-cols-12">
          {/* Left: large text */}
          <div className="lg:col-span-3">
            <h2 className="text-4xl font-bold leading-snug text-ink">
              Clothings Hot <br />
              <span className="text-brand">Shoe Collection</span> <br />
              Accessories
            </h2>
          </div>

          {/* Center: hot deal image */}
          <div className="relative lg:col-span-4">
            <img
              src="https://picsum.photos/seed/silkthread-deal/400/400"
              alt="Hot deal product"
              className="w-full rounded-sm object-cover"
              loading="lazy"
            />
            <div className="absolute left-4 top-4 flex h-20 w-20 flex-col items-center justify-center rounded-full bg-brand text-center text-white">
              <span className="text-xs font-bold uppercase">Sale Of</span>
              <span className="text-lg font-bold">$29.99</span>
            </div>
          </div>

          {/* Right: countdown */}
          <div className="lg:col-span-5 lg:pl-8">
            <span className="mb-2 block text-sm font-bold uppercase tracking-widest text-brand">
              Deal Of The Week
            </span>
            <h3 className="mb-6 text-3xl font-bold text-ink">Multi-pocket Chest Bag Black</h3>
            <div className="mb-8 flex gap-6">
              {[
                { value: days, label: 'Days' },
                { value: hours, label: 'Hours' },
                { value: minutes, label: 'Minutes' },
                { value: seconds, label: 'Seconds' },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <span className="block text-3xl font-bold text-ink">{item.value}</span>
                  <p className="text-xs uppercase text-body">{item.label}</p>
                </div>
              ))}
            </div>
            <a
              href="#products"
              className="inline-block rounded-full bg-ink px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-brand"
            >
              Shop now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
