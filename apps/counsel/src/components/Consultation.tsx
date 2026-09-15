import { ButtonLink } from '@free-react-templates/ui'

export function Consultation() {
  return (
    <section id="consultation" aria-label="Free Consultation" className="bg-[#343a40] py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-semibold text-white">Free Consultation</h2>
        <p className="mt-6 leading-relaxed text-gray-300">
          Facing a legal challenge? Our experienced attorneys are here to help you navigate through
          complex legal matters. Schedule a free consultation today and let us assess your case with
          no obligation.
        </p>
        <div className="mt-10">
          <ButtonLink
            href="#contact"
            className="rounded-md bg-primary-500 px-9 py-3.5 font-semibold text-white transition-colors hover:bg-primary-600"
          >
            Get Free Consultation
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
