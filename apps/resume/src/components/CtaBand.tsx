import { cta } from '../data'

/** Full-width photo CTA band: coral heading over a dark photo with a red
 *  "Contact Me Now" button. */
export function CtaBand() {
  return (
    <section aria-label="Call to action" className="relative overflow-hidden">
      <img
        src="https://picsum.photos/seed/resume-city/1920/675"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-4 py-24 text-center lg:py-32">
        <h2 className="font-serif text-4xl font-bold text-brand lg:text-[48px] lg:leading-tight">
          {cta.heading}
        </h2>
        <a
          href={cta.href}
          className="mt-9 rounded bg-brand px-11 py-4 text-sm font-medium capitalize text-white transition-colors hover:bg-primary-700"
        >
          {cta.button}
        </a>
      </div>
    </section>
  )
}
