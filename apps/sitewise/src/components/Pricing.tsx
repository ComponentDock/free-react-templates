import { ArrowRight, Globe, HardDrive, Server, Share2 } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { plans, type Plan } from '../data'

const iconMap = {
  share: Share2,
  vps: Server,
  wordpress: Globe,
  dedicated: HardDrive,
} as const

const colorMap: Record<Plan['color'], string> = {
  blue: 'bg-ico-blue/10 text-ico-blue',
  purple: 'bg-ico-purple/10 text-ico-purple',
  pink: 'bg-ico-pink/10 text-ico-pink',
  yellow: 'bg-ico-yellow/10 text-ico-yellow',
}

/** "Choose your Hosting Plan" — four hosting cards with colored icons. */
export function Pricing() {
  return (
    <section id="pricing" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-normal text-primary-950">Choose your Hosting Plan</h2>
          <p className="mt-4 text-base leading-7 text-mute-500">
            Your domain control panel is designed for ease-of-use and allows for all aspects of your
            domains.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => {
            const Icon = iconMap[plan.icon]
            return (
              <article
                key={plan.name}
                className="rounded-md border border-line p-7 transition-shadow hover:shadow-lg"
              >
                <span
                  className={cn(
                    'flex h-[65px] w-[65px] items-center justify-center rounded-full',
                    colorMap[plan.color],
                  )}
                >
                  <Icon className="h-8 w-8" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-xl font-medium text-primary-950">{plan.name}</h3>
                <p className="mt-3 text-sm leading-6 text-mute-500">{plan.blurb}</p>
                <p className="mt-5 text-sm font-medium text-primary-950">{plan.price}</p>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary-950 underline-offset-4 transition-colors hover:text-accent-600 hover:underline"
                >
                  Start Now
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
