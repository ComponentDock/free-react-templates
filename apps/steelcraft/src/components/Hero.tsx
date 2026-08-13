import { ArrowRight } from 'lucide-react'
import { hero } from '../data'

/** Full-width hero over a darkened industrial street photo with a centered
 *  headline, paragraph and a flat red CTA anchored to the services section. */
export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[680px] items-center justify-center overflow-hidden lg:min-h-[860px]"
      style={{ backgroundImage: `url(${hero.image})` }}
    >
      <div className="absolute inset-0 bg-overlay" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
        <h1 className="text-4xl font-medium leading-tight sm:text-5xl lg:text-[55px]">
          {hero.heading}
        </h1>
        <p className="mt-6 text-lg text-white/90">{hero.paragraph}</p>
        <a
          href={hero.href}
          className="mt-8 inline-flex items-center bg-brand px-[33px] py-[21px] text-lg text-white transition-colors hover:bg-[#c41212]"
        >
          {hero.cta}
          <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
