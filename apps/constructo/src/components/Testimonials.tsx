import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'James Mitchell',
    role: 'Business Owner',
    text: 'Outstanding work on our office complex. The team was professional, punctual, and delivered exceptional quality throughout the entire project.',
    img: 'https://picsum.photos/seed/constructo-testi-1/100/100',
  },
  {
    name: 'Linda Carter',
    role: 'Homeowner',
    text: 'Our home renovation exceeded all expectations. The attention to detail and craftsmanship was remarkable. Highly recommended for any construction project.',
    img: 'https://picsum.photos/seed/constructo-testi-2/100/100',
  },
  {
    name: 'Robert Kim',
    role: 'Architect',
    text: 'Working with Constructo has been a pleasure. Their team brings expertise and dedication that ensures every project is completed to the highest standard.',
    img: 'https://picsum.photos/seed/constructo-testi-3/100/100',
  },
]

export function Testimonials() {
  return (
    <section className="bg-light py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-2xl font-bold uppercase text-heading">
            Our Testimonials
          </h2>
          <div className="mx-auto mt-2 h-1 w-16 bg-accent" />
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded bg-white p-6 shadow-md">
              <div className="mb-4 flex items-center gap-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="h-14 w-14 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-sans text-sm font-bold text-heading">{t.name}</h4>
                  <p className="text-xs text-body">{t.role}</p>
                </div>
              </div>
              <Quote className="mb-2 h-5 w-5 text-accent" aria-hidden="true" />
              <p className="text-sm leading-relaxed text-body">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
