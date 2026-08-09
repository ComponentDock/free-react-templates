import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <img
        src="https://picsum.photos/seed/dapper-hero/1920/1080"
        alt="Barber trimming a client's hair"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      <div className="relative z-10 max-w-3xl px-4 py-32 text-center sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-light">
          For All Occasion
        </p>
        <h1 className="mt-4 font-display text-4xl font-bold uppercase tracking-wide text-white sm:text-5xl lg:text-6xl">
          HairStyle is a Must Try Fashion
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim.
        </p>
        <div className="mt-8">
          <ButtonLink
            href="#about"
            className="rounded-full bg-gradient-to-r from-brand to-brand-light px-8 uppercase tracking-wide hover:from-brand-dark hover:to-brand"
          >
            Watch Intro Video
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
