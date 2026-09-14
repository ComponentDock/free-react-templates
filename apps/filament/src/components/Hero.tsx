import { cn } from '@free-react-templates/ui'

interface HeroProps {
  className?: string
}

export function Hero({ className }: HeroProps) {
  return (
    <section
      aria-label="Hero banner"
      className={cn(
        'relative flex min-h-screen items-center justify-center overflow-hidden',
        className,
      )}
    >
      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(90deg, #f6d0c5, #fbd2f6)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 text-center">
        <h1
          className="mb-6 text-6xl font-extralight uppercase tracking-widest text-white md:text-7xl lg:text-8xl"
          style={{
            textShadow: '13px 15px 8px #f2c4d0',
            letterSpacing: '3px',
          }}
        >
          Brand new Filament
        </h1>
        <p className="mb-10 text-lg font-light text-white/90 md:text-xl">
          A beautifully crafted feminine landing page template with soft pink gradients and elegant
          typography.
        </p>
        <a
          href="#features"
          className="inline-block rounded-full bg-white px-10 py-3 text-sm font-medium uppercase tracking-wider text-ink transition-all hover:bg-ink hover:text-white"
          style={{ borderRadius: '20px' }}
        >
          Explore Now
        </a>
      </div>
    </section>
  )
}
