import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section id="home" aria-label="Hero" className="bg-gray-900">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28 lg:px-8">
        <div>
          <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            IT Solution for <span className="text-primary-500">Your Business</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-300">
            We provide world-class IT services to help your business grow. Our team of experts
            delivers innovative solutions tailored to your unique needs and challenges.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <ButtonLink
              href="#contact"
              className="rounded-md bg-primary-500 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-600"
            >
              Get Started
            </ButtonLink>
            <ButtonLink
              href="#services"
              className="rounded-md border border-white/30 bg-transparent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Our Services
            </ButtonLink>
          </div>
        </div>

        <div className="hidden justify-end lg:flex">
          <img
            src="https://picsum.photos/seed/netforge-hero/560/480"
            alt="Digital agency team collaborating on IT solutions"
            className="h-auto w-full max-w-md rounded-lg shadow-2xl"
            loading="eager"
          />
        </div>
      </div>
    </section>
  )
}
