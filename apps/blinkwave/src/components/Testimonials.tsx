import { Star } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Blinkwave transformed our office connectivity. We went from constant lag to seamless video conferencing and cloud access across all 50 workstations.',
    name: 'Sarah Mitchell',
    role: 'Operations Director',
  },
  {
    quote:
      'The installation was quick and the speeds are exactly as promised. Our household streams 4K on multiple devices without a hiccup.',
    name: 'James Ortega',
    role: 'Home User',
  },
]

export function Testimonials() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 sm:px-6 lg:flex-row">
        {/* Text side */}
        <div className="w-full lg:w-6/12">
          <span className="mb-3 inline-block text-sm font-bold uppercase tracking-widest text-signal-400">
            Testimonials
          </span>
          <h2 className="mb-10 text-3xl font-extrabold leading-tight text-navy-800 sm:text-4xl">
            What our clients think about us!
          </h2>
          <div className="space-y-8">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-[0_10px] bg-white p-6 shadow-sm">
                <div className="mb-3 flex gap-0.5 text-signal-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mb-4 text-sm leading-relaxed text-gray-500">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <span className="text-sm font-bold text-navy-800">{t.name}</span>
                  <span className="ml-2 text-xs text-gray-400">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image side */}
        <div className="w-full lg:w-6/12">
          <img
            src="https://picsum.photos/seed/blinkwave-testimonial/600/500"
            alt="Happy Blinkwave customer"
            className="w-full rounded-[0_10px] object-cover shadow-lg"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
