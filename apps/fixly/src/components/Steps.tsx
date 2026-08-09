import { ButtonLink } from '@free-react-templates/ui'

const steps = [
  {
    title: 'Get A Free Quote',
    blurb: 'Tell us about your vehicle and the issue — we reply with a clear, no-obligation quote.',
  },
  {
    title: 'Book Car Inspection',
    blurb: 'Choose a time that suits you and bring your car in for a thorough inspection.',
  },
  {
    title: 'Get Your Car Fixed',
    blurb: 'Our mechanics repair it with quality parts and hand it back ready for the road.',
  },
] as const

export function Steps() {
  return (
    <section className="bg-paper py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand">
            How it works
          </span>
          <h2 className="mt-2 font-display text-3xl font-black text-ink sm:text-4xl">
            Get Car Repair In Easy Steps
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="relative rounded-2xl border border-gray-100 bg-white p-6 pt-12 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="absolute -top-6 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-brand font-display text-lg font-black text-white">
                {index + 1}
              </span>
              <h3 className="font-display text-lg font-bold text-ink">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mist">{step.blurb}</p>
            </article>
          ))}
        </div>
        <div className="mt-12 flex justify-center gap-3">
          <ButtonLink href="#about" variant="outline">
            Learn More
          </ButtonLink>
          <ButtonLink href="#appointment" className="bg-brand text-white hover:bg-brand-dark">
            Book An Appointment
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
