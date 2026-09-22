import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Helena Phillips',
    role: 'Fitness Enthusiast',
    image: 'https://picsum.photos/seed/stallion-t1/100/100',
    quote:
      'Stallion transformed my approach to fitness. The trainers are incredibly supportive and the equipment is top-notch. I have never felt better!',
  },
  {
    name: 'Cordelia Barton',
    role: 'Yoga Instructor',
    image: 'https://picsum.photos/seed/stallion-t2/100/100',
    quote:
      'The variety of classes and the welcoming community make this the best gym I have ever trained at. Highly recommend to everyone.',
  },
  {
    name: 'Carrie Reese',
    role: 'Marathon Runner',
    image: 'https://picsum.photos/seed/stallion-t3/100/100',
    quote:
      'Professional trainers, modern facilities, and a motivating atmosphere. Stallion is the perfect place to push your limits.',
  },
]

export function Testimonials() {
  return (
    <section className="bg-[#f9f9ff] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">Testimonial from our Clients</h2>
          <p className="mt-4 text-muted">
            See what our members have to say about their experience.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-lg bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-brand text-brand" aria-hidden="true" />
                ))}
              </div>
              <p className="mb-6 leading-relaxed text-muted">{t.quote}</p>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-semibold text-ink">{t.name}</h4>
                  <p className="text-sm text-muted">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
