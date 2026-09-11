import { ArrowRight } from 'lucide-react'

export function ParallaxCTA() {
  return (
    <section
      className="relative py-24 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/cleanslate-parallax/1920/600)' }}
    >
      <div className="absolute inset-0 bg-brand-dark/70" />
      <div className="relative container mx-auto px-4 text-center">
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
          Let us make your space shine
        </h2>
        <p className="text-white/80 mb-8 max-w-xl mx-auto">
          Book a professional cleaning service today and experience the difference of a truly clean
          environment.
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-2 bg-brand-primary text-white py-3 px-8 rounded hover:bg-brand-primary-dark transition-colors font-medium"
        >
          Get Started <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  )
}
