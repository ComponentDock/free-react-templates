import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-ink"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/iron-hero/1920/1080)' }}
        aria-hidden="true"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h1 className="font-display text-4xl font-bold uppercase leading-tight tracking-wide text-white sm:text-5xl md:text-6xl">
          Real Fitness Depends
          <br />
          on Exercise
        </h1>
        <p className="mt-6 text-lg uppercase tracking-widest text-gray-200">
          Shape your body well.
        </p>
        <ButtonLink
          href="#offer"
          className="mt-8 inline-flex rounded bg-primary-400 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-primary-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
        >
          Join Now
        </ButtonLink>
      </div>
    </section>
  )
}
