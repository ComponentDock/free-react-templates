import { FileText, Lock, PiggyBank, Wallet } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { services } from '../data'
import type { ServiceIcon } from '../data'
import { SectionHeading } from './SectionHeading'

const serviceIcons: Record<ServiceIcon, LucideIcon> = {
  piggy: PiggyBank,
  wallet: Wallet,
  file: FileText,
  lock: Lock,
}

/** Four icon feature columns under the services heading. */
export function Services() {
  return (
    <section className="bg-white pt-24 pb-6">
      <div className="mx-auto max-w-[1250px] px-4">
        <SectionHeading label="Our Services" title="The smartest way to buy a home" />
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = serviceIcons[service.icon]
            return (
              <article key={service.title} className="text-center">
                <div className="mb-4 flex h-[100px] items-center justify-center">
                  <Icon
                    className="h-[60px] w-[60px] text-brand"
                    aria-hidden="true"
                    strokeWidth={1.4}
                  />
                </div>
                <h3 className="mb-3 text-2xl font-medium text-ink">{service.title}</h3>
                <p className="text-body">{service.blurb}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
