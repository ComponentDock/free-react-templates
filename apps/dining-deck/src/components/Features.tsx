import { UtensilsCrossed, Leaf, CalendarDays } from 'lucide-react'

const features = [
  {
    icon: UtensilsCrossed,
    title: 'Best Quality',
    description:
      'Our dishes are prepared with the finest ingredients, ensuring every bite delivers exceptional flavor and quality.',
  },
  {
    icon: Leaf,
    title: 'Seasonal Ingredients',
    description:
      'We source locally and seasonally, bringing you the freshest produce and the most vibrant flavors year-round.',
  },
  {
    icon: CalendarDays,
    title: 'Online Reservation',
    description:
      'Book your table in seconds with our seamless online reservation system. No waiting, no hassle.',
  },
]

export function Features() {
  return (
    <section id="menu" className="bg-gray-50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-500">
            Why Choose Us
          </p>
          <h2 className="mt-3 text-3xl font-light text-gray-800 md:text-4xl">Our Features</h2>
        </div>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 text-teal-500">
                <f.icon className="h-7 w-7" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-gray-800">{f.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
