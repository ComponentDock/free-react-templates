import { Layout, Code2, Palette, PenTool } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const services = [
  {
    icon: Layout,
    title: 'Web Design',
    description: '203 Fake St. Mountain View, San Francisco, California, USA',
    active: false,
  },
  {
    icon: Code2,
    title: 'Web Development',
    description: 'A small river named Duden flows by their place and supplies.',
    active: true,
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    description: 'A small river named Duden flows by their place and supplies.',
    active: false,
  },
  {
    icon: PenTool,
    title: 'Writing',
    description: 'A small river named Duden flows by their place and supplies.',
    active: true,
  },
]

export function Services() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className={cn(
                'flex flex-col items-start p-8 transition-colors',
                service.active
                  ? 'border-b-2 border-gold-400 sm:border-b-0 sm:border-r-2'
                  : 'border-b border-gray-200 sm:border-b-0 sm:border-r sm:border-gray-200 last:border-r-0',
              )}
            >
              <service.icon
                className={cn('mb-4 h-10 w-10', service.active ? 'text-gold-400' : 'text-gray-400')}
                strokeWidth={1.5}
              />
              <h3 className="mb-3 text-lg font-bold text-dark-900">{service.title}</h3>
              <p className="text-sm leading-relaxed text-gray-500">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
