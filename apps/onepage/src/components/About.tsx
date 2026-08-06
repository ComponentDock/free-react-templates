import { ButtonLink } from '@free-react-templates/ui'

export function About() {
  return (
    <section id="about" aria-label="About" className="bg-white py-16 sm:py-24 dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-500 dark:text-primary-300">
            About OnePage
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl dark:text-white">
            Designed to Convert
          </h2>
          <p className="mt-5 leading-relaxed text-gray-600 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris.
          </p>
          <div className="mt-8">
            <ButtonLink
              href="#contact"
              className="rounded-full bg-primary-500 px-8 py-3 text-white hover:bg-primary-600"
            >
              Learn More
            </ButtonLink>
          </div>
        </div>
        <div>
          <img
            src="https://picsum.photos/seed/onepage-1/640/480"
            alt="One Page website preview"
            loading="lazy"
            className="w-full rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}
