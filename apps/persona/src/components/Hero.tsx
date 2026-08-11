import { ArrowRight } from 'lucide-react'
import { heroCtaHref, heroCtaLabel, heroHeadline, heroSeed, imgUrl } from '../data'
import { ActionBar } from './ActionBar'

/** Full-bleed hero with a softly blurred background photo (bokeh look from
 *  the reference screenshot), a centered three-line bold white headline, and
 *  a white pill CTA that scrolls to the contact section. */
export function Hero() {
  return (
    <section
      id="home"
      aria-label={heroHeadline[0]}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <img
        src={imgUrl(heroSeed, 1920, 1080)}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full scale-110 object-cover blur-sm"
      />
      <div className="absolute inset-0 bg-navy/20" aria-hidden="true" />

      <div className="relative z-10 px-4 text-center">
        <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          {heroHeadline.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>
        <a
          href={heroCtaHref}
          className="mt-8 inline-block rounded-full bg-white px-9 py-3.5 text-sm font-semibold text-ink shadow-lg transition-colors hover:bg-accent hover:text-white"
        >
          {heroCtaLabel}
          <ArrowRight className="ml-2 inline h-4 w-4" aria-hidden="true" />
        </a>
      </div>

      <ActionBar />
    </section>
  )
}
