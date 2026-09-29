import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Hero"
      className="overflow-hidden bg-gradient-to-r from-primary-700 to-secondary-500"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28">
        <div>
          <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
            We Collect High Quality Leads
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <ButtonLink
              href="#contact"
              className="rounded-md bg-accent-400 px-9 py-3.5 font-semibold text-white shadow-lg transition-colors hover:bg-accent-500"
            >
              Contact Us
            </ButtonLink>
          </div>
        </div>

        <div className="hidden justify-end lg:flex">
          <img
            src="https://picsum.photos/seed/rankforge-hero/560/500"
            alt="SEO agency digital illustration"
            className="h-auto w-full max-w-md rounded-lg shadow-2xl"
            loading="eager"
          />
        </div>
      </div>
    </section>
  )
}
