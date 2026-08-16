import { ButtonLink } from '@free-react-templates/ui'
import { hero } from '../data'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <img
        src={hero.image}
        alt="Person in need receiving a helping hand"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-navy/70" aria-hidden="true" />
      <div className="relative mx-auto flex min-h-[620px] max-w-6xl items-center px-4 py-28 sm:px-6 lg:min-h-[760px]">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl font-medium leading-tight text-white sm:text-5xl lg:text-6xl">
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg font-light leading-relaxed text-white/90 sm:text-xl">
            {hero.paragraph}
          </p>
          <div className="mt-10">
            <ButtonLink
              href="#causes"
              className="rounded-none bg-teal px-10 py-4 text-base font-medium uppercase tracking-wide text-white transition-colors hover:bg-navy"
            >
              {hero.cta}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
