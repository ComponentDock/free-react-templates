import { Building2, Home, Landmark, Palette, PaintBucket, Hotel } from 'lucide-react'

const items = [
  { label: 'Architecture', Icon: Building2 },
  { label: 'Interior Design', Icon: Home },
  { label: 'Building Design', Icon: Landmark },
  { label: 'Art Design', Icon: Palette },
  { label: 'Home Design', Icon: PaintBucket },
  { label: 'Hotel Design', Icon: Hotel },
]

export function Specialization() {
  return (
    <section className="bg-surface py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-charcoal">Our Specialization</h2>
          <p className="mt-3 text-gray-500">
            A wall for our project glory and a place to find more
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ label, Icon }) => (
            <div key={label} className="flex items-center gap-4 rounded bg-white p-6 shadow-sm">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded bg-lime-accent/10">
                <Icon className="h-7 w-7 text-lime-accent" />
              </div>
              <h3 className="font-semibold text-charcoal">{label}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
