import { Star } from 'lucide-react'

const testimonials = [
  {
    quote:
      'I switched careers from retail to software engineering in eight months, thanks to the bootcamp track.',
    name: 'Alex Thompson',
    role: 'Software Engineer at Stripe',
  },
  {
    quote:
      'The data science courses are the clearest I have found anywhere. The hands-on projects made all the difference.',
    name: 'Sofia Martinez',
    role: 'Data Scientist at Meta',
  },
  {
    quote:
      'Coursely gave me a portfolio and the confidence to apply. I landed my first design job within a month.',
    name: 'James Wright',
    role: 'Product Designer at Figma',
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <span className="inline-flex rounded-full bg-primary-100 px-3 py-1 text-sm font-semibold text-primary-700 dark:bg-primary-900/40 dark:text-primary-300">
            Testimonials
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-white">
            What Our Students Say
          </h2>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }, (_, starIndex) => (
                  <Star
                    key={starIndex}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <blockquote className="mt-4 text-gray-700 dark:text-gray-200">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-4">
                <img
                  src={`https://picsum.photos/seed/coursely-student-${testimonials.indexOf(testimonial) + 1}/48/48`}
                  alt={`Portrait of ${testimonial.name}`}
                  loading="lazy"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
