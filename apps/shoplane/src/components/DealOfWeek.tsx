import { useEffect, useState } from 'react'

export function DealOfWeek() {
  const [remaining, setRemaining] = useState(3 * 86400 + 15 * 3600 + 45 * 60 + 23)

  useEffect(() => {
    const id = setInterval(() => {
      setRemaining((r) => Math.max(0, r - 1))
    }, 1000)
    return () => clearInterval(id)
  }, [])

  const days = Math.floor(remaining / 86400)
  const hours = Math.floor((remaining % 86400) / 3600)
  const minutes = Math.floor((remaining % 3600) / 60)
  const seconds = remaining % 60

  const units = [
    { label: 'Day', value: days },
    { label: 'Hours', value: hours },
    { label: 'Mins', value: minutes },
    { label: 'Sec', value: seconds },
  ]

  return (
    <section className="bg-gray-100 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-between">
          {/* Product image */}
          <div className="w-full lg:w-1/2">
            <img
              src="https://picsum.photos/seed/shoplane-deal/600/400"
              alt="Deal of the week product"
              className="w-full rounded object-cover"
              loading="lazy"
            />
          </div>

          {/* Deal content */}
          <div className="w-full text-center lg:w-1/2 lg:text-right">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">Deal Of The Week</h2>
            <div className="mb-8 flex justify-center gap-4 lg:justify-end">
              {units.map((u) => (
                <div key={u.label} className="flex flex-col items-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded bg-white text-2xl font-bold text-gray-900 shadow">
                    {String(u.value).padStart(2, '0')}
                  </span>
                  <span className="mt-1 text-xs font-medium uppercase text-gray-500">
                    {u.label}
                  </span>
                </div>
              ))}
            </div>
            <a
              href="#shop"
              className="inline-block rounded bg-coral-500 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-coral-400"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
