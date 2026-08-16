import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'
import { hero } from '../data'

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="flex min-h-screen items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${hero.image})` }}
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-24">
        <div className="max-w-lg text-white">
          <span className="text-sm font-bold uppercase tracking-[2px] text-white/70">
            {hero.eyebrow}
          </span>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-white lg:text-[40px]">
            {hero.headline}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-white/80">{hero.copy}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink
              href="#courses"
              className="h-auto rounded px-8 py-4 text-base hover:bg-brand-dark"
            >
              {hero.primaryCta}
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink
              variant="outline"
              href="#courses"
              className="h-auto rounded border-white bg-white px-8 py-4 text-base text-brand hover:bg-transparent hover:text-white"
            >
              {hero.secondaryCta}
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
