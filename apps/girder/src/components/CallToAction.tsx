import { ButtonLink } from '@free-react-templates/ui'

export function CallToAction() {
  return (
    <section className="bg-coal py-20 text-center sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="font-display text-3xl font-extrabold uppercase leading-tight text-white sm:text-4xl">
          The road of success is always under construction
        </h2>
        <p className="mx-auto mt-5 max-w-xl leading-relaxed text-white/70">
          A small river named Duden flows by their place and supplies it with the necessary
          regelialia. It is a paradisematic country, in which roasted parts of sentences fly into
          your mouth.
        </p>
        <ButtonLink
          href="#contact"
          className="mt-8 rounded-[5px] bg-brand px-10 font-sans text-sm font-semibold uppercase text-white hover:bg-brand-dark"
        >
          Get a free quote
        </ButtonLink>
      </div>
    </section>
  )
}
