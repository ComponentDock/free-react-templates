import { ButtonLink } from '@free-react-templates/ui'
import { hero } from '../data'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white">
      {/* Soft navy + amber blob shapes behind the illustration (the original
          uses a rounded blob-1.svg decoration top-right). */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-48 -right-40 h-[520px] w-[520px] rounded-full bg-brand/5"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-24 -right-24 h-72 w-72 rounded-full bg-accent/20"
      />

      <div className="relative mx-auto max-w-[1250px] px-4 pt-20 pb-24 lg:pt-28 lg:pb-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-accent/20 px-5 py-1.5 text-[10px] font-bold tracking-widest text-accent uppercase">
              {hero.pill}
            </span>
            <h1 className="mt-4 mb-5 text-4xl leading-tight font-bold text-brand md:text-5xl">
              {hero.headline}
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-body">{hero.subline}</p>
            <div className="flex flex-wrap gap-4">
              <ButtonLink href="#about" size="md" className="h-12 rounded-full px-8 text-base">
                {hero.primaryCta}
              </ButtonLink>
              <ButtonLink
                href="#contact"
                variant="outline"
                size="md"
                className="h-12 rounded-full border-2 border-brand px-8 text-base text-brand hover:bg-brand hover:text-white"
              >
                {hero.secondaryCta}
              </ButtonLink>
            </div>
          </div>

          <div className="relative">
            <img
              src={hero.image}
              alt={hero.imageAlt}
              className="mx-auto w-full max-w-[560px]"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
