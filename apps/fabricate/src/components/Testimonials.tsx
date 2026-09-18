import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Fannie Rowe',
    rating: 4,
    text: 'Outstanding industrial solutions. Their team delivered our factory upgrade on time and under budget. Highly recommended for any manufacturing project.',
  },
  {
    name: 'James Mitchell',
    rating: 5,
    text: 'Professional, reliable, and innovative. They transformed our outdated production line into a modern, efficient operation. Exceptional work quality.',
  },
  {
    name: 'Sarah Thompson',
    rating: 4,
    text: 'Their engineering expertise is second to none. From initial consultation to final implementation, every step was handled with precision and care.',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < count ? 'fill-brand text-brand' : 'text-white/30'}`}
        />
      ))}
    </div>
  )
}

export function Testimonials() {
  return (
    <section className="relative py-20 bg-ink">
      <div className="absolute inset-0 bg-black/50" />
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://picsum.photos/seed/fabricate-test/1920/800)',
        }}
      />

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
          <p className="text-white/60 max-w-xl mx-auto">
            Real feedback from businesses we&apos;ve helped transform through industrial engineering
            excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-brand/20 flex items-center justify-center">
                  <span className="text-brand font-bold text-lg">{t.name.charAt(0)}</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">{t.name}</h4>
                  <Stars count={t.rating} />
                </div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
