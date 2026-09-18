import { Star } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Excellent legal representation! The team at Counsel handled my case with professionalism and dedication. I highly recommend their services to anyone needing legal assistance.',
    name: 'Sarah Johnson',
    role: 'Business Owner',
  },
  {
    quote:
      'I was facing a complex legal matter and the attorneys at Counsel provided clear guidance throughout the entire process. Their expertise made all the difference.',
    name: 'Michael Chen',
    role: 'Real Estate Developer',
  },
  {
    quote:
      'The team was responsive, knowledgeable, and truly cared about achieving the best outcome for my family. I cannot thank them enough for their outstanding work.',
    name: 'Emily Rodriguez',
    role: 'Healthcare Professional',
  },
] as const

export function Testimonials() {
  return (
    <section id="testimonials" aria-label="Testimonials" className="bg-[#1d2124] py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-semibold text-white">Happy Clients</h2>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="rounded-md bg-[#343a40] p-7">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-primary-500 text-primary-500"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-gray-300">"{testimonial.quote}"</p>
              <div className="mt-6 border-t border-gray-600 pt-4">
                <p className="font-display text-sm font-semibold text-white">{testimonial.name}</p>
                <p className="text-xs text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
