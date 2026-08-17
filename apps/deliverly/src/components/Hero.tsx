import { Play } from 'lucide-react'
import {
  heroImage,
  heroPrimaryCta,
  heroPrimaryCtaHref,
  heroSecondaryCta,
  heroSecondaryCtaHref,
  heroSubtitle,
  heroTitle,
} from '../data'

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative flex min-h-[max(100vh,700px)] items-center justify-center"
    >
      <img src={heroImage} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div aria-hidden="true" className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 py-28 text-center sm:px-6">
        <h1 className="font-serif text-[36px] font-bold leading-tight text-white lg:text-[50px]">
          {heroTitle}
        </h1>
        <p className="mx-auto mb-8 mt-4 text-lg text-white/90">{heroSubtitle}</p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={heroPrimaryCtaHref}
            className="rounded-[6px] bg-brand px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-hover"
          >
            {heroPrimaryCta}
          </a>
          <a
            href={heroSecondaryCtaHref}
            className="inline-flex items-center gap-2 rounded-[6px] bg-white px-5 py-3 text-sm font-semibold text-brand transition-colors hover:bg-neutral-100"
          >
            <Play aria-hidden="true" className="h-4 w-4" />
            {heroSecondaryCta}
          </a>
        </div>
      </div>
    </section>
  )
}
