import { ArrowRight } from 'lucide-react'
import { hero } from '../data'

/** Full-height hero: background photo under a black overlay, white eyebrow +
 *  headline, and two text-style call-to-action links with arrow icons. */
export function Hero() {
  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative flex min-h-[92vh] items-center overflow-hidden"
    >
      <img src={hero.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="text-base font-semibold text-white/90">{hero.eyebrow}</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-[48px]">
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80">
            {hero.description}
          </p>
          <div className="mt-10 flex flex-wrap gap-8">
            <a
              href={hero.ctaPrimary.href}
              className="inline-flex items-center gap-2 text-base font-medium text-white transition-colors hover:text-brand"
            >
              {hero.ctaPrimary.label} <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href={hero.ctaSecondary.href}
              className="inline-flex items-center gap-2 text-base font-medium text-white transition-colors hover:text-brand"
            >
              {hero.ctaSecondary.label} <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
