import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Hero"
      className="overflow-hidden bg-gradient-to-r from-primary-500 to-accent-400"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28">
        <div>
          <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
            Drive More Customers <span className="block">Through Digital</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/90">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <ButtonLink
              href="#pricing"
              className="rounded-md bg-white px-9 py-3.5 font-semibold text-primary-400 shadow-lg transition-colors hover:bg-gray-100"
            >
              Get Started
            </ButtonLink>
            <ButtonLink
              href="#features"
              className="rounded-md border border-white bg-transparent px-9 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Sign up for free
            </ButtonLink>
          </div>
        </div>

        <div className="hidden justify-end lg:flex">
          <img
            src="https://picsum.photos/seed/driven-hero/560/640"
            alt="App dashboard preview"
            className="h-auto w-full max-w-md rounded-lg shadow-2xl"
            loading="eager"
          />
        </div>
      </div>
    </section>
  )
}
