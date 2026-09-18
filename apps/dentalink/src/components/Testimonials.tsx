import { cn } from '@free-react-templates/ui'
import { Star } from 'lucide-react'

interface TestimonialsProps {
  className?: string
}

const testimonials = [
  {
    quote:
      'The team at Dentalink made my visit completely painless. I was nervous but they put me at ease right away.',
    name: 'Sarah Johnson',
    title: 'Patient',
    avatar: 'https://picsum.photos/seed/dentalink-test1/100/100',
  },
  {
    quote:
      'Professional, caring, and thorough. I highly recommend their cosmetic dentistry services.',
    name: 'Michael Chen',
    title: 'Patient',
    avatar: 'https://picsum.photos/seed/dentalink-test2/100/100',
  },
  {
    quote: 'My family has been coming here for years. The kids love the friendly atmosphere.',
    name: 'Emily Rodriguez',
    title: 'Patient',
    avatar: 'https://picsum.photos/seed/dentalink-test3/100/100',
  },
]

export function Testimonials({ className }: TestimonialsProps) {
  return (
    <section className={cn('py-16 px-4 bg-white', className)} data-testid="testimonials">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-ink text-center mb-12">
          Feedback from our real clients
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-paper rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-brand text-brand" />
                ))}
              </div>
              <p className="text-mist text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-semibold text-ink text-sm">{t.name}</p>
                  <p className="text-mist text-xs">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
