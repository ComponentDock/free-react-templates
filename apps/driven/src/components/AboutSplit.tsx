import { ButtonLink } from '@free-react-templates/ui'

export function AboutSplit() {
  return (
    <section aria-label="About" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-semibold leading-snug text-ink dark:text-gray-100">
            Right people at the <span className="block">Right time.</span>
          </h2>
          <p className="mt-6 leading-relaxed text-smoke dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <ButtonLink
              href="#pricing"
              className="rounded-md bg-gradient-to-r from-primary-500 to-accent-400 px-9 py-3.5 font-semibold text-white transition-opacity hover:opacity-90"
            >
              Get Started
            </ButtonLink>
            <ButtonLink
              href="#contact"
              className="rounded-md border border-gray-300 bg-white px-9 py-3.5 font-semibold text-ink transition-colors hover:border-primary-400 hover:text-primary-400 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
            >
              Sign Up Free
            </ButtonLink>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src="https://picsum.photos/seed/driven-about/560/420"
            alt="Team working together"
            className="h-auto w-full max-w-md rounded-md shadow-xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
