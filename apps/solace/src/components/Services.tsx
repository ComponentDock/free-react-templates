import { Wifi, CalendarCheck, UtensilsCrossed, Waves, Heart, Headphones } from 'lucide-react'

const services = [
  {
    icon: Wifi,
    title: 'Free Wifi',
    desc: 'Stay connected with complimentary high-speed internet throughout the hotel.',
  },
  {
    icon: CalendarCheck,
    title: 'Easy Booking',
    desc: 'Book your room in seconds with our simple and secure online reservation system.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Restaurant',
    desc: 'Enjoy gourmet meals prepared by our award-winning chefs in a fine dining atmosphere.',
  },
  {
    icon: Waves,
    title: 'Swimming Pool',
    desc: 'Relax and unwind in our crystal-clear heated pool with a stunning mountain view.',
  },
  {
    icon: Heart,
    title: 'Beauty & Health',
    desc: 'Indulge in luxurious spa treatments and wellness services for total rejuvenation.',
  },
  {
    icon: Headphones,
    title: 'Help & Support',
    desc: 'Our dedicated concierge team is available 24/7 to assist with any request.',
  },
]

export function Services() {
  return (
    <section className="bg-surface py-20">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
          What We Offer
        </p>
        <h2 className="font-heading text-3xl font-bold text-ink md:text-4xl">
          Explore Our Hotel Services
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-lg bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand/10 text-brand">
                <Icon size={28} />
              </div>
              <h3 className="font-heading text-xl font-bold text-ink">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
