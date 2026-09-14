import { Sparkles, PenTool, Layout, Lightbulb, Monitor, Smartphone } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface ServicesProps {
  className?: string
}

const services = [
  {
    icon: Sparkles,
    title: 'Brand Identity',
    description:
      'Creating distinctive visual identities that capture your brand essence and leave lasting impressions.',
  },
  {
    icon: PenTool,
    title: 'Illustration',
    description:
      'Custom illustrations that bring stories to life with unique artistic styles and compelling visuals.',
  },
  {
    icon: Layout,
    title: 'Web Design',
    description:
      'Beautiful, responsive websites that combine aesthetics with functionality for optimal user engagement.',
  },
  {
    icon: Lightbulb,
    title: 'Product Strategy',
    description:
      'Strategic planning and market research to position your product for success in competitive markets.',
  },
  {
    icon: Monitor,
    title: 'UI/UX Design',
    description:
      'User-centered design that creates intuitive, enjoyable experiences across all digital platforms.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Design',
    description:
      'Native-quality mobile experiences designed for iOS and Android with pixel-perfect attention to detail.',
  },
]

export function Services({ className }: ServicesProps) {
  return (
    <section id="services" className={cn('bg-dark py-24', className)}>
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 font-sans text-sm font-semibold uppercase tracking-widest text-primary-400">
            02 What We Do
          </p>
          <h2 className="mb-6 font-serif text-3xl font-bold text-white md:text-4xl">
            We bring results that matter for your business
          </h2>
          <p className="font-sans text-base leading-relaxed text-white/60">
            From concept to execution, we deliver end-to-end creative solutions tailored to elevate
            your brand and drive meaningful engagement.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="group rounded-sm bg-dark-lighter p-8 transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-sm bg-primary-400/10 text-primary-400 transition-colors group-hover:bg-primary-400 group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 font-serif text-xl font-bold text-white">{service.title}</h3>
                <p className="font-sans text-sm leading-relaxed text-white/60">
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
