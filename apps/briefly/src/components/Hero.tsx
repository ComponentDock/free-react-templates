import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative overflow-hidden bg-[url('https://picsum.photos/seed/briefly-hero/1920/1080')] bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative mx-auto flex min-h-[500px] max-w-6xl items-center justify-center px-4 py-24 sm:px-6">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            We Combine
            <br />
            Business with Finance
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
          <div className="mt-10">
            <ButtonLink
              href="#contact"
              className="inline-block rounded bg-gradient-to-r from-primary-400 to-salmon-400 px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:from-primary-500 hover:to-salmon-500"
            >
              Get Free Quote
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
