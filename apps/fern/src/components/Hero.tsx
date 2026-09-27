import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[520px] items-center bg-ink">
      {/* Background image (placeholder) */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/fern-hero/1600/900)' }}
      />
      <div className="absolute inset-0 bg-ink/50" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20">
        <h1 className="mb-4 text-4xl font-extrabold leading-tight text-white md:text-5xl">
          Discover Your
          <br />
          Perfect Home
        </h1>
        <p className="mb-8 max-w-lg text-lg text-gray-200">
          Browse thousands of properties for sale and rent. Find your dream home with Fern — your
          trusted real estate partner.
        </p>
        <ButtonLink href="#properties" variant="primary">
          View Properties
        </ButtonLink>
      </div>
    </section>
  )
}
