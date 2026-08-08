import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Arlo delivered a complete redesign ahead of schedule. The attention to detail was remarkable.',
    name: 'Sarah Mitchell',
    role: 'CEO, Innovate Labs',
  },
  {
    quote:
      'Working with Arlo transformed our product. Clear communication and exceptional craft from day one.',
    name: 'David Chen',
    role: 'Product Lead, TechCorp',
  },
  {
    quote:
      'The most reliable developer we have worked with. The platform he built scales beautifully.',
    name: 'Emily Rodriguez',
    role: 'CTO, Pixelworks',
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-20 dark:bg-gray-950 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            What Clients Say
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Feedback from people I have had the pleasure of working with.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure
              key={item.name}
              className="flex flex-col rounded-2xl border border-gray-200 bg-gray-50 p-8 dark:border-gray-800 dark:bg-gray-900"
            >
              <Quote className="h-6 w-6 text-primary-400" aria-hidden="true" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-6">
                <p className="font-semibold text-gray-900 dark:text-white">{item.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">{item.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
