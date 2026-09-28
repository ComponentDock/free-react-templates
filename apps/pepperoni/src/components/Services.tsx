import { Salad, Bike, Pizza } from 'lucide-react'

const services = [
  {
    icon: Salad,
    title: 'Healthy Foods',
    desc: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
  },
  {
    icon: Bike,
    title: 'Fastest Delivery',
    desc: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
  },
  {
    icon: Pizza,
    title: 'Original Recipes',
    desc: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
  },
] as const

export function Services() {
  return (
    <section id="services" className="relative bg-surface py-16">
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-3 font-display text-3xl font-bold text-white">Our Services</h2>
          <p className="mx-auto max-w-xl text-gray-400">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="text-center">
              <div className="mb-5 flex justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand/20">
                  <Icon className="h-10 w-10 text-brand" aria-hidden="true" />
                </div>
              </div>
              <h3 className="mb-3 text-lg font-semibold text-white">{title}</h3>
              <p className="text-gray-400">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
