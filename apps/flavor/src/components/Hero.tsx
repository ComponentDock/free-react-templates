import { Utensils } from 'lucide-react'
import { hero } from '../data'

/** Full-width hero banner with food background photo, centered heading,
 *  paragraph, and CTA button with dark overlay. */
export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center justify-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${hero.image})` }}
    >
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 py-32 text-center text-white">
        <Utensils className="mx-auto mb-6 h-12 w-12 text-brand" aria-hidden="true" />
        <h1 className="text-5xl font-bold leading-tight sm:text-6xl">{hero.heading}</h1>
        <p className="mx-auto mt-5 max-w-[515px] font-light leading-relaxed text-white/90">
          {hero.body}
        </p>
        <a
          href="#reservation"
          className="mt-8 inline-block rounded-[3px] bg-brand px-8 py-3 text-sm font-medium text-white uppercase transition-colors duration-300 hover:bg-ink"
        >
          {hero.cta}
        </a>
      </div>
    </section>
  )
}
