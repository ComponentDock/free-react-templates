import { Star } from 'lucide-react'

export function Testimonials() {
  return (
    <section className="bg-paper py-20 lg:py-[120px]">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
          Testimonials
        </span>
        <h2 className="mt-4 font-display text-3xl font-bold text-ink sm:text-4xl">
          What Our Guests Say
        </h2>
        <blockquote className="mt-8">
          <p className="text-lg leading-relaxed text-mist italic">
            &ldquo;The best hotel experience I have ever had. The staff were incredibly attentive,
            the rooms were immaculate, and every meal was a masterpiece. I cannot wait to return for
            another unforgettable stay.&rdquo;
          </p>
          <div className="mt-8">
            <div className="flex justify-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-brand text-brand" aria-label="star" />
              ))}
            </div>
            <cite className="mt-4 block not-italic">
              <span className="font-display text-lg font-bold text-ink">Clifford Frazier</span>
              <span className="ml-2 text-sm text-mist">, Regular Client</span>
            </cite>
          </div>
        </blockquote>
      </div>
    </section>
  )
}
