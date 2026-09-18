import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Crypto Investor',
    text: 'Coincast transformed our approach to cryptocurrency trading. Their expert team provided invaluable insights that increased our portfolio by 40% in just three months.',
    avatar: 'https://picsum.photos/seed/coincast-avatar1/100/100',
  },
  {
    name: 'Michael Chen',
    role: 'Blockchain Developer',
    text: 'The security audit service was thorough and professional. They identified vulnerabilities we never knew existed and helped us build a much more robust system.',
    avatar: 'https://picsum.photos/seed/coincast-avatar2/100/100',
  },
  {
    name: 'Elena Rodriguez',
    role: 'FinTech Startup CEO',
    text: 'Working with Coincast was a game-changer. Their market analysis and trading strategies gave us the confidence to make bold moves in the crypto space.',
    avatar: 'https://picsum.photos/seed/coincast-avatar3/100/100',
  },
]

function Stars({ count = 4 }: { count?: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={16}
          className={cn(i < count ? 'fill-brand text-brand' : 'text-gray-300')}
        />
      ))}
    </div>
  )
}

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const t = testimonials[current]!

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <div className="relative rounded-lg bg-paper p-8 md:p-12">
          <Quote size={48} className="absolute right-6 top-6 text-brand/20" />

          <div className="flex flex-col items-center gap-4 md:flex-row md:items-start md:gap-8">
            <img
              src={t.avatar}
              alt={t.name}
              className="h-20 w-20 shrink-0 rounded-full object-cover"
              loading="lazy"
            />
            <div className="text-left">
              <h3 className="font-display text-lg font-bold text-ink">{t.name}</h3>
              <p className="text-sm text-mist">{t.role}</p>
              <Stars />
              <p className="mt-4 leading-relaxed text-mist italic">"{t.text}"</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            aria-label="Previous testimonial"
            className="rounded-full bg-brand p-2 text-white transition-colors hover:bg-brand-dark"
            onClick={() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)}
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to testimonial ${i + 1}`}
                className={cn(
                  'h-3 w-3 rounded-full transition-colors',
                  i === current ? 'bg-brand' : 'bg-gray-300',
                )}
                onClick={() => setCurrent(i)}
              />
            ))}
          </div>
          <button
            aria-label="Next testimonial"
            className="rounded-full bg-brand p-2 text-white transition-colors hover:bg-brand-dark"
            onClick={() => setCurrent((c) => (c + 1) % testimonials.length)}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}
