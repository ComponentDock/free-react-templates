import { howItWorksImage, howItWorksImageAlt, steps } from '../data'
import { SectionHeading } from './SectionHeading'

/** Dark photo band with black overlay, white heading variant and numbered pink circles. */
export function HowItWorks() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={howItWorksImage}
        alt={howItWorksImageAlt}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-black/40 lg:left-0 lg:w-1/2 lg:bg-black/50"
      />

      <div className="relative z-10 mx-auto max-w-[1250px] px-4 pt-24 pb-28">
        <SectionHeading label="Work flow" title="How it works" white />
        <div className="grid gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <article key={step.number}>
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand text-lg font-semibold text-white">
                {step.number}
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">{step.title}</h3>
              <p className="text-white/80">{step.blurb}</p>
            </article>
          ))}
        </div>
      </div>

      {/* Angled white divider into the about section. */}
      <div aria-hidden="true" className="absolute inset-x-0 -bottom-[30px] z-10 h-[70px]">
        <div className="absolute top-0 left-0 h-full w-1/2 bg-white [transform:skewY(4deg)]" />
        <div className="absolute top-0 right-0 h-full w-1/2 bg-white [transform:skewY(-4deg)]" />
      </div>
    </section>
  )
}
