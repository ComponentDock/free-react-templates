import { ArrowRight } from 'lucide-react'

interface ParallaxBandProps {
  headline: string
  seed: string
}

export function ParallaxBand({ headline, seed }: ParallaxBandProps) {
  return (
    <section
      className="relative h-[500px] flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(https://picsum.photos/seed/${seed}/1920/500)`,
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 text-center max-w-3xl px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{headline}</h2>
        <p className="text-white/90 text-lg mb-6 max-w-xl mx-auto leading-relaxed">
          Push your limits and achieve the results you have always dreamed of.
        </p>
        <a
          href="#home"
          className="text-white underline underline-offset-4 hover:text-brand-light transition-colors font-semibold"
        >
          Get Started <ArrowRight className="inline ml-1 w-4 h-4" />
        </a>
      </div>
    </section>
  )
}
