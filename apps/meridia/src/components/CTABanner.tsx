import { cn } from '@free-react-templates/ui'

interface CTABannerProps {
  className?: string
}

export function CTABanner({ className }: CTABannerProps) {
  return (
    <section
      id="contact"
      className={cn('bg-navy py-16 sm:py-20', className)}
      aria-labelledby="cta-heading"
    >
      <div className="container mx-auto px-4 text-center">
        <p className="mb-2 text-sm font-semibold uppercase text-accent-400">Prepare for Takeoff</p>
        <h2 id="cta-heading" className="mb-6 text-2xl font-bold text-white sm:text-3xl">
          Looking for business opportunity?
        </h2>
        <a
          href="#"
          className="inline-block rounded-lg bg-primary-400 px-8 py-3 text-sm font-semibold text-white hover:bg-primary-500 transition-colors"
        >
          Get Started
        </a>
      </div>
    </section>
  )
}
