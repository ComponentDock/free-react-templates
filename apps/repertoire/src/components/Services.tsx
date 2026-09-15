import { cn } from '@free-react-templates/ui'
import { Tag, PenTool, Search, Send, Monitor, HelpCircle } from 'lucide-react'

interface ServiceItem {
  title: string
  description: string
  icon: React.ElementType
}

const services: ServiceItem[] = [
  {
    title: 'Branding',
    description: 'Crafting unique brand identities that resonate with your audience.',
    icon: Tag,
  },
  {
    title: 'Web Design',
    description: 'Designing beautiful, responsive websites that engage visitors.',
    icon: PenTool,
  },
  {
    title: 'SEO',
    description: 'Optimizing your online presence for maximum visibility.',
    icon: Search,
  },
  {
    title: 'Web Development',
    description: 'Building fast, scalable web applications with modern tech.',
    icon: Send,
  },
  {
    title: 'UI',
    description: 'Creating intuitive user interfaces that delight users.',
    icon: Monitor,
  },
  {
    title: 'Help & Support',
    description: 'Providing ongoing support and maintenance for your projects.',
    icon: HelpCircle,
  },
]

interface ServicesProps {
  className?: string
}

export function Services({ className }: ServicesProps) {
  return (
    <section id="services" className={cn('bg-gray-50 py-20', className)}>
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary-600">
            What I do?
          </p>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Here are some of my expertise
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="flex gap-4 rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                  <Icon size={24} />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-bold text-gray-900">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
