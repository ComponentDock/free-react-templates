import { UtensilsCrossed, Salad, Sandwich, CalendarCheck, Carrot, Drumstick } from 'lucide-react'

const services = [
  {
    icon: UtensilsCrossed,
    title: 'Quality Cuisine',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
  },
  {
    icon: Salad,
    title: 'Fresh Food',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
  },
  {
    icon: Sandwich,
    title: 'Bread & Pancake',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
  },
  {
    icon: CalendarCheck,
    title: 'Reserve Now',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
  },
  {
    icon: Carrot,
    title: 'Fresh Vegies Salad',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
  },
  {
    icon: Drumstick,
    title: 'Whole Chicken',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
  },
]

export function Services() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-display text-4xl font-bold text-ink md:text-5xl">
            Other Services
          </h2>
          <p className="text-lg text-mist">Free Website Template For Restaurants</p>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((svc) => (
            <div key={svc.title} className="text-center">
              <svc.icon className="mx-auto mb-4 h-10 w-10 text-brand" aria-hidden="true" />
              <h3 className="mb-3 font-display text-xl font-bold text-ink">{svc.title}</h3>
              <p className="leading-relaxed text-mist">{svc.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
