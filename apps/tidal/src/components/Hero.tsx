import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('https://picsum.photos/seed/tidal-hero/1920/1080')",
      }}
    >
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h1 className="font-sans text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
          Discover Your Favorite Place with Us
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90">
          Travel to any corner of the world, without going around in circles
        </p>
        <div className="mt-10">
          <ButtonLink
            href="#destination"
            className="inline-flex rounded bg-brand px-8 py-3 font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            Search Destination
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
