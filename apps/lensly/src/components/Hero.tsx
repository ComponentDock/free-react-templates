import { ButtonLink } from '@free-react-templates/ui'
import { HERO_IMAGE } from '../data'

/* div.site-section-cover.overlay — full-height photo hero (min-height
   677px), dark rgba(0,0,0,.3) overlay, left column: white eyebrow
   "Hey there! I'm Craig Smith", amber serif h1 "Wedding & Event
   Photographer", white paragraph, amber "Contact Me" button. */
export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[677px] items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${HERO_IMAGE})` }}
    >
      <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
        <div className="max-w-xl">
          <p className="text-lg text-white">Hey there! I'm Craig Smith</p>
          <h1 className="mt-3 font-display text-4xl leading-tight font-black text-brand sm:text-5xl">
            Wedding & Event Photographer
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-white">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
            the Semantics, a large language ocean.
          </p>
          <ButtonLink
            href="#contact"
            className="mt-6 rounded bg-brand px-6 py-3 text-base font-semibold text-ink hover:bg-brand/90"
          >
            Contact Me
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
