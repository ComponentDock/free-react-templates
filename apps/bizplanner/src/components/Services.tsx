import { PenTool, Camera, Code, Megaphone, Film, Headphones } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import type { LucideIcon } from 'lucide-react'

const SERVICES = [
  {
    icon: PenTool,
    title: 'Web Design',
    description:
      'Beautiful, modern designs that captivate your audience and elevate your brand identity.',
  },
  {
    icon: Camera,
    title: 'Photography',
    description:
      'Professional photography that tells your story and showcases your products in the best light.',
  },
  {
    icon: Code,
    title: 'Web Development',
    description:
      'Robust, scalable web applications built with cutting-edge technologies for optimal performance.',
  },
  {
    icon: Megaphone,
    title: 'Online Marketing',
    description:
      'Strategic digital marketing campaigns that drive traffic, engagement, and conversions.',
  },
  {
    icon: Film,
    title: 'Digital Media',
    description:
      'Compelling video and multimedia content that resonates with your target audience.',
  },
  {
    icon: Headphones,
    title: 'Support',
    description:
      'Reliable, round-the-clock technical support to keep your digital assets running smoothly.',
  },
] as const

export interface ServicesProps {
  className?: string
}

export function Services({ className }: ServicesProps) {
  return (
    <section id="service-section" className={cn('bg-white py-20', className)}>
      <div className="mx-auto max-w-7xl px-4">
        {/* Title */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold uppercase text-heading md:text-4xl">
            Services We Provide
          </h2>
        </div>

        {/* 3×2 grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
}

function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="text-center">
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-500 text-white">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-heading">{title}</h3>
      <p className="text-sm text-smoke">{description}</p>
    </div>
  )
}
