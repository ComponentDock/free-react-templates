import { Button } from '@free-react-templates/ui'

interface CtaParallaxProps {
  onQuoteClick?: () => void
  className?: string
}

export function CtaParallax({ onQuoteClick, className }: CtaParallaxProps) {
  return (
    <section className={`relative py-32 bg-brand-500 ${className ?? ''}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-brand-600 to-brand-700 opacity-90" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Experience Our Advance Equipments
        </h2>
        <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi unde impedit,
          necessitatibus, soluta sit quam minima expedita atque corrupti reiciendis.
        </p>
        <Button
          onClick={onQuoteClick}
          className="bg-white text-brand-500 hover:bg-gray-100 px-8 py-3 text-sm uppercase tracking-wider rounded-none"
        >
          Request a Quote
        </Button>
      </div>
    </section>
  )
}
