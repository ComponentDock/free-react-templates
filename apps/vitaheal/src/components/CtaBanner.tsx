import { ButtonLink } from '@free-react-templates/ui'

/** Parallax CTA banner: appointment prompt with "Call Now" button. */
export function CtaBanner() {
  return (
    <section
      className="relative bg-cover bg-center bg-fixed"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/vitaheal-cta/1920/600)' }}
    >
      <div className="absolute inset-0 bg-teal-800/80" aria-hidden="true" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-16 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div className="max-w-xl text-center sm:text-left">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Make an appointment with one of our professional Doctors.
          </h2>
          <p className="mt-3 text-sm leading-6 text-white/80">
            Our experienced medical team is ready to provide personalized care. Schedule your visit
            today and take the first step toward better health.
          </p>
        </div>
        <ButtonLink
          href="#info"
          className="inline-flex h-12 shrink-0 items-center rounded-sm bg-coral-400 px-8 font-semibold text-white uppercase transition-colors hover:bg-coral-500"
        >
          Call Now
        </ButtonLink>
      </div>
    </section>
  )
}
