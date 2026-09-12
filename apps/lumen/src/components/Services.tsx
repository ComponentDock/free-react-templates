import { Palette, PenTool, Megaphone, Monitor, Package, Code } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface ServiceItem {
  icon: LucideIcon
  title: string
  description: string
}

const SERVICES: ServiceItem[] = [
  {
    icon: Palette,
    title: 'Brand Identity',
    description:
      'Crafting memorable visual identities that capture your brand essence and resonate with your target audience.',
  },
  {
    icon: PenTool,
    title: 'Illustration',
    description:
      'Custom illustrations that bring stories to life and add a unique creative touch to your projects.',
  },
  {
    icon: Megaphone,
    title: 'Marketing',
    description:
      'Strategic marketing campaigns that amplify your message and connect with customers across channels.',
  },
  {
    icon: Monitor,
    title: 'Web Design',
    description:
      'Beautiful, responsive websites that combine stunning aesthetics with seamless user experiences.',
  },
  {
    icon: Package,
    title: 'Packaging Design',
    description:
      'Eye-catching packaging solutions that stand out on shelves and communicate your brand values.',
  },
  {
    icon: Code,
    title: 'Web Development',
    description:
      'Robust, scalable web applications built with modern technologies and best practices.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-surface-dark py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-primary-400">
            What We Do
          </h2>
          <h3 className="mt-3 font-display text-3xl font-bold text-text-light md:text-4xl">
            We&apos;ve got everything you need to launch and grow your business
          </h3>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="rounded-lg bg-surface-dark p-8 transition-colors hover:bg-white/5"
              >
                <Icon className="mb-4 text-primary-400" size={32} />
                <h4 className="font-display text-lg font-semibold text-text-light">
                  {service.title}
                </h4>
                <p className="mt-3 font-sans text-sm leading-relaxed text-text-muted">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
