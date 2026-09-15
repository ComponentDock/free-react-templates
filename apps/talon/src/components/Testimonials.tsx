import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur leo est, feugiat nec elementum id, suscipit id nulla. Sed ut perspiciatis.',
    name: 'John Doe',
    role: 'CEO, Company',
    avatar: 'https://picsum.photos/seed/talon-avatar1/80/80',
  },
  {
    quote:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.',
    name: 'Jane Smith',
    role: 'CTO, Startup',
    avatar: 'https://picsum.photos/seed/talon-avatar2/80/80',
  },
] as const

export function Testimonials() {
  return (
    <section aria-label="Testimonials" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold text-ink dark:text-gray-100">
            What People Say
          </h2>
          <p className="mt-5 leading-relaxed text-smoke dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-md bg-mist p-8 shadow-sm dark:bg-gray-900"
            >
              <Quote className="h-8 w-8 text-primary-400/30" aria-hidden="true" />
              <p className="mt-4 leading-relaxed text-smoke dark:text-gray-400">
                {testimonial.quote}
              </p>
              <div className="mt-6 flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="font-display text-sm font-semibold text-ink dark:text-gray-100">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-smoke dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
