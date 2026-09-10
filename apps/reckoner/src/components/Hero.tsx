import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/reckoner-hero/1920/1080)',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h1 className="font-display text-4xl font-bold text-white sm:text-5xl md:text-6xl">
          Bookkeeping Consulting Agency
        </h1>
        <p className="mt-6 text-lg text-gray-200 sm:text-xl">
          Professional financial solutions for your business. We help you manage your finances with
          expertise and dedication.
        </p>
        <ButtonLink
          href="#about"
          className="mt-8 inline-flex items-center justify-center rounded bg-primary-500 px-8 py-3 text-sm font-semibold uppercase text-white transition-colors hover:bg-primary-600"
        >
          Get Started
        </ButtonLink>
      </div>
    </section>
  )
}
