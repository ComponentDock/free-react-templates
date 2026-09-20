import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Fanny Spencer',
    text: 'BrightPath changed my career trajectory. The courses are comprehensive, well-structured, and taught by true experts in their fields.',
    rating: 5,
    image: 'https://picsum.photos/seed/brightpath-testi1/200/200',
  },
  {
    name: 'Mark Anderson',
    text: 'I gained practical skills that I could apply immediately at work. The platform is intuitive and the course quality is outstanding.',
    rating: 5,
    image: 'https://picsum.photos/seed/brightpath-testi2/200/200',
  },
  {
    name: 'Lisa Chen',
    text: 'The best online learning experience I have had. Lifetime access means I can revisit courses whenever I need a refresher.',
    rating: 5,
    image: 'https://picsum.photos/seed/brightpath-testi3/200/200',
  },
]

export function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Testimonial cards */}
          <div className="lg:w-2/3 space-y-6">
            {testimonials.map((t) => (
              <div key={t.name} className="flex gap-6 items-start bg-gray-50 p-6 rounded-lg">
                <Quote className="w-8 h-8 text-brand flex-shrink-0 mt-1" />
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <h4 className="text-base font-semibold text-heading">{t.name}</h4>
                    <div className="flex gap-0.5">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-brand text-brand" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-body leading-relaxed">{t.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Author thumbnails */}
          <div className="lg:w-1/3 flex lg:flex-col gap-4">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="relative group cursor-pointer overflow-hidden rounded-lg flex-1 lg:flex-none lg:h-32"
              >
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                  <span className="text-white text-sm font-medium">{t.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
