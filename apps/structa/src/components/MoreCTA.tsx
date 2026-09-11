import { ButtonLink } from '@free-react-templates/ui'

export function MoreCTA() {
  return (
    <section className="bg-dark py-16" aria-label="More projects CTA">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Want to build something great?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/70">
          Let's discuss your next construction project and bring your vision to life.
        </p>
        <ButtonLink
          href="#contact"
          className="mt-8 inline-flex rounded-full bg-brand px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
        >
          Contact Us
        </ButtonLink>
      </div>
    </section>
  )
}
