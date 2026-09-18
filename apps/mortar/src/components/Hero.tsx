import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section id="home" aria-label="Hero" className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/mortar-hero/1920/1080)' }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-ink/70" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 py-28 sm:px-6 lg:py-36">
        <h1 className="max-w-2xl text-4xl font-light leading-tight text-white sm:text-5xl lg:text-6xl">
          Creative Studio
          <span className="block text-3xl font-light text-white/80 sm:text-4xl lg:text-5xl">
            That Works For You
          </span>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
          We craft digital experiences that inspire and drive results. From concept to launch, our
          team brings your vision to life with precision and creativity.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <ButtonLink
            href="#services"
            className="rounded bg-primary-400 px-9 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-500"
          >
            Our Services
          </ButtonLink>
          <ButtonLink
            href="#portfolio"
            className="rounded border border-white bg-transparent px-9 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            View Portfolio
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
