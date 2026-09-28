import { UtensilsCrossed, Leaf, Users, CalendarCheck } from 'lucide-react'

const features = [
  {
    icon: UtensilsCrossed,
    title: 'Quality Cuisine',
    description:
      'Our master chefs use only the freshest ingredients to create extraordinary dishes that delight the palate.',
  },
  {
    icon: Leaf,
    title: 'Fresh Food',
    description:
      'We source our produce from local farms to ensure every meal is as fresh and wholesome as possible.',
  },
  {
    icon: Users,
    title: 'Friendly Staff',
    description:
      'Our warm and attentive staff make every visit a pleasant experience from start to finish.',
  },
  {
    icon: CalendarCheck,
    title: 'Easy Reservation',
    description:
      'Book your table in seconds with our simple online reservation system — no phone calls needed.',
  },
]

export function Features() {
  return (
    <section id="features" className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {features.map((f) => (
          <div key={f.title} className="text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand">
              <f.icon size={28} className="text-white" />
            </div>
            <h3 className="mb-3 text-lg font-bold text-ink">{f.title}</h3>
            <p className="text-sm leading-relaxed text-body">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
