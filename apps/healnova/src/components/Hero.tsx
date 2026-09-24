import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-ink dark:bg-ink-dark">
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/healnova-hero/1600/900"
          alt="Medical professional providing care"
          className="h-full w-full object-cover opacity-40"
        />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:py-36">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            We Provide High Solutions for Your Health
          </h1>
          <div className="mt-8">
            <ButtonLink
              href="#services"
              className="rounded-lg bg-brand px-10 text-white hover:bg-brand-dark"
            >
              Get started
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
