import { ButtonLink } from '@free-react-templates/ui'

export function Intro() {
  return (
    <section id="about" className="bg-white py-20 transition-colors dark:bg-gray-950">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">Welcome</p>
        <h2 className="mt-3 font-display text-3xl leading-snug text-ink sm:text-4xl dark:text-white">
          Beauty Anywhere Anytime
        </h2>
        <p className="mt-5 text-base leading-relaxed text-muted">
          A small river named Duden flows by their place and supplies it with the necessary
          regelialia. It is a paradisematic country, in which roasted parts of sentences fly into
          your mouth. Even the all-powerful Pointing has no control about the blind texts.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <ButtonLink href="#services" variant="primary" className="rounded-full px-7">
            Our Services
          </ButtonLink>
          <ButtonLink
            href="#contact"
            variant="outline"
            className="rounded-full border-brand px-7 text-brand hover:bg-brand hover:text-white"
          >
            Make An Appointment
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
