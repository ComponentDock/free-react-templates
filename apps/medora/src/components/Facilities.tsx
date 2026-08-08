import { ButtonLink } from '@free-react-templates/ui'

export function Facilities() {
  return (
    <section id="facilities" aria-label="Facilities" className="bg-paper py-20 lg:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold text-ink lg:text-4xl">Modern Medical Facilities</h2>
          <p className="mt-5 text-sm leading-relaxed text-body">
            Our clinic is equipped with state-of-the-art imaging, surgical suites, and comfortable
            patient rooms — designed around safety, privacy, and quick recovery.
          </p>
          <ButtonLink href="#appointment" className="mt-7">
            Schedule a Visit
          </ButtonLink>
        </div>
        <img
          src="https://picsum.photos/seed/medora-facility/640/480"
          alt="Modern medical facility"
          className="w-full rounded-lg shadow-lg"
        />
      </div>
    </section>
  )
}
