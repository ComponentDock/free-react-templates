import { cn } from '@free-react-templates/ui'

interface HeroProps {
  className?: string
}

export function Hero({ className }: HeroProps) {
  return (
    <section
      id="home"
      className={cn('relative bg-cover bg-center min-h-[600px] flex items-center', className)}
      style={{ backgroundImage: 'url(https://picsum.photos/seed/casepoint-hero/1920/1080)' }}
    >
      <div className="absolute inset-0 bg-hero-text/70" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="max-w-2xl">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-14 h-0.5 bg-brand" />
            <span className="text-brand text-sm font-heading font-semibold uppercase tracking-wider">
              Committed to success
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-hero font-medium text-white leading-tight mb-6">
            Don&apos;t Feel Helpless We Fight for Justice
          </h1>
          <p className="text-lg text-white/80 leading-relaxed max-w-lg mb-8">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Our experienced team provides comprehensive legal solutions tailored
            to your needs.
          </p>
          <a
            href="#about"
            className="inline-block px-11 py-7 bg-brand-dark text-white text-sm font-semibold uppercase tracking-wider hover:bg-brand transition-colors"
          >
            Learn About Us
          </a>
        </div>
      </div>
    </section>
  )
}
