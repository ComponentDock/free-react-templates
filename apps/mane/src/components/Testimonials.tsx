import { Star } from 'lucide-react'

export function Testimonials() {
  return (
    <section id="testimonial" className="relative overflow-hidden py-20 lg:py-[120px]">
      <img
        src="https://picsum.photos/seed/mane-testimonial/1920/900"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-plum/90" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="mt-4 font-display text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl">
          Happy Customer
        </h2>
        <div
          className="mt-8 flex items-center justify-center gap-1 text-brand-light"
          aria-label="5 out of 5 stars"
        >
          {Array.from({ length: 5 }, (_, index) => (
            <Star key={index} className="h-5 w-5 fill-current" aria-hidden="true" />
          ))}
        </div>
        <blockquote className="mt-6 font-display text-xl leading-relaxed text-white sm:text-2xl">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
          there live the blind texts. The stylists here transformed my look completely — I have
          never felt more confident.
        </blockquote>
        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-brand-light">
          JONT NICOLIN KOOK
        </p>
      </div>
    </section>
  )
}
