import { ButtonLink } from '@free-react-templates/ui'
import { HERO_ADDRESS, HERO_CTA, HERO_HEADLINE, HERO_IMAGE } from '../data'

/* .site-blocks-cover.overlay — full-viewport hero (min-height 600px) with a
   cover photo under an rgba(0,0,0,.4) overlay; centered white headline in
   uppercase Oswald with wide letter-spacing, address line and a square tan
   "Take a Tour" button. */
export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[600px] h-screen items-center">
      <img
        src={HERO_IMAGE}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-top"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-black/40" />

      <div className="relative mx-auto max-w-4xl px-4 text-center">
        <h1 className="font-heading text-3xl font-bold uppercase tracking-[0.1em] text-white sm:text-4xl lg:text-[4rem]">
          {HERO_HEADLINE}
        </h1>
        <p className="mx-auto mt-4 mb-5 max-w-xl text-xl leading-relaxed text-white">
          {HERO_ADDRESS}
        </p>
        <ButtonLink
          href="#home"
          className="h-auto rounded-none bg-brand px-5 py-3 text-base font-normal uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
        >
          {HERO_CTA}
        </ButtonLink>
      </div>
    </section>
  )
}
