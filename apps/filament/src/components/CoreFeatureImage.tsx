import { cn } from '@free-react-templates/ui'
import { ArrowRight } from 'lucide-react'

interface CoreFeatureImageProps {
  className?: string
}

export function CoreFeatureImage({ className }: CoreFeatureImageProps) {
  return (
    <section aria-label="Core feature image" className={cn('bg-white py-24', className)}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          {/* Left image */}
          <div className="flex-1">
            <img
              src="https://picsum.photos/seed/filament-cfi/600/500"
              alt="Core feature showcase"
              className="h-full w-full rounded-xl object-cover shadow-lg"
            />
          </div>

          {/* Right text */}
          <div className="flex-1">
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-brand">
              Core Feature
            </p>
            <h2 className="mb-6 text-3xl font-semibold leading-snug text-ink md:text-4xl">
              Experience the <span className="font-bold text-brand">best features</span> we offer to
              you
            </h2>
            <p className="mb-8 leading-relaxed text-ink-light">
              Our template provides everything you need to build a stunning website. From responsive
              design to modern interactions.
            </p>
            <a
              href="#more"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3 text-sm font-medium uppercase tracking-wider text-white transition-colors hover:bg-brand-dark"
              style={{ borderRadius: '20px' }}
            >
              Learn More <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
