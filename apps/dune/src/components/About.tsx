import { ButtonLink } from '@free-react-templates/ui'

export function About() {
  return (
    <section
      id="about"
      className="bg-gray-50 py-20 transition-colors dark:bg-gray-900 lg:py-[120px]"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="relative">
          <img
            src="https://picsum.photos/seed/dune-about/550/400"
            alt="Group of travelers enjoying a scenic view"
            className="w-full rounded-2xl object-cover shadow-lg"
            width={550}
            height={400}
          />
        </div>
        <div>
          <h2 className="font-display text-3xl font-bold leading-snug text-gray-900 dark:text-white sm:text-4xl">
            Exploration is really the essence of the human spirit
          </h2>
          <p className="mt-6 text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Make she'd moved divided air. Whose tree that replenish tone hath own upon them it
            multiply was blessed is lights make gathering so day dominion so creeping air was made.
          </p>
          <ButtonLink
            href="#packages"
            className="mt-8 inline-flex rounded-full bg-brand px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            Learn More
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
