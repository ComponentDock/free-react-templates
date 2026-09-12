import { cn } from '@free-react-templates/ui'
import { Layout, Code, ShoppingCart, Smartphone, PenTool, Search } from 'lucide-react'

const services = [
  {
    icon: Layout,
    title: 'Design',
    description:
      'We create stunning visual designs that capture your brand essence and engage your audience from the first impression.',
  },
  {
    icon: Code,
    title: 'Development',
    description:
      'Our expert developers build robust, scalable solutions using modern technologies and best practices.',
  },
  {
    icon: ShoppingCart,
    title: 'eCommerce',
    description:
      'Launch your online store with a seamless shopping experience that converts visitors into loyal customers.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description:
      'Native and cross-platform mobile applications that deliver exceptional user experiences on any device.',
  },
  {
    icon: PenTool,
    title: 'CopyWriting',
    description:
      'Compelling content that tells your story, engages your audience, and drives meaningful conversions.',
  },
  {
    icon: Search,
    title: 'SEO',
    description:
      'Strategic optimization that boosts your visibility and brings qualified organic traffic to your website.',
  },
] as const

interface ServiceCardProps {
  icon: typeof Layout
  title: string
  description: string
}

function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="rounded border border-gray-100 bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
      <span
        className={cn(
          'mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-50 text-primary-400 dark:bg-primary-900/40',
        )}
      >
        <Icon className="h-8 w-8" aria-hidden="true" />
      </span>
      <h3 className="mt-6 text-xl font-medium text-ink dark:text-gray-100">{title}</h3>
      <p className="mt-4 text-sm leading-relaxed text-smoke dark:text-gray-400">{description}</p>
    </div>
  )
}

export function Services() {
  return (
    <section id="services" aria-label="Services" className="bg-mist py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl text-center">
          <h2 className="text-3xl font-medium text-ink dark:text-gray-100">Our Services</h2>
          <p className="mt-5 leading-relaxed text-smoke dark:text-gray-400">
            We provide a comprehensive range of digital services to help your business grow and
            thrive in the online landscape.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
