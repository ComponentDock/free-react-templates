import { Building2, Compass, PaintBucket, Ruler, Shield, Wrench } from 'lucide-react'

const services = [
  {
    icon: Building2,
    title: 'Innovative Structure',
    description: 'Advanced structural engineering solutions that push the boundaries of design.',
  },
  {
    icon: Compass,
    title: 'Architectural Design',
    description: 'Creative architectural designs that balance aesthetics with functionality.',
  },
  {
    icon: PaintBucket,
    title: 'Interior Design',
    description: 'Transforming interiors into spaces that inspire and delight.',
  },
  {
    icon: Ruler,
    title: 'Space Planning',
    description: 'Optimizing layouts for maximum efficiency and comfort.',
  },
  {
    icon: Shield,
    title: 'Expert Architects',
    description: 'A team of licensed architects with decades of combined experience.',
  },
  {
    icon: Wrench,
    title: 'Construction Management',
    description: 'End-to-end project oversight ensuring quality and timely delivery.',
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-paper py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="mb-1 text-center text-sm font-semibold uppercase tracking-wider text-brand">
          Services
        </p>
        <h2 className="mb-4 text-center text-3xl font-bold text-ink">Our Services</h2>
        <p className="mx-auto mb-10 max-w-xl text-center text-mist">
          We offer a comprehensive range of architecture and design services to bring your vision to
          life.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description }) => (
            <div key={title} className="text-center">
              <Icon className="mx-auto mb-4 h-10 w-10 text-brand" aria-hidden="true" />
              <h3 className="mb-2 text-lg font-bold text-ink">{title}</h3>
              <p className="text-sm leading-relaxed text-mist">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
