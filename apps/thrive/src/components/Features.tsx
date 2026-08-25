import { ToggleLeft, Fingerprint, Send, Filter, Smartphone, Code2 } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import type { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
}

function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div
      className={cn(
        'group rounded border-2 border-transparent p-8 text-center transition-all',
        'hover:border-brand-teal',
      )}
    >
      <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-icon-circle transition-colors group-hover:bg-brand-teal">
        <Icon size={30} className="text-gray-900 transition-colors group-hover:text-brand-orange" />
      </div>
      <h3 className="mb-3 text-base font-bold text-gray-900 transition-colors group-hover:text-brand-teal">
        {title}
      </h3>
      <p className="text-sm text-feature-text">{description}</p>
    </div>
  )
}

const FEATURES = [
  {
    icon: ToggleLeft,
    title: 'Easy to use',
    description: 'Intuitive interface that makes managing your business a breeze.',
  },
  {
    icon: Fingerprint,
    title: 'Fast and Secure',
    description: 'Lightning-fast performance with enterprise-grade security.',
  },
  {
    icon: Send,
    title: 'Robust and Intuitive',
    description: 'Powerful features wrapped in a clean, simple design.',
  },
  {
    icon: Filter,
    title: 'Smart Analytics',
    description: 'Deep insights into your business metrics and growth.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Ready',
    description: 'Fully responsive design that works on every device.',
  },
  {
    icon: Code2,
    title: 'Developer Friendly',
    description: 'Built with modern tech and clean, maintainable code.',
  },
] as const

export function Features() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-5">
        <h2 className="mb-12 text-center text-3xl font-bold text-brand-teal">Features</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
