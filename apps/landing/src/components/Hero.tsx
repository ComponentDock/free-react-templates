import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-b from-primary-50 to-white py-16 sm:py-24 dark:from-gray-900 dark:to-gray-950"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <h1 className="font-display text-4xl font-bold leading-tight text-ink sm:text-5xl dark:text-white">
            Landing pages that convert
          </h1>
          <p className="mt-5 max-w-xl leading-relaxed text-gray-600 dark:text-gray-400">
            From idea to launch in minutes — build a beautiful, fast landing page that turns
            visitors into customers.
          </p>
          <ButtonLink href="#contact" className="mt-9 rounded-full px-10 py-3.5">
            Get Started
          </ButtonLink>
        </div>
        <img
          src="https://picsum.photos/seed/landing-hero/640/560"
          alt="Landing hero preview"
          className="mx-auto w-full max-w-md rounded-2xl shadow-xl"
        />
      </div>
    </section>
  )
}
