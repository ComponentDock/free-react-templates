import { Monitor, Image, Smartphone } from 'lucide-react'

const services = [
  {
    icon: Monitor,
    title: 'Vector Illustration',
    desc: 'Custom vector artwork crafted with precision for your brand identity.',
  },
  {
    icon: Image,
    title: 'Graphic Design',
    desc: 'Eye-catching designs that communicate your message with impact.',
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    desc: 'Beautiful experiences that work flawlessly across all devices.',
  },
] as const

export function ServicesHorizontal() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary-400/10 text-primary-400">
                <service.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <div>
                <h4 className="text-base font-semibold text-ink">{service.title}</h4>
                <p className="mt-1 text-sm text-smoke">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
