import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-ink"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/gymbox-hero/1920/1080)' }}
        aria-hidden="true"
      />
      {/* Dark overlay gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(181,8,8,0.38) 0%, rgba(0,0,0,0.6) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h1 className="font-display text-5xl font-bold uppercase leading-tight tracking-wide text-white sm:text-6xl md:text-7xl">
          Build Up Your
          <br />
          Body Shape
        </h1>
        <p className="mt-6 text-lg tracking-wide text-gray-200">
          Build Your Body and Fitness with Professional Touch
        </p>
        <ButtonLink
          href="#contact"
          className="boxed-btn3 mt-8 inline-flex px-10 py-3 text-xl text-white"
        >
          Join Us
        </ButtonLink>
      </div>
    </section>
  )
}
