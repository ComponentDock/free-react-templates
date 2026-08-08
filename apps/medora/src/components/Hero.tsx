import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative flex min-h-[560px] items-center overflow-hidden bg-ink"
    >
      <img
        src="https://picsum.photos/seed/medora-hero/1920/1080"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
      <div className="relative mx-auto flex w-full max-w-6xl justify-end px-4 py-24 sm:px-6">
        <div className="max-w-lg bg-black/55 p-8 text-white sm:p-10">
          <h1 className="text-4xl font-extrabold uppercase tracking-wide sm:text-5xl">
            Quality Care
          </h1>
          <p className="mt-3 text-lg font-medium">Your Health Is Our Priority.</p>
          <p className="mt-4 text-sm leading-relaxed text-white/80">
            Medora Clinic provides compassionate, patient-first medical care — from routine
            check-ups to specialized treatment, delivered by a team you can trust.
          </p>
          <ButtonLink href="#departments" variant="primary" className="mt-7">
            Learn More
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
