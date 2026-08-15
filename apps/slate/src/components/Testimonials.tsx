import { Quote } from 'lucide-react'
import { Card } from '@free-react-templates/ui'
import { testimonials } from '../data'

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-mist py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Teams that switched to Slate shipped their sites in days, not months.
          </p>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="p-6">
              <Quote className="h-8 w-8 text-slate" aria-hidden="true" />
              <p className="mt-4 text-gray-700">&ldquo;{testimonial.quote}&rdquo;</p>
              <p className="mt-5 font-bold text-gray-900">{testimonial.name}</p>
              <p className="mt-1 text-sm text-gray-500">{testimonial.role}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
