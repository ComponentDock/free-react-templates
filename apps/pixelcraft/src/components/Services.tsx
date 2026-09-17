import { Palette, Smartphone, Globe, PenTool } from 'lucide-react'

const services = [
  {
    icon: Palette,
    title: 'Branding',
    description:
      'We craft unique brand identities that resonate with your audience and stand out in the market.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description:
      'Native and cross-platform mobile applications built with cutting-edge technology.',
  },
  {
    icon: Globe,
    title: 'Web',
    description:
      'Modern, responsive websites that deliver exceptional user experiences across all devices.',
  },
  {
    icon: PenTool,
    title: 'Graphic',
    description: 'Eye-catching graphic design solutions for print and digital media campaigns.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-start gap-12 md:grid-cols-[370px_1fr]">
          {/* Title block */}
          <div className="flex h-[370px] w-[370px] flex-col items-center justify-center bg-green-title">
            <span
              className="text-6xl font-bold text-green-num"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              01
            </span>
            <span
              className="mt-2 text-2xl font-bold text-white"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Services
            </span>
          </div>

          {/* Service cards grid */}
          <div className="grid gap-8 sm:grid-cols-2">
            {services.map((service) => (
              <div key={service.title} className="flex flex-col gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-navy/5">
                  <service.icon className="h-7 w-7 text-navy" />
                </div>
                <h3
                  className="text-xl font-bold text-navy-body"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-gray-text leading-relaxed"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
