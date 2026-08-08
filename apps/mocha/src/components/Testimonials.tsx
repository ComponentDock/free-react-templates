import { Star } from 'lucide-react'

type Testimonial = {
  quote: string
  name: string
  role: string
}

const testimonials: Testimonial[] = [
  {
    quote: "The best coffee I've ever had. Their Ethiopian pour-over is transcendent.",
    name: 'Michael Chen',
    role: 'Coffee Enthusiast',
  },
  {
    quote: 'Finally, a coffee shop that takes their craft seriously. Worth every penny.',
    name: 'Sarah Williams',
    role: 'Food Blogger',
  },
  {
    quote:
      "I've been a subscriber for 2 years. The beans arrive fresh, and the variety keeps me excited.",
    name: 'David Park',
    role: 'Home Barista',
  },
]

export function Testimonials() {
  return (
    <section className="bg-white py-20 dark:bg-gray-950 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            What People Are Saying
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Join thousands of happy coffee lovers
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="flex flex-col rounded-3xl border border-primary-100 bg-primary-50/60 p-8 dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="flex gap-1" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }, (_, index) => (
                  <Star
                    key={index}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-gray-700 dark:text-gray-200">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-600 font-display text-lg font-bold text-white">
                  {testimonial.name.charAt(0)}
                </span>
                <span>
                  <span className="block font-medium text-gray-900 dark:text-white">
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
