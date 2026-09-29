import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    text: 'Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices nec sed neque. Fusce ac mattis nulla. Morbi eget ornare dui.',
    name: 'Robert Thomson',
    role: 'Business Owner',
    image: 'https://picsum.photos/seed/seoflow-test1/80/80',
  },
  {
    text: 'Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices nec sed neque. Fusce ac mattis nulla. Morbi eget ornare dui.',
    name: 'Sarah Williams',
    role: 'Marketing Director',
    image: 'https://picsum.photos/seed/seoflow-test2/80/80',
  },
  {
    text: 'Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices nec sed neque. Fusce ac mattis nulla. Morbi eget ornare dui.',
    name: 'James Cooper',
    role: 'Startup Founder',
    image: 'https://picsum.photos/seed/seoflow-test3/80/80',
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prev = () => setCurrentIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1))
  const next = () => setCurrentIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1))

  const current = testimonials[currentIndex]!

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-3xl mx-auto">
          <div className="text-center">
            <Quote className="w-12 h-12 text-brand-pink mx-auto mb-6" />
            <p className="text-gray-600 text-lg leading-relaxed mb-8 italic">{current.text}</p>
            <div className="flex items-center justify-center gap-4">
              <img
                src={current.image}
                alt={current.name}
                className="w-14 h-14 rounded-full object-cover"
                loading="lazy"
              />
              <div className="text-left">
                <h4 className="font-semibold text-brand-navy">{current.name}</h4>
                <span className="text-sm text-gray-500">{current.role}</span>
              </div>
            </div>
          </div>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors hidden md:block"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors hidden md:block"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-colors ${idx === currentIndex ? 'bg-brand-pink' : 'bg-gray-300'}`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
