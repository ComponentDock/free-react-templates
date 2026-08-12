import { Quote } from 'lucide-react'

const TESTIMONIAL_BG = 'https://picsum.photos/seed/imagine-testimonial-bg/1920/900'

/* Testimonials recreated from the source's photo-background slider: a
   cover photo under a brand-gradient overlay with a quote, name, and role. */

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="Testimonials"
      className="relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${TESTIMONIAL_BG})` }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-brand-start to-brand-end opacity-60"
      />
      <div className="relative z-10 mx-auto max-w-3xl px-4 py-24 text-center lg:px-8 lg:py-32">
        <Quote className="mx-auto h-10 w-10 text-white/90" aria-hidden="true" />
        <blockquote className="mt-6 text-lg leading-relaxed text-white lg:text-xl">
          &ldquo;When you are searching for the right partner to turn your ideas into products,
          Imagine is the team that delivers on every promise — on time and beyond
          expectations.&rdquo;
        </blockquote>
        <p className="mt-8 text-lg font-semibold text-white">Mark Alviro Wiens</p>
        <p className="mt-1 text-sm text-white/80">CEO at Google</p>
      </div>
    </section>
  )
}
