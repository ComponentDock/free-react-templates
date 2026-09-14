import { cn } from '@free-react-templates/ui'
import { Settings, Layout, RefreshCw, Smartphone } from 'lucide-react'

interface FeaturesProps {
  className?: string
}

const features = [
  { icon: Settings, label: 'Easy Installation' },
  { icon: Layout, label: 'Multiple Layouts' },
  { icon: RefreshCw, label: 'Free Updates' },
  { icon: Smartphone, label: 'Fully Responsive' },
]

export function Features({ className }: FeaturesProps) {
  return (
    <section id="features" aria-label="Features" className={cn('bg-white py-24', className)}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, label }) => (
            <div key={label} className="text-center">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-brand/20">
                <Icon className="h-8 w-8 text-brand" />
              </div>
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-ink">
                {label}
              </h2>
              <p className="text-sm leading-relaxed text-ink-light">
                Crafted with attention to every detail for a seamless experience.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
