import { Star } from 'lucide-react'

interface Testimonial {
  quote: string
  author: string
  date: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      'From the very first consultation, the Vows team made us feel like their only clients. Our wedding was more beautiful than we ever imagined.',
    author: 'Sarah & Michael',
    date: 'June 2025 Wedding',
  },
  {
    quote:
      'They thought of every detail before we even knew to ask. The day flowed perfectly — we simply got to enjoy every moment.',
    author: 'Emma & James',
    date: 'September 2024 Wedding',
  },
  {
    quote:
      'Our destination wedding felt effortless. The coordination was flawless and the design took our breath away.',
    author: 'Isabella & Alexander',
    date: 'May 2025 Wedding',
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary-500">
            Love Letters
          </p>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            What Our Couples Say
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            The greatest reward is hearing from our couples after their special day.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.author}
              className="flex flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900/50"
            >
              <div
                className="flex items-center gap-1"
                role="img"
                aria-label="Rated 5 out of 5 stars"
              >
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className="h-4 w-4 fill-primary-500 text-primary-500"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-gray-600 dark:text-gray-300">
                "{testimonial.quote}"
              </blockquote>
              <figcaption className="mt-6">
                <div className="font-serif font-semibold text-gray-900 dark:text-white">
                  {testimonial.author}
                </div>
                <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  {testimonial.date}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
