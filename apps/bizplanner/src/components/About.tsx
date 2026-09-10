import { Code, Camera, LifeBuoy, BarChart3 } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import type { LucideIcon } from 'lucide-react'

const FEATURES = [
  {
    icon: Code,
    title: 'Web Development',
    description:
      'We build modern, responsive web applications using the latest technologies to ensure your business stands out online.',
  },
  {
    icon: Camera,
    title: 'Photography',
    description:
      'Our professional photography services capture the essence of your brand with stunning visual content.',
  },
  {
    icon: LifeBuoy,
    title: 'Digital Media',
    description:
      'Comprehensive digital media solutions to help you connect with your audience across all channels.',
  },
  {
    icon: BarChart3,
    title: 'Online Marketing',
    description:
      'Data-driven marketing strategies that drive growth and maximize your return on investment.',
  },
] as const

export interface AboutProps {
  className?: string
}

export function About({ className }: AboutProps) {
  return (
    <section id="about-us" className={cn('py-20', className)}>
      <div className="mx-auto max-w-7xl px-4">
        {/* Title */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold uppercase text-heading md:text-4xl">
            About Our BizPlanner
          </h2>
          <p className="mx-auto max-w-2xl text-smoke">
            We are a dedicated team of professionals committed to delivering exceptional digital
            solutions. Our expertise spans across web development, design, and marketing to help
            your business thrive.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
}

function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="text-center">
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-500 text-white">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-heading">{title}</h3>
      <p className="mb-4 text-sm text-smoke">{description}</p>
      <a
        href="#about-us"
        className="text-sm font-medium text-primary-500 transition-colors hover:text-primary-700"
      >
        More Details
      </a>
    </div>
  )
}
