import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Laurel has completely changed the way I learn. The courses are well-structured and the instructors are incredibly knowledgeable.',
    name: 'Sarah Johnson',
    designation: 'Marketing Manager',
    image: 'https://picsum.photos/seed/laurel-testimonial1/100/100',
  },
  {
    quote:
      'The flexibility of learning at my own pace while having access to expert support made all the difference in my career.',
    name: 'Michael Chen',
    designation: 'Software Developer',
    image: 'https://picsum.photos/seed/laurel-testimonial2/100/100',
  },
  {
    quote:
      "I've taken courses on many platforms, but Laurel stands out for its quality content and supportive community.",
    name: 'Emily Rodriguez',
    designation: 'Data Analyst',
    image: 'https://picsum.photos/seed/laurel-testimonial3/100/100',
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-primary py-20 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            What Our Customers Say
          </h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="relative rounded-[10px] bg-white p-8 shadow-lg">
              <Quote className="absolute top-4 right-4 h-8 w-8 text-primary-light" />
              <p className="text-sm leading-relaxed text-brand-body">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-6 flex items-center gap-4">
                <img src={t.image} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-semibold text-brand-heading">{t.name}</p>
                  <p className="text-xs text-brand-body">{t.designation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
