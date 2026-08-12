import { ButtonLink } from '@free-react-templates/ui'

export function CallToAction() {
  return (
    <section className="bg-brand px-4 py-16 text-center sm:px-6 lg:py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-display text-4xl font-medium uppercase text-white md:text-5xl">
          Come &amp; Train With Us
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-white/95">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>
        <ButtonLink
          href="#contact"
          className="mt-8 rounded-none bg-ink px-12 py-5 font-display text-sm font-medium uppercase tracking-wider text-white hover:bg-ink-dark"
        >
          Join Now
        </ButtonLink>
      </div>
    </section>
  )
}
