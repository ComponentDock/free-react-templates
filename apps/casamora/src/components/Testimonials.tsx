import { cn } from '@free-react-templates/ui'

const TESTIMONIALS = [
  {
    name: 'Jean Smith',
    text: 'An exceptional stay from start to finish. The rooms are beautifully appointed and the staff went above and beyond to make us feel welcome.',
    image: 'https://picsum.photos/seed/casamora-author1/200/200',
  },
  {
    name: 'John Doe',
    text: 'The perfect getaway. Stunning views, delicious food, and a spa that truly refreshed us. We will be coming back next year.',
    image: 'https://picsum.photos/seed/casamora-author2/200/200',
  },
  {
    name: 'Jane Doe',
    text: 'Impeccable service and attention to detail. Every moment spent here was pure luxury. I could not have asked for a better experience.',
    image: 'https://picsum.photos/seed/casamora-author3/200/200',
  },
] as const

interface TestimonialsProps {
  className?: string
}

export function Testimonials({ className }: TestimonialsProps) {
  return (
    <section className={cn('bg-white py-20', className)}>
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-heading text-3xl font-semibold text-heading-text">
            Testimonial
          </h2>
          <span className="mx-auto mb-8 block h-1 w-12 rounded bg-brand" />
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <blockquote key={t.name} className="text-center">
              <img
                src={t.image}
                alt={t.name}
                className="mx-auto mb-4 h-20 w-20 rounded-full object-cover"
              />
              <p className="mb-4 font-body text-sm leading-relaxed italic text-body-text">
                &ldquo;{t.text}&rdquo;
              </p>
              <cite className="not-italic">
                <span className="font-heading text-base font-semibold italic text-heading-text">
                  {t.name}
                </span>
              </cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
