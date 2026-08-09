import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section id="home" className="bg-maroon">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28">
        <div className="text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
            Makeup Artist
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Make your face <span className="text-brand">the center of attention.</span>
          </h1>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-white/75">
            My love of makeup started young, sneaking into my mother's makeup vanity and playing
            with various shades of lipstick, eyeshadow and blush. Makeup became a full-blown
            obsession after four years of art school where I mastered the airbrush technique.
          </p>
          <ButtonLink
            href="#contact"
            variant="primary"
            className="mt-8 rounded-full px-8 uppercase tracking-widest"
          >
            Contact us <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
        </div>
        <div className="flex justify-center lg:justify-end">
          <img
            src="https://picsum.photos/seed/gloss-hero/560/640"
            alt="Gloss featured makeup look"
            className="w-full max-w-md rounded-t-[10rem] border-4 border-white/10 object-cover shadow-2xl"
            loading="eager"
          />
        </div>
      </div>
    </section>
  )
}
