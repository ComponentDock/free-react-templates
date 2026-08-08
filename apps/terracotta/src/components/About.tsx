import { ButtonLink } from '@free-react-templates/ui'

export function About() {
  return (
    <section id="about" className="bg-paper py-20 dark:bg-gray-950 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="max-w-2xl font-display text-4xl font-extrabold uppercase leading-tight text-ink dark:text-white">
          About Us
        </h2>
        <p className="mt-6 max-w-2xl leading-relaxed text-mist dark:text-gray-400">
          Living. Over. The god, living a creature that appear place creeping upon. It you said seas
          every creeping and a life shall unto, years hath seed be called light him cattle.
          They&apos;re cattle creepeth void given rule evening stars midst saying light greater.
        </p>
        <ButtonLink
          href="#project"
          className="mt-8 rounded-[5px] bg-brand px-8 font-sans text-sm font-semibold uppercase text-white hover:bg-brand-dark"
        >
          Learn More
        </ButtonLink>
      </div>
    </section>
  )
}
