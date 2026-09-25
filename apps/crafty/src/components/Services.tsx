import { Monitor, Image, Smartphone, Gift } from 'lucide-react'

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
  {
    icon: Gift,
    title: 'Creative Packaging',
    desc: 'Packaging solutions that make your product stand out on shelves.',
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div key={service.title} className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-400/10 text-primary-400">
                <service.icon className="h-7 w-7" aria-hidden="true" />
              </div>
              <h4 className="mt-5 text-base font-semibold text-ink">{service.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-smoke">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
