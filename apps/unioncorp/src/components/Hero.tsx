import { ArrowRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface HeroProps {
  className?: string
}

export function Hero({ className }: HeroProps) {
  return (
    <section
      id="home"
      className={cn('relative flex min-h-[500px] items-center bg-navy', className)}
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/unioncorp-hero/1920/800)' }}
      />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Build Your Financial Plan With Our Specialists
        </h1>
        <p className="mx-auto mb-6 max-w-2xl text-base text-white/80 sm:text-lg">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
          there live the blind texts.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-navy hover:bg-white/90 transition-colors"
        >
          Get Started
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}
