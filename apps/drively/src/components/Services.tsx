import { KeyRound, ShoppingBag, Wrench } from 'lucide-react'

const services = [
  {
    title: 'Repair',
    blurb: 'Far far away, behind the word mountains, far from the countries Vokalia.',
    icon: Wrench,
  },
  {
    title: 'Car Accessories',
    blurb: 'Far far away, behind the word mountains, far from the countries Vokalia.',
    icon: ShoppingBag,
  },
  {
    title: 'Own a Car',
    blurb: 'Far far away, behind the word mountains, far from the countries Vokalia.',
    icon: KeyRound,
  },
] as const

export function Services() {
  return (
    <section
      id="services"
      className="relative bg-cover bg-center py-20 text-white"
      style={{ backgroundImage: "url('https://picsum.photos/seed/drively-services/1920/700')" }}
    >
      <div className="absolute inset-0 bg-black/70" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-display text-3xl font-black">Our services</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="text-center">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand text-white">
                <service.icon className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{service.blurb}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
