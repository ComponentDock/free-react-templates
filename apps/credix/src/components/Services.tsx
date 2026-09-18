import { Landmark, Banknote, Coins, Smartphone, Diamond, PiggyBank } from 'lucide-react'

const services = [
  {
    icon: Landmark,
    title: 'All the loans',
    desc: 'Morbi ut dapibus dui. Sed ut iaculis elit, quis varius mauris. Integer ut ultricies orci.',
  },
  {
    icon: Banknote,
    title: 'Easy and fast answer',
    desc: 'Morbi ut dapibus dui. Sed ut iaculis elit, quis varius mauris. Integer ut ultricies orci.',
  },
  {
    icon: Coins,
    title: 'No additional papers',
    desc: 'Morbi ut dapibus dui. Sed ut iaculis elit, quis varius mauris. Integer ut ultricies orci.',
  },
  {
    icon: Smartphone,
    title: 'Secure financial services',
    desc: 'Morbi ut dapibus dui. Sed ut iaculis elit, quis varius mauris. Integer ut ultricies orci.',
  },
  {
    icon: Diamond,
    title: 'Good investments',
    desc: 'Morbi ut dapibus dui. Sed ut iaculis elit, quis varius mauris. Integer ut ultricies orci.',
  },
  {
    icon: PiggyBank,
    title: 'Accumulation goals',
    desc: 'Morbi ut dapibus dui. Sed ut iaculis elit, quis varius mauris. Integer ut ultricies orci.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        {/* Section heading */}
        <div className="mb-12 text-center">
          <div className="mx-auto mb-4 h-1.5 w-6 rounded bg-gold-400" />
          <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-gray-400">
            Take a look at our
          </p>
          <h2 className="font-heading text-3xl font-bold text-gray-900">Our services</h2>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = s.icon
            return (
              <div key={s.title} className="flex gap-4 rounded-lg p-4 transition hover:shadow-md">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy-500 text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h5 className="font-heading text-base font-bold text-gray-900">{s.title}</h5>
                  <p className="mt-1 text-sm leading-relaxed text-gray-500">{s.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
