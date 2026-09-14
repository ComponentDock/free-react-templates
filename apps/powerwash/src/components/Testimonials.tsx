import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Racky Henderson',
    role: 'Homeowner',
    text: 'Exceptional service! Our house has never looked so clean. The team was professional, punctual, and thorough.',
    img: 'https://picsum.photos/seed/pw-testi-1/100/100',
  },
  {
    name: 'Henry Dee',
    role: 'Business Owner',
    text: 'Our storefront looks brand new after their commercial cleaning service. Highly recommended for any business.',
    img: 'https://picsum.photos/seed/pw-testi-2/100/100',
  },
  {
    name: 'Mark Huff',
    role: 'Property Manager',
    text: 'Reliable, efficient, and great results every time. They handle all our property maintenance cleaning needs.',
    img: 'https://picsum.photos/seed/pw-testi-3/100/100',
  },
  {
    name: 'Rodel Golez',
    role: 'Real Estate Agent',
    text: 'Fast turnaround and stunning results. My clients are always impressed with how their properties look after a wash.',
    img: 'https://picsum.photos/seed/pw-testi-4/100/100',
  },
]

export function Testimonials() {
  return (
    <section className="py-16 bg-dark-50 relative">
      <div className="absolute inset-0 bg-dark-50/50" />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12">Happy Clients &amp; Feedbacks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover shrink-0"
                />
                <div>
                  <Quote size={20} className="text-brand-500 mb-1" />
                  <div className="flex gap-0.5 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-accent-400 text-accent-400" />
                    ))}
                  </div>
                  <p className="text-sm text-dark-600 italic leading-relaxed">
                    &ldquo;{t.text}&rdquo;
                  </p>
                </div>
              </div>
              <div className="border-t pt-3 mt-2">
                <p className="font-bold text-sm">{t.name}</p>
                <p className="text-xs text-dark-400">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
