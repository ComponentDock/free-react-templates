import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Mellisa Howard',
    role: 'CEO, XYZ Company',
    quote: 'Absolutely fantastic dining experience. The flavors are unmatched!',
  },
  {
    name: 'Mike Richardson',
    role: 'CEO, XYZ Company',
    quote: 'Best seafood I have had in years. The ambiance is perfect.',
  },
  {
    name: 'Charles White',
    role: 'CEO, XYZ Company',
    quote: 'Every dish tells a story. Highly recommend the special menu.',
  },
]

export function Testimonials() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-10 text-center text-3xl font-bold">Testimonial</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="text-center">
              <div className="mb-4 flex justify-center text-flame-600">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mb-4 text-sm italic text-gray-600">&ldquo;{t.quote}&rdquo;</p>
              <h4 className="font-bold">{t.name}</h4>
              <p className="text-xs text-gray-500">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
