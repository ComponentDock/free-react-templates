import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    text: 'I just wanted to say thank you for making such gorgeous arrangements for our birthday celebration. I could not get over how perfect they were for the party. You did a fantastic job, and I appreciate it very much.',
    author: 'Alejandro Houston',
    role: 'Businessman',
  },
  {
    text: 'The flowers were absolutely stunning and arrived right on time. The team went above and beyond to make our wedding centerpiece dreams come true. Highly recommended!',
    author: 'Sarah Mitchell',
    role: 'Bride',
  },
  {
    text: 'We have been ordering from Petal for all our corporate events. The quality and freshness of every arrangement has been consistently outstanding.',
    author: 'James Carter',
    role: 'Event Coordinator',
  },
]

function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
    </svg>
  )
}

export function Testimonials() {
  const [idx, setIdx] = useState(0)

  function prev() {
    setIdx((i) => (i === 0 ? testimonials.length - 1 : i - 1))
  }

  function next() {
    setIdx((i) => (i === testimonials.length - 1 ? 0 : i + 1))
  }

  const t = testimonials[idx]!

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <QuoteIcon className="mx-auto mb-6 h-10 w-10 text-rose-200" />
        <p className="mb-6 text-lg leading-relaxed text-gray-600 italic">&ldquo;{t.text}&rdquo;</p>
        <h4 className="text-base font-bold text-gray-900">{t.author}</h4>
        <span className="text-sm text-gray-400">{t.role}</span>
        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            aria-label="Previous testimonial"
            onClick={prev}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:border-rose-400 hover:text-rose-400"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            aria-label="Next testimonial"
            onClick={next}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:border-rose-400 hover:text-rose-400"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
