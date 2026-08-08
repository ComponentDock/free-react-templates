import { Clock, Globe2, ShieldCheck, Headset } from 'lucide-react'

const features = [
  {
    title: 'On-Time Delivery',
    stat: '98.5%',
    blurb: 'Industry-leading on-time performance across every route we serve.',
    icon: Clock,
  },
  {
    title: 'Global Network',
    stat: '150+',
    blurb: 'Partners and hubs in over 150 countries, ready when you are.',
    icon: Globe2,
  },
  {
    title: 'Cargo Insurance',
    stat: '100%',
    blurb: 'Every shipment protected with comprehensive coverage options.',
    icon: ShieldCheck,
  },
  {
    title: '24/7 Support',
    stat: 'Always',
    blurb: 'Real humans on call around the clock, in every time zone.',
    icon: Headset,
  },
]

const stats = [
  { value: '2,847', label: 'Active Routes' },
  { value: '3,247', label: 'Deliveries Today' },
]

export function Features() {
  return (
    <section id="why-us" className="bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <p className="text-center text-sm font-bold uppercase tracking-widest text-primary-600 dark:text-primary-400">
          Why Choose Us
        </p>
        <h2 className="mt-3 text-center text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
          Shipping Made Simple
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-600 dark:text-gray-300">
          We combine cutting-edge technology with decades of logistics expertise to move your goods
          faster and safer.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-gray-200 bg-gray-50 p-8 transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-600 text-white">
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <p className="mt-5 text-3xl font-extrabold tracking-tight text-primary-600 dark:text-primary-400">
                {feature.stat}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {feature.blurb}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 border-t border-gray-200 pt-12 dark:border-gray-800">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
