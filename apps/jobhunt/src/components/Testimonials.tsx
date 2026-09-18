import { Quote } from 'lucide-react'
import { useState } from 'react'

const testimonials = [
  {
    quote:
      'The automated process starts as soon as your clothes go into the machine. The outcome is gleaming clothes.',
    name: 'Sarah Johnson',
    role: 'Web Developer',
    avatar: 'https://picsum.photos/seed/avatar1/80/80',
  },
  {
    quote:
      'Placeholder text commonly used in the graphic, print, and publishing industries for previewing visual layout.',
    name: 'Mike Chen',
    role: 'UX Designer',
    avatar: 'https://picsum.photos/seed/avatar2/80/80',
  },
  {
    quote:
      'The automated process starts as soon as your clothes go into the machine. The outcome is gleaming clothes.',
    name: 'Emma Davis',
    role: 'Marketing Manager',
    avatar: 'https://picsum.photos/seed/avatar3/80/80',
  },
]

export function Testimonials() {
  const [active, setActive] = useState(0)
  const t = testimonials[active]!

  return (
    <section className="bg-bg-gray py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Quote className="text-brand/20 mx-auto mb-8" size={48} />

        <div className="min-h-[200px]">
          <p className="text-brand-dark text-xl lg:text-2xl leading-relaxed mb-8 italic">
            &ldquo;{t.quote}&rdquo;
          </p>

          <div className="flex items-center justify-center gap-4">
            <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full object-cover" />
            <div className="text-left">
              <h5 className="text-brand-dark font-bold text-lg">{t.name}</h5>
              <p className="text-text-muted text-sm">{t.role}</p>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-3 h-3 rounded-full transition-colors ${
                i === active ? 'bg-brand' : 'bg-brand/20'
              }`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
