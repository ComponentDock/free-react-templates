import { useState } from 'react'
import { cn } from '@free-react-templates/ui'

const testimonials = [
  {
    name: 'Sarah Johnson',
    university: 'University of Technology',
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
    avatar: 'https://picsum.photos/seed/learnpath-avatar1/100/100',
  },
  {
    name: 'Michael Chen',
    university: 'Stanford University',
    quote:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place.',
    avatar: 'https://picsum.photos/seed/learnpath-avatar2/100/100',
  },
  {
    name: 'Emily Davis',
    university: 'MIT',
    quote:
      'Far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics.',
    avatar: 'https://picsum.photos/seed/learnpath-avatar3/100/100',
  },
]

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = testimonials[activeIndex]!

  return (
    <section className="bg-bg-light py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="mb-3 text-center text-2xl font-bold text-text">What Students Say</h2>
        <p className="mx-auto mb-10 max-w-2xl text-center text-text-muted">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
          there live the blind texts.
        </p>

        <div className="flex flex-col items-center gap-8 sm:flex-row">
          <img
            src={active.avatar}
            alt={active.name}
            className="h-24 w-24 rounded-full object-cover"
          />
          <div>
            <p className="mb-4 italic text-text-muted">&ldquo;{active.quote}&rdquo;</p>
            <p className="font-bold text-text">{active.name}</p>
            <p className="text-sm text-text-muted">{active.university}</p>
          </div>
        </div>

        {/* Navigation dots */}
        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              aria-label={`Show testimonial from ${t.name}`}
              className={cn(
                'h-3 w-3 rounded-full transition',
                i === activeIndex ? 'bg-brand' : 'bg-border',
              )}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
