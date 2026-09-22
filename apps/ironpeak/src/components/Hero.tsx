import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/ironpeak-hero/1920/1080)' }}
    >
      <div className="absolute inset-0 bg-ink/60" />
      <div className="relative z-10 px-4 text-center">
        <h1 className="text-4xl font-extrabold uppercase tracking-wider text-white sm:text-6xl lg:text-7xl">
          Health is wealth
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
          Transform your body and mind with expert-led fitness classes. Start your journey to a
          healthier, stronger you today.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <ButtonLink
            href="#classes"
            className="border-2 border-white bg-transparent px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-ink"
          >
            Get Started
          </ButtonLink>
          <a
            href="#"
            className="text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:text-brand"
          >
            Download
          </a>
        </div>
      </div>
    </section>
  )
}
