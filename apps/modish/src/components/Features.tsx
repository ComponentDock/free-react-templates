import { Gem, Lock, Truck } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface Feature {
  icon: LucideIcon
  title: string
  copy: string
  highlighted?: boolean
}

const features: Feature[] = [
  {
    icon: Lock,
    title: 'Fast Secure Payments',
    copy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  },
  {
    icon: Gem,
    title: 'Premium Products',
    copy: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas.',
    highlighted: true,
  },
  {
    icon: Truck,
    title: 'Free & fast Delivery',
    copy: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  },
] as const

export function Features() {
  return (
    <section id="features" className="bg-white transition-colors dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl md:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon
          return (
            <div
              key={feature.title}
              className={cn(
                'flex items-center gap-4 px-6 py-6',
                feature.highlighted
                  ? 'bg-brand text-white'
                  : 'bg-snow text-coal dark:bg-gray-900 dark:text-white',
              )}
            >
              <span
                className={cn(
                  'flex h-12 w-12 shrink-0 items-center justify-center rounded-full',
                  feature.highlighted ? 'bg-white/20' : 'bg-brand/10 text-brand',
                )}
              >
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <h2 className="text-lg font-semibold uppercase tracking-wide">{feature.title}</h2>
                <p
                  className={cn(
                    'mt-1 text-sm leading-relaxed',
                    feature.highlighted ? 'text-white/80' : 'text-mist dark:text-white/60',
                  )}
                >
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
