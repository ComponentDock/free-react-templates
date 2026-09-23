import { cn } from '@free-react-templates/ui'

interface Testimonial {
  quote: string
  name: string
  role: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small.',
    name: 'Louise Kelly',
    role: 'Illustrator Designer',
    image: 'https://picsum.photos/seed/tribunal-test1/80/80',
  },
  {
    quote:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text.',
    name: 'James Morgan',
    role: 'Business Consultant',
    image: 'https://picsum.photos/seed/tribunal-test2/80/80',
  },
  {
    quote:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however.',
    name: 'Sarah Chen',
    role: 'Marketing Director',
    image: 'https://picsum.photos/seed/tribunal-test3/80/80',
  },
]

interface TestimonialsProps {
  className?: string
}

export function Testimonials({ className }: TestimonialsProps) {
  return (
    <section
      id="won-cases"
      className={cn('py-20 bg-cover bg-center relative', className)}
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/tribunal-testimonials/1920/800)',
      }}
    >
      <div className="absolute inset-0 bg-hero-overlay/80" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Testimonials</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white/10 backdrop-blur-sm p-8">
              <blockquote className="text-white/90 leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <span className="text-white font-semibold block">{t.name}</span>
                  <span className="text-white/70 text-sm">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
