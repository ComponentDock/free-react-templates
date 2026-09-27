import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    quote: 'Homeward made the entire process seamless. We found our dream home in just two weeks!',
    name: 'Emily Carter',
    role: 'Homeowner',
    avatar: 'https://picsum.photos/seed/homeward-test1/100/100',
  },
  {
    id: 2,
    quote:
      'The listings were accurate and detailed. The agent was professional and responsive throughout.',
    name: 'Michael Torres',
    role: 'First-time Buyer',
    avatar: 'https://picsum.photos/seed/homeward-test2/100/100',
  },
  {
    id: 3,
    quote:
      'Best real estate platform I have used. Found a beautiful apartment downtown at a great price.',
    name: 'Sarah Kim',
    role: 'Renters',
    avatar: 'https://picsum.photos/seed/homeward-test3/100/100',
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  const { quote, name, role, avatar } = testimonials[current]!

  return (
    <section id="news" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-lg">
            <img
              src="https://picsum.photos/seed/homeward-testimonials/800/600"
              alt="Happy clients in their new home"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-brand/60" aria-hidden="true" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
              Testimonials
            </p>
            <h2 className="mb-8 text-2xl font-bold text-heading sm:text-3xl">
              Clients Testimonials
            </h2>
            <div aria-live="polite">
              <Quote className="mb-4 h-8 w-8 text-accent" aria-hidden="true" />
              <p className="text-sm leading-relaxed text-body italic">&ldquo;{quote}&rdquo;</p>
              <div className="mt-6 flex items-center gap-4">
                <img src={avatar} alt={name} className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-semibold text-heading">{name}</p>
                  <p className="text-xs text-body">{role}</p>
                </div>
              </div>
            </div>
            <div className="mt-8 flex items-center gap-3">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous testimonial"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-body transition-colors hover:border-accent hover:text-accent"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next testimonial"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-body transition-colors hover:border-accent hover:text-accent"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
