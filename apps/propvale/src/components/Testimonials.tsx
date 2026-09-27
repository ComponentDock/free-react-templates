import { useState } from 'react'
import { Quote } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const testimonials = [
  {
    id: 1,
    text: 'Propvale made finding our dream home incredibly easy. The team was professional, responsive, and truly understood what we were looking for. We could not be happier with our new home!',
    author: 'Sarah Johnson',
    role: 'Homeowner',
    photo: 'https://picsum.photos/seed/propvale-author-1/100/100',
  },
  {
    id: 2,
    text: 'As a first-time buyer, I was nervous about the process. Propvale guided me through every step and helped me find a property within my budget. Highly recommended!',
    author: 'Michael Chen',
    role: 'First-time Buyer',
    photo: 'https://picsum.photos/seed/propvale-author-2/100/100',
  },
  {
    id: 3,
    text: 'The investment property we found through Propvale has exceeded our expectations. Their market knowledge and attention to detail are unmatched in the industry.',
    author: 'Emily Rodriguez',
    role: 'Real Estate Investor',
    photo: 'https://picsum.photos/seed/propvale-author-3/100/100',
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  return (
    <section id="testimonials" className="bg-mist py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="text-center font-display text-3xl font-semibold text-ink dark:text-gray-100">
          What Our Clients Say
        </h2>
        <p className="mt-3 text-center text-gray-500 dark:text-gray-400">
          Real stories from satisfied clients
        </p>

        <div className="mt-12 rounded-lg bg-white p-8 shadow-sm dark:bg-gray-800">
          <Quote className="mb-4 h-8 w-8 text-primary-400" aria-hidden="true" />
          <p className="text-lg leading-relaxed text-ink dark:text-gray-100">
            {testimonials[current]?.text}
          </p>
          <div className="mt-6 flex items-center gap-4">
            <img
              src={testimonials[current]?.photo}
              alt={testimonials[current]?.author}
              className="h-12 w-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-ink dark:text-gray-100">
                {testimonials[current]?.author}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {testimonials[current]?.role}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              className={cn(
                'h-3 w-3 rounded-full transition-colors',
                index === current
                  ? 'bg-primary-400'
                  : 'bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500',
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
