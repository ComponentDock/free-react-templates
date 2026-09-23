import { Code, Palette, Megaphone, BarChart3 } from 'lucide-react'

const services = [
  {
    number: '01',
    icon: Code,
    title: 'Web Development',
    description:
      'Building fast, responsive and accessible web applications using modern frameworks and best practices.',
    items: ['Responsive Design', 'Performance Optimization', 'Clean Architecture'],
  },
  {
    number: '02',
    icon: Palette,
    title: 'UI/UX Design',
    description:
      'Crafting intuitive user interfaces and seamless experiences that delight users and drive engagement.',
    items: ['User Research', 'Wireframing & Prototyping', 'Design Systems'],
  },
  {
    number: '03',
    icon: Megaphone,
    title: 'Brand Strategy',
    description:
      'Developing cohesive brand identities that communicate your values and connect with your target audience.',
    items: ['Visual Identity', 'Brand Guidelines', 'Marketing Materials'],
  },
  {
    number: '04',
    icon: BarChart3,
    title: 'Digital Marketing',
    description:
      'Data-driven marketing strategies that increase visibility, traffic, and conversions across channels.',
    items: ['SEO Optimization', 'Content Strategy', 'Analytics & Reporting'],
  },
]

export function Services() {
  return (
    <section
      id="services"
      className="relative bg-[#fafafa] py-24"
      role="region"
      aria-label="Services"
    >
      {/* Watermark */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 select-none font-[family-name:var(--font-heading)] text-[250px] font-bold uppercase leading-none text-[#f0f0f0] opacity-50"
      >
        Services
      </span>

      {/* Rotated vertical label */}
      <span
        aria-hidden="true"
        className="absolute left-6 top-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap text-xs font-bold uppercase tracking-[4px] text-gray-300"
      >
        What I Do
      </span>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-12">
        <div className="grid gap-10 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.number} className="flex gap-6">
              <div className="shrink-0">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <service.icon size={24} />
                </span>
              </div>
              <div>
                <p className="text-sm font-bold text-brand">{service.number}</p>
                <h3 className="mt-1 font-[family-name:var(--font-heading)] text-xl font-bold text-heading">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">{service.description}</p>
                <ul className="mt-4 space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="h-1 w-1 rounded-full bg-brand" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
