import { heroPortrait, heroSubtitle, heroTitle } from '../data'
import { btnOutlineHero } from './buttonClasses'

/**
 * Full-height neon-green hero (reference: .slider-height). Serif title,
 * intro line, outlined Hire Me button, and a portrait on the right.
 */
export function Hero() {
  return (
    <section id="home" aria-label="Hero" className="bg-hero-green">
      <div className="mx-auto flex h-[900px] max-w-6xl flex-col items-center gap-12 px-4 py-16 lg:flex-row lg:justify-between lg:px-8">
        <div className="max-w-xl text-center lg:text-left">
          <h1 className="font-heading text-[56px] font-normal leading-tight text-ink lg:text-[72px]">
            {heroTitle}
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/80">{heroSubtitle}</p>
          <a href="#contact" className={`mt-10 inline-flex ${btnOutlineHero}`}>
            Hire Me
          </a>
        </div>
        <div className="shrink-0">
          <img
            src={heroPortrait}
            alt="Creative workspace flat lay"
            className="max-h-[560px] w-auto max-w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
