import { ButtonLink } from '@free-react-templates/ui'
import { Mouse } from 'lucide-react'
import { heroHeadline, heroImage } from '../data'

/** Full-viewport photo hero: dark rgba(0,0,0,.4) overlay, uppercase weight-900
 *  headline, blue pill CTA to #contact-section and a mouse-scroll indicator
 *  (`.site-blocks-cover.overlay` token from the reference). */
export function Hero() {
  return (
    <section
      id="home-section"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <img
        src={heroImage}
        alt="Unison hero — modern open office"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-28 text-center">
        <h1 className="text-3xl font-black uppercase leading-tight text-white sm:text-5xl">
          {heroHeadline}
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg font-light text-white/90">
          Free html5 templates Made with love by your friends from the Unison studio.
        </p>
        <ButtonLink
          href="#contact-section"
          className="mt-10 rounded-full px-[30px] py-[10px] text-base"
        >
          Get In Touch
        </ButtonLink>
      </div>
      <a
        href="#about-section"
        aria-label="Scroll down to the about section"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/80 transition-colors hover:text-white"
      >
        <Mouse aria-hidden="true" className="h-8 w-8" />
      </a>
    </section>
  )
}
