import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center justify-center overflow-hidden bg-ink"
    >
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/civicpulse-hero/1600/900"
          alt="Political rally with supporters"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative z-10 px-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/80">
          Don't look further, This is our Leader
        </p>
        <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
          Support Our Party
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-gray-300">
          Inspires employees and organizations to support causes they care about. We do this to
          bring more resources to the communities that are changing our world.
        </p>
        <div className="mt-8">
          <ButtonLink
            href="#about"
            className="rounded-full bg-brand px-8 py-3 text-sm font-semibold text-white hover:bg-brand-dark"
          >
            Get Started
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
