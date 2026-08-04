import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'My anxious rescue dog Max used to hate grooming, but the team at Pawpal has completely changed his outlook. He actually gets excited when we pull into the parking lot!',
    name: 'Sarah Mitchell',
    role: 'Golden retriever mom',
  },
  {
    quote:
      'The daycare is amazing! My pup comes home happy and tired every single day. The daily report cards and photo updates are such a thoughtful touch.',
    name: 'Jessica Thompson',
    role: 'Daycare regular',
  },
  {
    quote:
      'We board our two cats here whenever we travel, and they always seem relaxed and well cared for when we pick them up. Total peace of mind.',
    name: 'Michael Park',
    role: 'Boarding client',
  },
  {
    quote:
      'Professional, gentle, and incredibly kind. The full grooming package leaves our golden looking and smelling fabulous every time.',
    name: 'David Martinez',
    role: 'Full grooming client',
  },
] as const

export function Testimonials() {
  return (
    <section className="bg-primary-50 py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-600 dark:text-primary-400">
            Testimonials
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
            What Pet Parents Say
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="rounded-3xl bg-white p-8 shadow-sm dark:bg-gray-800"
            >
              <Quote className="h-8 w-8 text-primary-400" aria-hidden="true" />
              <blockquote className="mt-4 text-gray-600 dark:text-gray-300">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-100 font-serif font-bold text-primary-600 dark:bg-primary-900/40 dark:text-primary-400">
                  {testimonial.name.charAt(0)}
                </span>
                <span>
                  <span className="block font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </span>
                  <span className="block text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
