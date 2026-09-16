import { cn } from '@free-react-templates/ui'

export interface HeroProps {
  className?: string
}

export function Hero({ className }: HeroProps) {
  return (
    <section
      data-testid="hero"
      className={cn(
        'relative flex min-h-[600px] items-center justify-center bg-cover bg-center bg-no-repeat',
        className,
      )}
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/reframe-hero/1920/800)',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-3xl px-4 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/80">
          Fastest-Growing Construction Company
        </p>
        <h1 className="font-display text-4xl font-bold uppercase leading-tight text-white md:text-6xl">
          We Are Leading The Way Construction Works
        </h1>
        <a
          href="#contact"
          className="mt-8 inline-block rounded bg-brand px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
        >
          Get Started
        </a>
      </div>
    </section>
  )
}
