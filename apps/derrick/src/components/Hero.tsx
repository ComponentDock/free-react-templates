import { ArrowRight } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const slide = {
  headline: 'Bringing to life most complex projects',
  subtitle: "We're Derrick, Construction and Development",
}

interface HeroProps {
  className?: string
}

export function Hero({ className }: HeroProps) {
  return (
    <section
      id="home"
      className={`relative min-h-[80vh] flex items-center bg-brand-500 ${className ?? ''}`}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-600 to-brand-700 opacity-90" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <p className="text-white/80 text-lg mb-4 font-light">{slide.subtitle}</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-normal leading-tight mb-8">
            {slide.headline}
          </h1>
          <Button className="bg-white text-brand-500 hover:bg-gray-100 px-8 py-3 text-sm uppercase tracking-wider rounded-none">
            Request a Quote
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
