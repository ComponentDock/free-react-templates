import { Star } from 'lucide-react'

interface Testimonial {
  id: number
  title: string
  text: string
  author: string
  image: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    title: 'Amazing Experience',
    text: 'BlueCoast made finding our dream home so easy. The search filters helped us narrow down exactly what we wanted.',
    author: 'Sarah Johnson',
    image: 'https://picsum.photos/seed/bluecoast-t1/80/80',
    rating: 5,
  },
  {
    id: 2,
    title: 'Professional Service',
    text: 'The team was incredibly helpful throughout the entire process. We found the perfect apartment in just two days.',
    author: 'Michael Chen',
    image: 'https://picsum.photos/seed/bluecoast-t2/80/80',
    rating: 5,
  },
  {
    id: 3,
    title: 'Highly Recommended',
    text: 'Great selection of properties and excellent customer support. I would recommend BlueCoast to anyone looking for a new home.',
    author: 'Emily Davis',
    image: 'https://picsum.photos/seed/bluecoast-t3/80/80',
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-20" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 id="testimonials-heading" className="text-3xl font-bold text-text-dark">
            What our clients say
          </h2>
          <p className="mt-2 text-text-gray">Testimonials from happy homeowners</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <article
              key={t.id}
              className="rounded-[22px] bg-white p-8 shadow-md transition-shadow hover:shadow-lg"
            >
              <h3 className="mb-3 text-lg font-bold text-text-dark">{t.title}</h3>
              <p className="mb-6 text-sm leading-relaxed text-text-gray">{t.text}</p>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.author} className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <a href="#" className="text-sm font-semibold text-brand-primary hover:underline">
                    {t.author}
                  </a>
                  <div className="mt-1 flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
