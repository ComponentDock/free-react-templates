import { Leaf, Palette, Truck, Clock } from 'lucide-react'

const benefits = [
  {
    icon: Leaf,
    title: '100% Freshness',
    text: 'Most people are unaware of the less common flower',
  },
  {
    icon: Palette,
    title: 'Made by artist',
    text: 'Most people are unaware of the less common flower',
  },
  { icon: Truck, title: 'Own courier', text: 'Most people are unaware of the less common flower' },
  {
    icon: Clock,
    title: 'Fast Delivery',
    text: 'Most people are unaware of the less common flower',
  },
]

export function Benefits() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {benefits.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-rose-50 text-rose-400">
                <Icon className="h-8 w-8" />
              </div>
              <h4 className="mb-2 text-base font-semibold text-gray-900">{title}</h4>
              <p className="text-sm text-gray-500">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
