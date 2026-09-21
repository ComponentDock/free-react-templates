import { Quote } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const testimonials = [
  {
    text: 'Loanforge made the entire loan process seamless. Their team was responsive and professional from start to finish.',
    name: 'Jessya Inn',
    role: 'Co Founder',
    seed: 'loanforge-test1',
  },
  {
    text: 'Thanks to Loanforge, our business secured the funding needed to expand into three new markets within a year.',
    name: 'Michael Torres',
    role: 'CEO, GrowthTech',
    seed: 'loanforge-test2',
  },
  {
    text: 'The best lending experience I have ever had. Transparent terms and competitive rates that truly helped our startup.',
    name: 'Aisha Patel',
    role: 'Founder, InnovateLabs',
    seed: 'loanforge-test3',
  },
]

export function Testimonial() {
  const current = testimonials[0]!

  return (
    <section className="py-20" style={{ backgroundColor: '#fbf9ff' }}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Quote icon */}
          <div className="mb-6 flex justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/10">
              <Quote size={28} className="text-gold" />
            </div>
          </div>

          {/* Testimonial text */}
          <p className="mb-8 text-lg leading-relaxed text-text italic">
            &ldquo;{current.text}&rdquo;
          </p>

          {/* Founder info */}
          <div className="flex items-center justify-center gap-4">
            <img
              src={`https://picsum.photos/seed/${current.seed}/80/80`}
              alt={current.name}
              className="h-12 w-12 rounded-full object-cover"
            />
            <div className="text-left">
              <p className="font-bold text-navy">{current.name}</p>
              <p className="text-sm text-text-dim">{current.role}</p>
            </div>
          </div>

          {/* Dots */}
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={`testimonial-dot-${i}`}
                type="button"
                aria-label={`Show testimonial ${i + 1}`}
                className={cn(
                  'h-3 w-3 rounded-full transition-colors',
                  i === 0 ? 'bg-brand' : 'bg-gray-300 hover:bg-gray-400',
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
