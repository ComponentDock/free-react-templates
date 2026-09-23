import { cn } from '@free-react-templates/ui'

interface Testimonial {
  name: string
  role: string
  quote: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Johnson',
    role: 'Business Owner',
    quote:
      'Oathmark provided exceptional legal guidance for our business incorporation. Their team was professional, responsive, and thorough throughout the entire process.',
    avatar: 'https://picsum.photos/seed/oathmark-person1/100/100',
  },
  {
    name: 'Michael Chen',
    role: 'Real Estate Investor',
    quote:
      'I have worked with many law firms, but Oathmark stands out for their attention to detail and genuine care for their clients. Highly recommended.',
    avatar: 'https://picsum.photos/seed/oathmark-person2/100/100',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Immigration Client',
    quote:
      'The immigration team at Oathmark made a complex process feel simple. They handled my case with expertise and compassion. I am truly grateful.',
    avatar: 'https://picsum.photos/seed/oathmark-person3/100/100',
  },
]

interface TestimonialsProps {
  className?: string
}

export function Testimonials({ className }: TestimonialsProps) {
  return (
    <section id="testimonials" className={cn('bg-bg-light py-20', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            Happy Customers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See what our clients have to say about their experience working with our team.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={t.avatar}
                alt={t.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                loading="lazy"
              />
              <h4 className="text-lg font-heading font-semibold text-gray-900 text-center">
                {t.name}
              </h4>
              <p className="text-sm text-brand text-center mb-4">{t.role}</p>
              <blockquote className="text-gray-600 text-sm leading-relaxed text-center italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
