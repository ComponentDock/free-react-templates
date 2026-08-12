import { ButtonLink } from '@free-react-templates/ui'
import { HERO } from '../data'

/**
 * Hero — split banner: left column with the purple "Hey" eyebrow, a massive
 * Anton uppercase headline, blurb and a purple-gradient "Hire me" button;
 * right column the trainer portrait. A giant faint vertical "trainer"
 * watermark sits behind the text and a white SVG wave divides the bottom
 * edge into the page background.
 */
export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[1000px] items-center overflow-hidden bg-white"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 select-none font-display text-[220px] uppercase leading-none tracking-widest text-ink/5 [writing-mode:vertical-rl]"
      >
        trainer
      </span>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-6 py-36 lg:grid-cols-2 lg:px-8">
        <div>
          <h5 className="text-2xl font-medium text-eyebrow">{HERO.eyebrow}</h5>
          <h1 className="mt-4 font-display text-6xl uppercase leading-[1.1] text-ink md:text-8xl">
            {HERO.headline}
          </h1>
          <p className="mt-6 max-w-lg text-base font-light text-body">{HERO.blurb}</p>
          <div className="mt-10">
            <ButtonLink
              href="#contact"
              className="rounded-none bg-gradient-to-r from-brand-light via-brand-dark to-brand-light bg-[length:200%_auto] px-12 py-4 text-sm font-medium uppercase tracking-[1.5px] text-white transition-all duration-500 hover:bg-right"
            >
              {HERO.cta}
            </ButtonLink>
          </div>
        </div>

        <div>
          <img
            src={HERO.image}
            alt="Ironvault head trainer portrait"
            className="mx-auto w-full max-w-md object-cover shadow-xl"
          />
        </div>
      </div>

      <svg
        aria-hidden="true"
        viewBox="0 0 1440 64"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 h-10 w-full text-white md:h-16"
      >
        <path
          d="M0,32 C240,96 480,-32 720,16 C960,64 1200,0 1440,32 L1440,64 L0,64 Z"
          fill="currentColor"
        />
      </svg>
    </section>
  )
}
