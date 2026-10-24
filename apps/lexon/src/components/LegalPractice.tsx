import { Shield, Heart, FileCheck } from 'lucide-react'

const practices = [
  {
    icon: Shield,
    title: 'Vehicle Accident',
    description:
      'Expert legal representation for vehicle accident cases. We fight to ensure you receive the compensation you deserve.',
  },
  {
    icon: Heart,
    title: 'Health Law',
    description:
      'Comprehensive health law services covering medical malpractice, insurance disputes, and patient rights advocacy.',
  },
  {
    icon: FileCheck,
    title: 'Insurance Law',
    description:
      'Skilled navigation of insurance claims and disputes. We protect your interests against aggressive insurance companies.',
  },
] as const

export function LegalPractice() {
  return (
    <section id="services" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="mb-16 text-center font-display text-4xl font-bold text-navy md:text-5xl">
          Legal Practice Area.
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {practices.map((item) => (
            <div key={item.title} className="group overflow-hidden rounded-lg bg-gray-50">
              <div className="relative overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/justlaw-${item.title.toLowerCase().replace(/\s+/g, '-')}/400/250`}
                  alt={item.title}
                  className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute bottom-0 right-0 bg-white p-3 transition-colors group-hover:bg-primary-500">
                  <item.icon className="h-6 w-6 text-navy group-hover:text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-3 font-display text-xl font-bold text-navy-dark">{item.title}</h3>
                <p className="text-sm leading-relaxed text-smoke">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
