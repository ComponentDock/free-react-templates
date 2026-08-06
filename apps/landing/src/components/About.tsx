import { ButtonLink } from '@free-react-templates/ui'

export function About() {
  return (
    <section id="about" aria-label="About" className="bg-white py-16 sm:py-24 dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <img
          src="https://picsum.photos/seed/landing-about/640/560"
          alt="Landing about preview"
          className="mx-auto w-full max-w-md rounded-2xl shadow-xl"
        />
        <div>
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl dark:text-white">
            Built for modern teams
          </h2>
          <p className="mt-5 max-w-xl leading-relaxed text-gray-600 dark:text-gray-400">
            Ship faster with a page that feels like your product — every section is customizable,
            accessible, and ready for your brand in minutes.
          </p>
          <ButtonLink href="#contact" className="mt-9 rounded-full px-10 py-3.5">
            Learn More
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
