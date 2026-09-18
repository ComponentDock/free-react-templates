import { cn } from '@free-react-templates/ui'

interface HeroProps {
  className?: string
}

export function Hero({ className }: HeroProps) {
  return (
    <section
      id="home"
      className={cn('relative w-full h-[600px] flex items-center justify-center', className)}
      data-testid="hero"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://picsum.photos/seed/dentalink-hero/1920/1080')",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-ink/70" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Authentic Dental Service</h1>
        <p className="text-lg md:text-xl mb-8 text-white/90">
          Don&apos;t look further, This is your Dentist
        </p>
        <a
          href="#contact"
          className="inline-block bg-brand hover:bg-brand-dark text-white font-semibold py-3 px-8 rounded transition-colors"
        >
          Get Started
        </a>
      </div>
    </section>
  )
}
