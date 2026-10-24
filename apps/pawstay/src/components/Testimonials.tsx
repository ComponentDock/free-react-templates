import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'I left my golden retriever with them for a week and he came back happier than ever. Daily photos and walks — I could relax completely.',
    name: 'Sofia Martinez',
    role: 'Dog owner',
  },
  {
    quote:
      'They groomed my cat beautifully and were so gentle with her. Booking was easy and the team clearly adores animals.',
    name: 'James Wilson',
    role: 'Cat owner',
  },
] as const

export function Testimonials() {
  return (
    <section id="testimonials" className="py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-extrabold text-night dark:text-white">
          Happy Clients &amp; Feedbacks
        </h2>
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name} className="rounded-lg bg-paper p-8 dark:bg-gray-800">
              <Quote className="h-8 w-8 text-brand" aria-hidden="true" />
              <blockquote className="mt-4 font-light leading-relaxed text-gray-600 dark:text-gray-300">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6">
                <span className="block font-bold text-night dark:text-white">
                  {testimonial.name}
                </span>
                <span className="text-sm font-light text-gray-500 dark:text-gray-400">
                  {testimonial.role}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
