import { Star } from 'lucide-react'

export function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden py-20 lg:py-[120px]">
      <img
        src="https://picsum.photos/seed/dapper-testimonial/1920/900"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/70" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
        <div
          className="flex items-center justify-center gap-1 text-brand-light"
          aria-label="5 out of 5 stars"
        >
          {Array.from({ length: 5 }, (_, index) => (
            <Star key={index} className="h-5 w-5 fill-current" aria-hidden="true" />
          ))}
        </div>
        <blockquote className="mt-6 font-display text-xl leading-relaxed text-white sm:text-2xl">
          As conscious traveling Paupers we must always be concerned about our dear Mother Earth —
          if you think about it, you travel across her face and she is the host to your journey.
        </blockquote>
        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-brand-light">
          Fanny Spencer
        </p>
      </div>
    </section>
  )
}
