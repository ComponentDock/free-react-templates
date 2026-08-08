import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[620px] items-center overflow-hidden">
      <img
        src="https://picsum.photos/seed/skyline-hero/1600/900"
        alt="Aerial view of a residential city district"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand/95 via-brand/60 to-transparent" />
      <div className="relative mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
        <p className="text-sm font-bold uppercase tracking-[2.4px] text-white/80">Skyline</p>
        <h1 className="mt-3 max-w-2xl font-display text-4xl font-extrabold uppercase leading-tight text-white sm:text-6xl">
          Properties Now In City
        </h1>
        <p className="mt-5 max-w-md leading-relaxed text-white/80">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna.
        </p>
        <div className="mt-8">
          <ButtonLink
            href="#projects"
            className="rounded-full bg-brand px-8 font-sans text-sm font-semibold uppercase text-white transition-colors hover:bg-brand-dark"
          >
            Learn More
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
