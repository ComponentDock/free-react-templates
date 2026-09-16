import { Hammer, PaintBucket, Wrench } from 'lucide-react'

const services = [
  {
    icon: Hammer,
    title: 'Building Drawings',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    icon: PaintBucket,
    title: 'Painting Constructions',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    icon: Wrench,
    title: 'Repairing Constructions',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
]

export function Services() {
  return (
    <section id="services" className="py-[120px]">
      <div className="mx-auto max-w-[1170px] px-4">
        <div className="mb-12 text-center">
          <h2 className="font-oswald text-[32px] font-medium text-dark">Our Offered Services</h2>
          <p className="mt-3 text-[15px] text-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-[10px] bg-white px-[55px] py-[45px] text-center transition-shadow hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)]"
            >
              <service.icon className="mx-auto mb-6 h-16 w-16 text-accent" strokeWidth={1.5} />
              <a href="#" className="block">
                <h4 className="font-oswald text-xl font-medium text-dark transition-colors hover:text-accent">
                  {service.title}
                </h4>
              </a>
              <p className="mt-4 text-sm leading-relaxed text-muted">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
