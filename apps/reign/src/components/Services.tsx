import { PenTool, Package, Lightbulb } from 'lucide-react'

const services = [
  {
    icon: PenTool,
    title: 'Interface Design',
    description:
      'Beautiful, intuitive interfaces that delight users and drive engagement across every touchpoint.',
  },
  {
    icon: Package,
    title: 'Product Design',
    description:
      'End-to-end product design from research to launch, creating solutions that solve real problems.',
  },
  {
    icon: Lightbulb,
    title: 'Quality Results',
    description:
      'Pixel-perfect execution with meticulous attention to detail, delivering results that exceed expectations.',
  },
]

export function Services() {
  return (
    <section id="services" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {services.map(({ icon: Icon, title, description }) => (
            <div key={title} className="text-center">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand/10 text-brand">
                <Icon size={28} />
              </div>
              <h3 className="mb-3 text-xl font-semibold">{title}</h3>
              <p className="text-text-body">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
