import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'John Smith',
    role: 'Patient',
    image: 'https://picsum.photos/seed/curelink-test1/80/80',
    quote:
      'Excellent service and caring staff. The doctors here are very professional and take the time to explain everything thoroughly.',
    rating: 5,
  },
  {
    name: 'Maria Garcia',
    role: 'Patient',
    image: 'https://picsum.photos/seed/curelink-test2/80/80',
    quote:
      'I have been visiting Curelink for years and the quality of care has always been outstanding. Highly recommended for the whole family.',
    rating: 5,
  },
  {
    name: 'David Thompson',
    role: 'Patient',
    image: 'https://picsum.photos/seed/curelink-test3/80/80',
    quote:
      'The emergency department handled my situation with speed and professionalism. I am grateful for the quick response and excellent treatment.',
    rating: 4,
  },
] as const

export function Testimonials() {
  return (
    <section aria-label="Testimonials" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold text-purple-500">
          What Our Patients Say
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-lg border border-gray-100 bg-mist p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="h-14 w-14 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <h3 className="font-bold text-purple-500">{t.name}</h3>
                  <p className="text-sm text-smoke">{t.role}</p>
                </div>
              </div>
              <div className="mt-4 flex gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < t.rating ? 'fill-teal-400 text-teal-400' : 'text-gray-300'}`}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-gray-600">{t.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
