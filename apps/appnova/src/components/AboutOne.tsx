import { ButtonLink } from '@free-react-templates/ui'

export function AboutOne() {
  return (
    <section id="about-1" className="bg-white py-24 dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <img
          src="https://picsum.photos/seed/appnova-about-1/600/800"
          alt="Appnova app features showcase"
          className="mx-auto w-full max-w-sm rounded-3xl shadow-xl"
        />
        <div>
          <h2 className="font-display text-3xl font-bold leading-snug text-ink dark:text-white sm:text-4xl">
            Designed for a Seamless Experience
          </h2>
          <p className="mt-6 leading-relaxed text-muted dark:text-gray-400">
            Great apps are built on great foundations. Appnova delivers intuitive interfaces and
            thoughtful design so every interaction feels natural and effortless from the very first
            tap.
          </p>
          <ButtonLink
            href="#pricing"
            className="mt-8 rounded-full bg-gradient-to-r from-purple-500 to-purple-400 px-12 py-4 text-sm font-medium uppercase tracking-wide text-white hover:from-purple-600 hover:to-purple-500"
          >
            Get Details
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
