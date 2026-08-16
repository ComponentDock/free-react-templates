import { ArrowRight, Play } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'
import { hero } from '../data'

/* Hero (source: div.slider-area → .single-sliders.slider-height.slider-bg1).
   Full-width cover photo with a white pill eyebrow, 58px navy headline,
   subcopy and a pink pill "Explore Services" CTA on the left; a decorative
   circular play button floats on the right (the original opens a YouTube
   popup — the recreation is a static button). */
export function Hero() {
  return (
    <section
      id="home"
      className="relative bg-cover bg-center"
      style={{ backgroundImage: "url('https://picsum.photos/id/9/1920/1080')" }}
    >
      {/* Soft white scrim on the text side so the navy headline stays
          readable over the photo (the reference photo is a light pastel
          office shot; picsum substitutes are unlit). */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/40 to-transparent"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 px-[15px] pb-24 pt-40 lg:grid-cols-2 lg:pt-48">
        <div>
          <span className="inline-block rounded-full border border-brand/20 bg-white px-[18px] py-[5px] text-sm text-brand">
            {hero.eyebrow}
          </span>
          <h1 className="mt-5 font-heading text-[42px] font-bold leading-[1.2] text-navy sm:text-[50px] lg:text-[58px]">
            {hero.headline}
          </h1>
          <p className="mt-3 max-w-md text-xl text-navy">{hero.subcopy}</p>
          <ButtonLink
            href="#services"
            className="group mt-12 inline-flex rounded-full bg-gradient-to-b from-brand to-brand-dark px-9 py-[15px] text-lg font-medium text-white shadow-[0_10px_25px_0_rgba(255,68,149,0.4)] transition-all hover:from-brand-dark hover:to-brand"
          >
            {hero.ctaLabel}
            <ArrowRight
              className="h-5 w-5 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </ButtonLink>
        </div>
        <div className="flex justify-center lg:justify-end">
          <button
            type="button"
            aria-label={hero.playLabel}
            className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-brand shadow-[0_15px_35px_0_rgba(0,0,0,0.25)] transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            <Play className="h-8 w-8 fill-current" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
