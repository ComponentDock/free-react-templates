import { useState, useEffect } from 'react'
import { ProductCard } from './ProductCard'

const dealsProducts = [
  {
    name: 'Bluetooth Speaker',
    price: 39.99,
    oldPrice: 59.99,
    image: 'https://picsum.photos/seed/wares-d1/300/300',
    rating: 4,
    hot: true,
  },
  {
    name: 'Yoga Mat',
    price: 24.99,
    oldPrice: 39.99,
    image: 'https://picsum.photos/seed/wares-d2/300/300',
    rating: 5,
  },
  {
    name: 'Coffee Maker',
    price: 69.99,
    oldPrice: 99.99,
    image: 'https://picsum.photos/seed/wares-d3/300/300',
    rating: 4,
  },
  {
    name: 'Desk Lamp',
    price: 29.99,
    oldPrice: 44.99,
    image: 'https://picsum.photos/seed/wares-d4/300/300',
    rating: 3,
  },
  {
    name: 'Water Bottle',
    price: 14.99,
    oldPrice: 24.99,
    image: 'https://picsum.photos/seed/wares-d5/300/300',
    rating: 5,
  },
  {
    name: 'Notebook Set',
    price: 19.99,
    oldPrice: 29.99,
    image: 'https://picsum.photos/seed/wares-d6/300/300',
    rating: 4,
  },
]

function useCountdown(targetSeconds: number) {
  const [seconds, setSeconds] = useState(targetSeconds)

  useEffect(() => {
    if (seconds <= 0) return
    const timer = setInterval(() => setSeconds((s) => s - 1), 1000)
    return () => clearInterval(timer)
  }, [seconds])

  const days = Math.floor(seconds / 86400)
  const hours = Math.floor((seconds % 86400) / 3600)
  const mins = Math.floor((seconds % 3600) / 60)
  const secs = seconds % 60
  return { days, hours, mins, secs }
}

export function CountdownTimer({
  initialSeconds = 86400 * 2 + 3600 * 5 + 60 * 30 + 15,
}: {
  initialSeconds?: number
}) {
  const { days, hours, mins, secs } = useCountdown(initialSeconds)

  const units = [
    { label: 'Days', value: days },
    { label: 'Hours', value: hours },
    { label: 'Mins', value: mins },
    { label: 'Secs', value: secs },
  ]

  return (
    <div className="mb-6 flex items-center gap-3">
      {units.map((u, i) => (
        <span key={u.label} className="flex items-center gap-1">
          <span className="flex h-10 w-10 items-center justify-center rounded bg-ink text-sm font-bold text-white">
            {String(u.value).padStart(2, '0')}
          </span>
          <span className="text-xs text-mist">{u.label}</span>
          {i < units.length - 1 && <span className="text-lg font-bold text-brand">:</span>}
        </span>
      ))}
    </div>
  )
}

export function DealsOfTheDay() {
  return (
    <section className="bg-paper">
      <div className="container mx-auto px-4 py-8">
        <h2 className="mb-2 text-2xl font-bold text-ink">Deals Of The Day</h2>
        <CountdownTimer initialSeconds={86400 * 2 + 3600 * 5 + 60 * 30 + 15} />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {dealsProducts.map((p) => (
            <ProductCard key={p.name} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}
