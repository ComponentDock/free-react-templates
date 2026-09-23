import { Compass, Ruler, PaintBucket, Building, Users, Sofa } from 'lucide-react'

const services = [
  {
    icon: Compass,
    title: 'Innovative Structure',
    description:
      'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.',
  },
  {
    icon: Ruler,
    title: 'Architectural Design',
    description:
      'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.',
  },
  {
    icon: PaintBucket,
    title: 'Interior Design',
    description:
      'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.',
  },
  {
    icon: Building,
    title: 'Modern Window Design',
    description:
      'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.',
  },
  {
    icon: Users,
    title: 'Expert Architects',
    description:
      'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.',
  },
  {
    icon: Sofa,
    title: 'Sofa Design',
    description:
      'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.',
  },
]

export function Services() {
  return (
    <section id="services" className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h4 className="mb-1 text-sm font-semibold uppercase tracking-wider text-accent">
            Our Services
          </h4>
          <h2 className="mb-4 text-3xl font-bold text-gray-900">Services</h2>
          <p className="mx-auto max-w-xl text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, explicabo, quasi.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                <s.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">{s.title}</h3>
                <p className="text-sm text-gray-500">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
