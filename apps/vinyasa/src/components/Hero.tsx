import { hero } from '../data'
import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Welcome"
      className="relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${hero.image})` }}
    >
      <div className="absolute inset-0 bg-white/85" aria-hidden="true" />
      <div className="relative mx-auto flex max-w-6xl items-center gap-12 px-6 py-24 md:py-32">
        <div className="max-w-xl">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-brand">{hero.label}</p>
          <h1 className="mt-4 text-5xl font-thin leading-tight text-ink md:text-6xl">
            {hero.headlinePrefix}{' '}
            <span className="font-light text-brand">{hero.headlineAccent}</span>{' '}
            {hero.headlineSuffix}
          </h1>
          <p className="mt-6 max-w-md leading-relaxed text-muted">{hero.copy}</p>
          <ButtonLink
            href="#contact"
            className="mt-10 rounded-none bg-brand px-8 py-3 text-sm font-medium uppercase tracking-wider text-white shadow-[-10px_10px_20px_rgba(0,0,0,0.1)] hover:bg-brand-dark"
          >
            Become a Member
          </ButtonLink>
        </div>
        <img
          src={hero.poseImage}
          alt=""
          loading="lazy"
          className="hidden h-[520px] w-[420px] rounded-none object-cover shadow-2xl lg:block"
        />
      </div>
    </section>
  )
}
