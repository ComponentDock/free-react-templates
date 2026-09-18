import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Few would argue that, despite the advancements of technology, businesses still face challenges in finding the right digital solution. This team delivered beyond expectations.',
    author: 'Mark Wiens',
    company: 'Google Inc.',
  },
  {
    quote:
      'The attention to detail and commitment to quality was evident from start to finish. Our new platform has received outstanding feedback from users.',
    author: 'Sarah Chen',
    company: 'TechForward',
  },
  {
    quote:
      'Working with this team transformed our online presence completely. The results speak for themselves — increased engagement and conversions.',
    author: 'David Park',
    company: 'Innovate Labs',
  },
]

const firstTestimonial = testimonials[0]!

export function TestimonialSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row">
          <div className="w-full text-center md:w-1/3">
            <h2 className="mb-2 text-5xl font-bold text-brand">5962+</h2>
            <p className="text-sm uppercase text-body">Projects Completed</p>
          </div>
          <div className="w-full md:w-2/3">
            <div className="relative rounded-lg bg-white p-8 shadow-sm">
              <Quote size={32} className="mb-4 text-brand/30" />
              <p className="mb-4 leading-relaxed text-body">
                &ldquo;{firstTestimonial.quote}&rdquo;
              </p>
              <span className="text-sm font-semibold uppercase text-heading">
                {firstTestimonial.author}, {firstTestimonial.company}
              </span>
            </div>
            <div className="mt-4 flex justify-center gap-2">
              {testimonials.map((_, i) => (
                <span
                  key={i}
                  className={`h-2 w-2 rounded-full ${i === 0 ? 'bg-brand' : 'bg-gray-300'}`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
