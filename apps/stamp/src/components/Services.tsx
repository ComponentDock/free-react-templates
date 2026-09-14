import { Cpu, Award, DollarSign, Headphones } from 'lucide-react'

const SERVICES = [
  {
    icon: Cpu,
    title: 'Advance Technology',
    description:
      'All fish day af emale very appear moved seas above Fifth them grass gathere above male moveth whose life rule she gathering seas of is sea night.',
  },
  {
    icon: Award,
    title: 'World Quality Service',
    description:
      'All fish day af emale very appear moved seas above Fifth them grass gathere above male moveth whose life rule she gathering seas of is sea night.',
  },
  {
    icon: DollarSign,
    title: 'Competitive Pricing',
    description:
      'All fish day af emale very appear moved seas above Fifth them grass gathere above male moveth whose life rule she gathering seas of is sea night.',
  },
  {
    icon: Headphones,
    title: 'Lifetime Support',
    description:
      'All fish day af emale very appear moved seas above Fifth them grass gathere above male moveth whose life rule she gathering seas of is sea night.',
  },
] as const

export function Services() {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <div key={service.title} className="text-center">
              <service.icon size={48} className="mx-auto text-brand" strokeWidth={1.5} />
              <div className="mx-auto my-4 h-[2px] w-12 bg-brand" />
              <h3 className="text-xl font-semibold text-ink">{service.title}</h3>
              <p className="mt-3 text-mist leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
