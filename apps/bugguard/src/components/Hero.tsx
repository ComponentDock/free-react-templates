import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[500px] items-center justify-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('https://picsum.photos/seed/bugguard-hero/1600/600')" }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 px-4 text-center">
        <span className="mb-3 inline-block rounded-full border border-white/30 bg-white/10 px-4 py-1 text-sm font-medium uppercase tracking-wider text-white backdrop-blur-sm">
          Pest Control
        </span>
        <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
          Keep your House clean &amp; Safe
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-gray-200">
          Trusted. Experienced. Dedicated.
        </p>
        <ButtonLink
          href="#about"
          className="mt-8 inline-flex rounded-full bg-brand px-8 py-3 text-sm font-bold uppercase tracking-wider text-white hover:bg-brand-dark"
        >
          Learn More
        </ButtonLink>
      </div>
    </section>
  )
}
