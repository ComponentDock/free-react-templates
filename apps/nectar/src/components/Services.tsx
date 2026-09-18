import { HardHat, Ruler, Headphones } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const services = [
  {
    icon: HardHat,
    title: 'Building Construction',
    description:
      'From foundation to finish, we handle all aspects of building construction with precision and expertise.',
  },
  {
    icon: Ruler,
    title: 'Interior Design',
    description:
      'Transform your spaces with our creative interior design solutions that blend aesthetics with functionality.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description:
      'Our dedicated support team is available around the clock to address your concerns and queries.',
  },
]

const socialIcons = ['facebook', 'twitter', 'linkedin', 'instagram'] as const

export function Services() {
  return (
    <section className="bg-paper py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-heading text-3xl font-bold text-heading md:text-4xl">
          Experience Great Services
        </h2>
        <div className="mx-auto mt-2 h-1 w-16 bg-brand" aria-hidden="true" />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="rounded-sm border border-muted bg-paper p-8 text-center transition-shadow hover:shadow-lg"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand/10">
                  <Icon className="h-8 w-8 text-brand" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold text-heading">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-body">{service.description}</p>
                <div className="mt-4 flex justify-center gap-2">
                  {socialIcons.map((icon) => (
                    <a
                      key={icon}
                      href={`#${icon}`}
                      aria-label={`Follow us on ${icon}`}
                      className={cn(
                        'flex h-8 w-8 items-center justify-center rounded-full border border-muted text-xs text-body transition-colors hover:border-brand hover:bg-brand hover:text-white',
                      )}
                    >
                      {icon[0]!.toUpperCase()}
                    </a>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
