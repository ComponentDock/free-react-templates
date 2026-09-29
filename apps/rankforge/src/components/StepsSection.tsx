import { ButtonLink } from '@free-react-templates/ui'

export function StepsSection() {
  return (
    <section aria-label="We create steps" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="flex justify-center lg:justify-start">
          <img
            src="https://picsum.photos/seed/rankforge-steps/560/420"
            alt="Digital product creation steps"
            className="h-auto w-full max-w-md rounded-md shadow-xl"
            loading="lazy"
          />
        </div>

        <div>
          <h3 className="font-display text-3xl font-semibold leading-snug text-primary-700 dark:text-gray-100">
            We Create a Steps to Build a <span className="block">Successful Digital Product</span>
          </h3>
          <p className="mt-6 leading-relaxed text-smoke dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
          <div className="mt-9">
            <ButtonLink
              href="#contact"
              className="rounded-md bg-accent-400 px-9 py-3.5 font-semibold text-white transition-colors hover:bg-accent-500"
            >
              Contact Us
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
