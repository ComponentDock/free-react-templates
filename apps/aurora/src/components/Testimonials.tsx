import { Card } from '@free-react-templates/ui'

const testimonials = [
  {
    quote: 'Aurora rebuilt our website and conversions jumped 40% in the first month.',
    author: 'Sarah Chen',
    role: 'Founder, Loop',
  },
  {
    quote: 'A rare mix of design taste and engineering rigor — a joy to work with.',
    author: 'Marcus Reid',
    role: 'CTO, Northbeam',
  },
  {
    quote: 'Delivered ahead of schedule, and the codebase is immaculate.',
    author: 'Priya Patel',
    role: 'Product Manager, Kite',
  },
] as const

export function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-20 bg-white py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Testimonials
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.author} className="flex flex-col">
              <Card.Content className="flex-1">
                <p className="text-gray-700 dark:text-gray-300">&ldquo;{testimonial.quote}&rdquo;</p>
              </Card.Content>
              <Card.Footer>
                <p className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
              </Card.Footer>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
