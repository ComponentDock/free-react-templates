import { Compass, Palette, Code2, Megaphone } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const services = [
  {
    icon: <Compass className="h-8 w-8" />,
    title: 'Strategy',
    description:
      'Data-driven product strategy that aligns business goals with user needs to drive measurable outcomes.',
  },
  {
    icon: <Palette className="h-8 w-8" />,
    title: 'UX Design',
    description:
      'User research, wireframing, and prototyping that transforms complex problems into intuitive solutions.',
  },
  {
    icon: <Code2 className="h-8 w-8" />,
    title: 'Development',
    description:
      'Full-stack development using modern frameworks to bring designs to life with clean, performant code.',
  },
  {
    icon: <Megaphone className="h-8 w-8" />,
    title: 'Marketing',
    description:
      'Brand positioning and digital marketing strategies that connect with your target audience effectively.',
  },
] as const

export function Services() {
  return (
    <section data-testid="services" id="service" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-brand-500 dark:text-brand-400">
            What I Do
          </p>
          <h2 className="font-heading text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            My Services
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className={cn(
                'group rounded-2xl border border-gray-100 bg-white p-8 transition-all hover:border-brand-200 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-brand-800',
              )}
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-brand-50 text-brand-500 transition-colors group-hover:bg-brand-400 group-hover:text-white dark:bg-brand-950 dark:text-brand-400 dark:group-hover:bg-brand-500 dark:group-hover:text-white">
                {service.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
