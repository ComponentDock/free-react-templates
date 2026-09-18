import { Star } from 'lucide-react'
import { testimonials } from '../data'

export function Testimonial() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12 text-center">
          <span className="mb-3 block font-script text-3xl text-brand">Testimonials</span>
          <h2 className="text-3xl font-semibold text-navy md:text-5xl">What our clients say</h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-xl border border-gray-100 bg-white p-8 shadow-sm">
              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    aria-hidden="true"
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="mb-6 text-[15px] leading-relaxed text-muted">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <h4 className="text-[15px] font-semibold text-navy">{t.name}</h4>
                  <p className="text-[13px] text-muted">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
