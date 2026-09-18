import { Monitor, BarChart3, Palette, Shield, Zap, Globe } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const services = [
  {
    icon: Monitor,
    title: 'Web Development',
    description: 'Custom websites built with modern frameworks for performance and scalability.',
  },
  {
    icon: BarChart3,
    title: 'SEO Optimization',
    description: 'Data-driven strategies to improve your search rankings and organic traffic.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that delight users and drive conversions.',
  },
  {
    icon: Shield,
    title: 'Cyber Security',
    description: 'Protect your digital assets with enterprise-grade security solutions.',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Lightning-fast load times and optimized Core Web Vitals for your site.',
  },
  {
    icon: Globe,
    title: 'Digital Strategy',
    description: 'End-to-end digital transformation consulting for modern businesses.',
  },
]

interface ServicesProps {
  className?: string
}

export function Services({ className }: ServicesProps) {
  return (
    <section id="services" className={cn('bg-gray-50 py-20', className)}>
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Our Services</h2>
          <p className="mt-3 text-gray-500">We deliver comprehensive digital solutions</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-brand bg-brand/10">
                <s.icon className="h-6 w-6 text-brand" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="text-sm text-gray-500">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
