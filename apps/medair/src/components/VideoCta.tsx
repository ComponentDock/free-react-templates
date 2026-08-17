import { Play } from 'lucide-react'
import { IMAGES, VIDEO } from '../data'
import { greenButton, whiteButton } from './buttonClasses'

/** Video CTA — photo band with a circular play button, white subheading
    and heading, and Get Started / Contact Us buttons. */
export function VideoCta() {
  return (
    <section
      className="relative min-h-[500px] bg-cover bg-center"
      style={{ backgroundImage: `url(${IMAGES.video})` }}
    >
      <div className="absolute inset-0 bg-dark/60" />
      <div className="relative z-10 flex min-h-[500px] flex-col items-center justify-center px-4 py-24 text-center">
        <button
          type="button"
          aria-label="Play video"
          className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-brand bg-white/10 text-white transition-colors hover:bg-brand"
        >
          <Play className="h-8 w-8 fill-current" aria-hidden="true" />
        </button>
        <p className="mt-8 text-[13px] font-semibold uppercase tracking-[0.2em] text-white/80">
          {VIDEO.subheading}
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl text-white sm:text-5xl">
          {VIDEO.heading}
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="#appointment" className={greenButton}>
            Get Started
          </a>
          <a href="#appointment" className={whiteButton}>
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}
