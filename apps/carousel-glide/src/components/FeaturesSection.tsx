import { cn } from '@free-react-templates/ui'
import { Camera, Zap, Sparkles, Palette } from 'lucide-react'

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: <Camera size={28} className="text-primary-600" />,
    title: 'Pro Photography Tips',
    description:
      'Learn advanced mobile photography techniques from industry professionals. Master composition, lighting, and editing.',
  },
  {
    icon: <Zap size={28} className="text-primary-600" />,
    title: 'Instant Editing',
    description:
      'Powerful built-in editing tools let you enhance photos instantly. Apply filters, adjust exposure, and perfect every shot.',
  },
  {
    icon: <Sparkles size={28} className="text-primary-600" />,
    title: 'Creative Filters',
    description:
      'Access a curated collection of artistic filters and presets. Transform your photos with one tap — from vintage to modern aesthetics.',
  },
  {
    icon: <Palette size={28} className="text-primary-600" />,
    title: 'Color Grading',
    description:
      'Professional color grading tools for mobile. Create stunning color palettes and maintain consistent style across your portfolio.',
  },
]

export interface FeaturesSectionProps {
  className?: string
}

export function FeaturesSection({ className }: FeaturesSectionProps) {
  return (
    <section
      id="features"
      className={cn('py-20 px-4 bg-white', className)}
      aria-labelledby="features-heading"
    >
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h2 id="features-heading" className="text-3xl lg:text-4xl font-bold text-dark mb-4">
            Features & Highlights
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to elevate your mobile photography to professional standards
          </p>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className={cn(
                'group p-6 rounded-2xl bg-gray-50',
                'border border-gray-100',
                'transition-all duration-300 ease-in-out',
                'hover:border-primary-200 hover:shadow-xl hover:-translate-y-1',
                'focus-within:ring-2 focus-within:ring-primary-500',
              )}
              data-testid={`feature-card-${index}`}
            >
              <div
                className={cn(
                  'w-14 h-14 rounded-xl flex items-center justify-center',
                  'bg-primary-50 group-hover:bg-primary-100',
                  'transition-all duration-300',
                )}
              >
                {feature.icon}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-dark group-hover:text-primary-700 transition-colors">
                {feature.title}
              </h3>
              <p className="mt-2 text-base text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
