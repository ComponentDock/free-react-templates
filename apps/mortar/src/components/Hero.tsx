import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'
import { hero } from '../data'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('https://picsum.photos/seed/mortar-hero/1920/1080')" }}
    >
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center">
        <span className="inline-block -rotate-6 border-2 border-brand px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.3em] text-brand">
          {hero.badge}
        </span>
        <h1 className="mt-6 text-4xl font-medium leading-tight text-white sm:text-5xl lg:text-6xl">
          {hero.headline.split(hero.highlight)[0]}
          <span className="text-brand">{hero.highlight}</span>
          {hero.headline.split(hero.highlight)[1]}
        </h1>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ButtonLink
            href="#contact"
            className="rounded-[4px] bg-brand px-8 py-4 text-base font-medium text-charcoal hover:border hover:border-brand hover:bg-transparent hover:text-brand"
          >
            {hero.primaryCta}
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </ButtonLink>
          <ButtonLink
            href="#contact"
            className="rounded-[4px] bg-charcoal px-8 py-4 text-base font-medium text-white hover:border hover:border-charcoal hover:bg-transparent hover:text-white"
          >
            {hero.secondaryCta}
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
