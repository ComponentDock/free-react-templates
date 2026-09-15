import { ButtonLink } from '@free-react-templates/ui'
import { hero } from '../data'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[70vh] items-center bg-cover bg-center"
      style={{ backgroundImage: `url('${hero.image}')` }}
    >
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32">
        <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          {hero.heading}
        </h1>
        <p className="mt-6 max-w-2xl text-white/90">{hero.paragraph}</p>
        <ButtonLink
          href="#events"
          className="mt-8 inline-block rounded-[2px] border-2 border-brand bg-transparent px-8 py-3.5 text-xs font-bold uppercase tracking-[2px] text-white transition-colors hover:bg-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          {hero.ctaLabel}
        </ButtonLink>
      </div>
    </section>
  )
}
