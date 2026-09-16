import { ButtonLink } from '@free-react-templates/ui'

export function Cta() {
  return (
    <section className="bg-brand py-16">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-bold text-white">Ready to Start Your Journey?</h2>
        <p className="mx-auto mt-4 max-w-xl text-white/80">
          Join hundreds of professionals who have transformed their lives through our coaching
          programs.
        </p>
        <ButtonLink
          href="#contact"
          className="mt-8 inline-flex rounded-lg bg-white px-8 py-3 text-base font-semibold text-brand transition-colors hover:bg-gray-100"
        >
          Book a Free Consultation
        </ButtonLink>
      </div>
    </section>
  )
}
