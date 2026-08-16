import { ArrowRight } from 'lucide-react'

/* Centered call-to-action band: red eyebrow, uppercase heading and a red
   button. */
export function CtaBand() {
  return (
    <section aria-label="Join Kinesis" className="mx-auto max-w-7xl px-5 py-16 text-center lg:px-8">
      <span className="text-[13px] font-bold uppercase tracking-wide text-primary">
        Join Us Now
      </span>
      <h2 className="mt-2 font-display text-3xl font-extrabold uppercase leading-tight text-heading lg:text-[34px]">
        Join Us Our Free Workout Training With Kinesis
      </h2>
      <a href="#contact" className="btn-square mt-8 inline-flex items-center gap-2">
        Join Now
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </a>
    </section>
  )
}
