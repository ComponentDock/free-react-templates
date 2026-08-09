import { Quote, Star } from 'lucide-react'
import { Badge, Card } from '@free-react-templates/ui'

const testimonials = [
  {
    quote:
      'The Cura team made my heart surgery recovery feel effortless. Every follow-up was on time and every question was answered with patience.',
    name: 'Maria Gonzalez',
    treatment: 'Cardiology Care',
  },
  {
    quote:
      'Booking online took two minutes and the neurologist actually listened. I finally feel like a doctor hears me.',
    name: 'James Whitfield',
    treatment: 'Neurology Visit',
  },
  {
    quote:
      'As a first-time parent I was nervous, but Dr. Chen and the pediatrics team guided us through every step with warmth and expertise.',
    name: 'Priya Sharma',
    treatment: 'Pediatric Care',
  },
] as const

export function Testimonials() {
  return (
    <section aria-label="Patient testimonials" className="bg-white py-16 lg:py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-primary-100 px-4 py-1.5 text-sm font-semibold text-primary-800 dark:bg-primary-900/50 dark:text-primary-200">
            Testimonials
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            What Our Patients Say
          </h2>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="flex flex-col rounded-2xl p-7 shadow-sm transition-shadow hover:shadow-lg"
            >
              <Card.Content className="flex flex-1 flex-col p-0">
                <Quote
                  className="h-8 w-8 text-primary-200 dark:text-primary-800"
                  aria-hidden="true"
                />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  “{testimonial.quote}”
                </blockquote>
                <div
                  className="mt-5 flex items-center gap-0.5 text-amber-400"
                  aria-label="5 out of 5 stars"
                >
                  {Array.from({ length: 5 }, (_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <p className="mt-3 text-base font-bold text-gray-900 dark:text-white">
                  {testimonial.name}
                </p>
                <Badge
                  variant="success"
                  className="mt-1 w-fit bg-success-100 text-success-700 dark:bg-success-900/40 dark:text-success-300"
                >
                  {testimonial.treatment}
                </Badge>
              </Card.Content>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
