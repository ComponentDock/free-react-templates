import { ButtonLink } from '@free-react-templates/ui'
import { hero } from '../data'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-start bg-cover bg-center"
      style={{ backgroundImage: "url('https://picsum.photos/seed/execly-hero/1920/1080')" }}
    >
      <div className="absolute inset-0 bg-overlay" />
      <div className="relative z-10 mx-auto w-full max-w-[1170px] px-4">
        <div className="max-w-2xl">
          <h4 className="mb-4 text-sm font-medium uppercase tracking-wider text-white">
            {hero.subtitle}
          </h4>
          <h1 className="mb-6 text-5xl font-bold uppercase text-white md:text-6xl">{hero.title}</h1>
          <p className="mb-8 text-base leading-relaxed text-white/90">{hero.description}</p>
          <ButtonLink
            href="#about"
            className="inline-block rounded bg-brand px-8 py-3 text-sm font-semibold uppercase text-white transition-colors hover:bg-brand/90"
          >
            {hero.cta}
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
