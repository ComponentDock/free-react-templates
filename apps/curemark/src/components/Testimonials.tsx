import { cn } from '@free-react-templates/ui'

interface TestimonialsProps {
  className?: string
}

interface Testimonial {
  quote: string
  name: string
  affiliation: string
  avatarSeed: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      'The care I received was exceptional. The doctors were thorough, compassionate, and made sure I understood every step of my treatment plan.',
    name: 'Sarah Johnson',
    affiliation: 'Patient, Cardiology',
    avatarSeed: 'curemark-avatar-1',
  },
  {
    quote:
      'I had a wonderful experience from start to finish. The staff was friendly and professional, and the facility is truly world-class.',
    name: 'Michael Chen',
    affiliation: 'Patient, Orthopaedy',
    avatarSeed: 'curemark-avatar-2',
  },
  {
    quote:
      'They took excellent care of my family. The pediatric team was incredibly patient and kind with my children. Highly recommend!',
    name: 'Emily Davis',
    affiliation: 'Patient, Pediatry',
    avatarSeed: 'curemark-avatar-3',
  },
]

export function Testimonials({ className }: TestimonialsProps) {
  return (
    <section
      className={cn('py-16 bg-section-testimonial', className)}
      aria-label="Patient testimonials"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-body text-center mb-12">
          Patient&apos;s Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-lg p-6 shadow-sm">
              <p className="text-sm text-body-light mb-6 italic leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={`https://picsum.photos/seed/${t.avatarSeed}/80/80`}
                  alt={`Avatar of ${t.name}`}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-bold text-body">{t.name}</p>
                  <p className="text-xs text-body-light">{t.affiliation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
