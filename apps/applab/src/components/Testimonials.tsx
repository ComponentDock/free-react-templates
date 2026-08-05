import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Applab helped us launch in record time — the template looks exactly like the product we dreamed of.',
    name: 'Robert Smile',
    role: 'Product Manager',
  },
  {
    quote:
      'The clean design and smooth animations gave our landing page a truly premium feel from day one.',
    name: 'Sarah Mitchell',
    role: 'Marketing Lead',
  },
  {
    quote:
      'Setting up the page took minutes. Every section is polished, responsive, and easy to customize.',
    name: 'James Carter',
    role: 'Startup Founder',
  },
  {
    quote:
      'Our conversion rate jumped after switching to Applab. It is fast, beautiful, and effortless to maintain.',
    name: 'Emma Wilson',
    role: 'Growth Strategist',
  },
] as const

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-paper py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-600 dark:text-primary-400">
            Testimonials
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-navy dark:text-white sm:text-4xl lg:text-5xl">
            Review from our regular users
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="rounded-3xl bg-white p-8 shadow-sm dark:bg-gray-900"
            >
              <div className="flex items-center justify-between">
                <Quote className="h-8 w-8 text-primary-400" aria-hidden="true" />
                <div className="flex gap-1" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }, (_, index) => (
                    <Star
                      key={index}
                      className="h-4 w-4 fill-accent text-accent"
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>
              <blockquote className="mt-4 text-gray-600 dark:text-gray-300">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-100 font-display font-bold text-primary-600 dark:bg-primary-900/40 dark:text-primary-400">
                  {testimonial.name.charAt(0)}
                </span>
                <span>
                  <span className="block font-semibold text-navy dark:text-white">
                    {testimonial.name}
                  </span>
                  <span className="block text-sm text-muted dark:text-gray-400">
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
