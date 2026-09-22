import { cn } from '@free-react-templates/ui'

interface HeroProps {
  className?: string
}

export function Hero({ className }: HeroProps) {
  return (
    <section
      className={cn(
        'relative flex h-[600px] items-center justify-center bg-cover bg-center',
        className,
      )}
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/casamora-hero/1920/1080)',
      }}
    >
      <div className="absolute inset-0 bg-black/45" />
      <div className="relative z-10 text-center">
        <h1 className="font-heading text-5xl font-bold italic leading-tight text-white md:text-7xl">
          Enjoy A Luxury Experience
        </h1>
      </div>
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/50">
          <span className="text-white text-lg">↓</span>
        </div>
      </div>
    </section>
  )
}
