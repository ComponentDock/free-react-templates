import { Gem, ShieldCheck, Truck } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Feature {
  icon: LucideIcon
  title: string
  copy: string
}

const features: Feature[] = [
  {
    icon: ShieldCheck,
    title: 'Fast Secure Payments',
    copy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  },
  {
    icon: Gem,
    title: 'Premium Products',
    copy: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas.',
  },
  {
    icon: Truck,
    title: 'Free & fast Delivery',
    copy: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  },
] as const

export function Features() {
  return (
    <section id="features" className="bg-fog py-16 transition-colors dark:bg-gray-900">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:grid-cols-3 sm:px-6">
        {features.map((feature) => {
          const Icon = feature.icon
          return (
            <div
              key={feature.title}
              className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-sm transition-colors dark:bg-gray-800"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <h2 className="font-semibold uppercase tracking-wide text-coal dark:text-white">
                  {feature.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-mist dark:text-white/60">
                  {feature.copy}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
