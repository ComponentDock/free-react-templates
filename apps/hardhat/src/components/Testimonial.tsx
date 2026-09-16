import { Quote } from 'lucide-react'

export function Testimonial() {
  return (
    <section aria-label="Testimonial" className="bg-navy-deep py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <div className="relative mb-8">
          <span className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-6xl font-bold uppercase tracking-wide text-white/5 sm:text-8xl select-none">
            Feedback
          </span>
          <h2 className="relative font-display text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl">
            Testimonial
          </h2>
        </div>

        <Quote className="mx-auto mb-6 h-10 w-10 text-brand/60" aria-hidden="true" />

        <blockquote className="text-base leading-relaxed text-white/80">
          "Heaven fruitful doesn't over lesser days appear creeping seasons so behold bearing days
          open. Heaven fruitful third over lesser days appear creeping seasons so behold bearing
          days open. Heaven fruitful third over lesser days appear."
        </blockquote>

        <div className="mt-8">
          <p className="font-display text-lg font-semibold text-white">Jessya Inn</p>
          <p className="text-sm text-white/50">Co Founder</p>
        </div>
      </div>
    </section>
  )
}
