import { cn } from '@free-react-templates/ui'

interface HeroProps {
  className?: string
}

export function Hero({ className }: HeroProps) {
  return (
    <section
      id="home"
      className={cn('relative bg-cover bg-center min-h-[600px] flex items-center', className)}
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/tribunal-hero/1920/1080)',
      }}
    >
      <div className="absolute inset-0 bg-hero-overlay/70" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight mb-6">
          The Greatest Law Firm You Can Trust
        </h1>
        <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-8">
          A trusted team of legal professionals dedicated to providing outstanding representation.
          We fight for justice and deliver results that matter.
        </p>
        <a
          href="#practice-areas"
          className="inline-block px-10 py-4 border-2 border-white text-white text-sm font-semibold uppercase tracking-wider hover:bg-white hover:text-hero-overlay transition-colors"
        >
          Read More
        </a>
      </div>
    </section>
  )
}
