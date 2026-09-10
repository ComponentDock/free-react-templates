import { Smartphone, GraduationCap, Phone, Laptop, Heart, Monitor, Layout } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
}

function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="w-full rounded-lg bg-card-bg p-6 shadow-sm transition-shadow hover:shadow-md sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-light">
        <Icon className="h-7 w-7 text-brand" aria-hidden="true" />
      </div>
      <h3 className="mt-4 text-center text-sm font-bold uppercase tracking-wider text-heading">
        {title}
      </h3>
      <p className="mt-3 text-center text-sm leading-relaxed text-ink">{description}</p>
    </div>
  )
}

const features: FeatureCardProps[] = [
  {
    icon: Smartphone,
    title: 'Responsive',
    description: 'Websites that look great on every device, from mobile to desktop.',
  },
  {
    icon: GraduationCap,
    title: 'Expertise',
    description: 'Our team brings years of industry knowledge to every project.',
  },
  {
    icon: Phone,
    title: 'Support',
    description: 'Dedicated support to keep your project running smoothly.',
  },
  {
    icon: Laptop,
    title: 'Innovation',
    description: 'Cutting-edge technology solutions for modern business challenges.',
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'We care deeply about delivering results that matter.',
  },
  {
    icon: Monitor,
    title: 'Analytics',
    description: 'Data-driven insights to optimize your business performance.',
  },
  {
    icon: Layout,
    title: 'Design',
    description: 'Beautiful, intuitive interfaces that your users will love.',
  },
]

export function Features() {
  return (
    <section id="features" aria-label="Features" className="relative py-16">
      <div className="absolute inset-0 bg-overlay-green" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap justify-center gap-6">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
